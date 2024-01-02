import { Command } from 'commander';
import { azureCommand } from './providers/azure';

const program = new Command();

program
  .name('cloudopt')
  .description('CLI tool for cloud resource optimization')
  .version('0.0.1')
  .option('-c, --config <file>', 'Specify a custom configuration file')
  .option('-v, --verbose', 'Enable verbose logging');

// Delegate Azure command to the Azure module
program.addCommand(azureCommand());

program.parse(process.argv);

