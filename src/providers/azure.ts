import { Command } from 'commander';

export function azureCommand() {
  const azure = new Command('azure');

  azure
    .description('Optimize Azure cloud resources')
    .option('-s, --subscription <subscription_id>', 'Specify the Azure subscription to analyser')
    .option('-t, --type <resource_type>', 'Specify the type of resource (e.g., VM, Blob Storage)')
    .option('-p, --period <time_period>', 'Define the time period for analysis')
    .option('-o, --output <format>', 'Output format (json, table)')
    .option('--save-report <path>', 'Path to save the report')
    .option('--threshold <percentage>', 'Utilization threshold for identifying underutilized resources')
    .action((options) => {
      // Azure-specific optimization logic goes here
      console.log('Azure optimization started with options:', options);
    });

  return azure;
}

