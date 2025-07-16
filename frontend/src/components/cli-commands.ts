import { CLI_COLORS } from "@/components/cli-colors";
import type { Terminal } from "@xterm/xterm";

export type CliExitCallback = () => void;

export type CliCommandMap = Record<string, (xtermRef: React.MutableRefObject<Terminal | null>, exitCli?: CliExitCallback) => void>;

export const commandMap: CliCommandMap = {
  "/namaste": (xtermRef) => {
    xtermRef.current?.writeln(
      `${CLI_COLORS.cyan}\nNamaste! 🙏 Huddl is your ${CLI_COLORS.green}developer hub${CLI_COLORS.cyan}: a calm, fast, and personal workspace for journaling, tracking, and searching your work.${CLI_COLORS.reset}\n`
    );
  },
  "/intro": (xtermRef) => {
    xtermRef.current?.writeln(`${CLI_COLORS.yellow}\nAvailable commands:`);
    xtermRef.current?.writeln(`  ${CLI_COLORS.green}/namaste${CLI_COLORS.reset}   - Learn what Huddl is`);
    xtermRef.current?.writeln(`  ${CLI_COLORS.green}/help${CLI_COLORS.reset}       - Show this help message`);
    xtermRef.current?.writeln(`  ${CLI_COLORS.green}/intro${CLI_COLORS.reset}      - Show this intro`);
    xtermRef.current?.writeln(`  ${CLI_COLORS.green}/exit${CLI_COLORS.reset}       - Close the CLI`);
    xtermRef.current?.writeln("");
  },
  "/exit": (xtermRef, exitCli) => {
    xtermRef.current?.writeln(`${CLI_COLORS.magenta}Exiting Huddl CLI...${CLI_COLORS.reset}`);
    if (exitCli) exitCli();
  },
};
