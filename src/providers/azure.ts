import { Command } from 'commander';
import { listAzureResources } from './azure/findResources';

export function azureCommand() {
  const azure = new Command('azure');
  let args = {};
  azure
    .description('Optimize Azure cloud resources')
    //.option('-s, --subscriptionId <subscription_id>', 'Specify the Azure subscription to analyser')
    .option('-t, --type <resource_type>', 'Specify the type of resource (e.g., VM, Blob Storage)')
    .option('-p, --period <time_period>', 'Define the time period for analysis')
    .option('-o, --output <format>', 'Output format (json, table)')
    .option('--save-report <path>', 'Path to save the report')
    .option('--threshold <percentage>', 'Utilization threshold for identifying underutilized resources')
    .action((options) => {
      // Azure-specific optimization logic goes here

      console.log('Azure optimization started with options:', options);
    });

  

    azure
      .command('list-resources')
      .description('List Azure resources ordered by type and applicable for usage metrics')
      .option('-s, --subscriptionId <chars>', 'Azure Subscription ID')   
      .option('-n, --nn <chars>', 'Azure Subscription ID')   
      .action(async (cmd) => {
        const { subscriptionId } = cmd;
        console.log(cmd, subscriptionId);
        if (!subscriptionId) {
          console.log();
          console.error('Error: Subscription ID is required');
          process.exit(1);
        }

        try {
          const resources = (await(await listAzureResources(subscriptionId)).next()).value;
          console.log(resources);
        } catch (error) {
          console.error("Error fetching Azure resources:", error);
          process.exit(1);
        }
      });


  return azure;
}

