import { useEffect, useRef, useState } from "react";
import { Terminal } from "@xterm/xterm";
import "@xterm/xterm/css/xterm.css";
import { CLI_COLORS } from "@/components/cli-colors";
import { commandMap } from "@/components/cli-commands";

type CliWindowProps = {
  onExit?: () => void;
};

export default function CliWindow({ onExit }: CliWindowProps) {
  const terminalRef = useRef<HTMLDivElement>(null);
  const xtermRef = useRef<Terminal | null>(null);
  const [height, setHeight] = useState(320);
  const [dragging, setDragging] = useState(false);
  const minHeight = 160;
  const maxHeight = typeof window !== 'undefined' ? window.innerHeight - 80 : 600;

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      if (dragging) {
        const newHeight = window.innerHeight - e.clientY;
        setHeight(Math.max(minHeight, Math.min(maxHeight, newHeight)));
      }
    }
    function onMouseUp() {
      setDragging(false);
    }
    if (dragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [dragging, maxHeight]);

  useEffect(() => {
    if (terminalRef.current && !xtermRef.current) {
      const term = new Terminal({
        theme: { background: '#1a1a1a' },
        fontFamily: '"Fira Code", monospace',
        fontSize: 16,
        cols: window.innerWidth,
        rows: window.innerHeight,
        cursorBlink: true,
        cursorStyle: 'bar',
      });
      term.open(terminalRef.current);
      term.writeln(`${CLI_COLORS.skyblue}Welcome to Huddl CLI${CLI_COLORS.skyblue}!`);
      term.writeln(`${CLI_COLORS.skyblue}Type ${CLI_COLORS.cyan}/namaste${CLI_COLORS.skyblue} or ${CLI_COLORS.cyan}/intro${CLI_COLORS.skyblue} to get started.${CLI_COLORS.reset}\n`);
      prompt(term);
      xtermRef.current = term;
    }
    return () => {
      if (xtermRef.current) {
        xtermRef.current.dispose();
        xtermRef.current = null;
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function prompt(term: Terminal) {
    term.write("$: ");
    let input = "";
    const onKey = ({ key, domEvent }: { key: string; domEvent: KeyboardEvent }) => {
      if (domEvent.key === "Enter") {
        term.writeln("");
        handleCommand(input, term);
        input = "";
        term.write("$ ");
      } else if (domEvent.key === "Backspace") {
        if (input.length > 0) {
          input = input.slice(0, -1);
          term.write("\b \b");
        }
      } else if (key.length === 1) {
        input += key;
        term.write(key);
      }
    };
    term.onKey(onKey);
  }

  function handleCommand(cmd: string, term: Terminal) {
    const command = cmd.trim();
    const action = commandMap[command];
    if (action) {
      action(xtermRef, onExit);
    } else if (command.length > 0) {
      term.writeln(`${CLI_COLORS.red}\nUnknown command: ${command}${CLI_COLORS.reset}`);
    }
  }

  return (
    <div
      className="fixed left-0 right-0 bottom-0 z-50 bg-[#1a1a1a] shadow-2xl flex flex-col border-t border-[#333]"
      style={{ height: height, minHeight, maxHeight, transition: dragging ? 'none' : 'height 0.2s' }}
    >
      {/* Drag handle */}
      <div
        className="w-full h-3 cursor-row-resize flex items-center justify-center bg-[#222] border-b border-[#333] select-none"
        onMouseDown={() => setDragging(true)}
        style={{ userSelect: 'none' }}
      >
        <div className="w-16 h-1.5 rounded bg-gray-500 opacity-60" />
      </div>
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-2 bg-[#222] border-b border-[#333]">
        <span className="text-white font-semibold">Huddl CLI</span>
      </div>
      {/* Terminal */}
      <div ref={terminalRef} className="w-full h-full" style={{ minHeight: 0, textAlign: 'left' }} />
    </div>
  );
}
