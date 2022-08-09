import { Command } from 'commander';
import clear from 'clear';
import chalk from 'chalk';
import figlet from 'figlet';

const program = new Command();

program
  .version('0.0.1')
  .description('A CLI for generating a new project')
  .command('init')
  .action(() => {
    clear();
    console.log(chalk.magenta(figlet.textSync('My CLI', { horizontalLayout: 'full' })));
  });

program.parse(process.argv);

if (program.args.length === 0) {
  program.help();
}
