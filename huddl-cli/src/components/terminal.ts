import * as termkit from 'terminal-kit';
const term = termkit.terminal;

export default async function terminal() {
  term.clear();
  term.green('Welcome to the Huddl Terminal!\n');
  term('Type something and press enter: ');
  term.inputField({}, (_error: unknown, _input: string | undefined) => {
    term(`\nYou typed: %s\n`, _input ?? '');
    term.processExit(0);
  });
}
