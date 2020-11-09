const {
  SearchClient,
  SearchIndexClient,
  SearchServiceClient,
  AzureKeyCredential,
} = require("@azure/search-documents");
const { json } = require("body-parser");

// const searchClient = new SearchClient(
//   "<endpoint>",
//   "<indexName>",
//   new AzureKeyCredential("<apiKey>")
// );

const indexName = "nycjobs";
const apiKey = "252044BE3886FE4A8E3BAA4F595114BB";
 
// Create a SearchClient to send queries
const client = new SearchClient(
  `https://azs-playground.search.windows.net/`,
  indexName,
  new AzureKeyCredential(apiKey)
);

const helpers = () => {
    return {
      customSearch: async () => {
        
        // let data = main(name);
        // return 'testing';
        // const searchResults = await client.search("*", { top: 5 });
        // for await (const result of searchResults.results) {
        //   console.log(`${result.document.business_title}\n${result.document.job_description}\n`);
        // }
        // return searchResults;
      }
      
    }
  }

  async function main(name) {
    // Let's get the top 5 jobs related to Microsoft
    const searchResults = await client.search(name, { top: 5 });
    for await (const result of searchResults.results) {
      // console.log(`${result.document.business_title}\n${result.document.job_description}\n`);
      // console.log('type---', typeof searchResults)

      return JSON(result);

    }
    // console.log('type---', typeof searchResults)
    // return searchResults;
  }
  
  module.exports = helpers
  