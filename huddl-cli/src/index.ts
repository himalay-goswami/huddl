#!/usr/bin/env node
import { Command } from 'commander';
import login from './components/login';
import log from './components/log';
import report from './components/report';
import terminal from './components/terminal';

const program = new Command();
program
  .name('huddl')
  .description('CLI for interacting with the Huddl server API')
  .version('0.1.0');

program
  .command('login')
  .description('Authenticate with the Huddl server')
  .action(login);

program
  .command('log <message>')
  .description('Send a log message to the Huddl server')
  .action(log);

program
  .command('report')
  .description('Get a report from the Huddl server')
  .action(report);

program
  .command('terminal')
  .description('Open a terminal UI connected to the Huddl server')
  .action(terminal);

program.parse(process.argv);
