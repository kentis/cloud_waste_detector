import { DefaultAzureCredential } from '@azure/identity';
import { ResourceManagementClient } from '@azure/arm-resources';


export async function listAzureResources(subscriptionId: string) {
  const credential = new DefaultAzureCredential();
  const client = new ResourceManagementClient(credential, subscriptionId);

  try {
    const resourceList = client.resources.list();
    
    // // Filtering resources that are applicable for usage metrics
    // const filteredResources = resourceList.filter(resource => isApplicableForUsageMetrics(resource));

    // // Sorting by resource type
    // const sortedResources = filteredResources.sort((a, b) => a.type.localeCompare(b.type));

    return await resourceList;
  } catch (error) {
    console.error("Error fetching Azure resources:", error);
    throw error;
  }
}

function isApplicableForUsageMetrics(resource: any): boolean {
  // Implement logic to determine if the resource is applicable for usage metrics
  // This might depend on the resource type, tags, or other properties
  return true; // Placeholder
}


