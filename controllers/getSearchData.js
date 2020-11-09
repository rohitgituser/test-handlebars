const {
    SearchClient,
    SearchIndexClient,
    SearchServiceClient,
    AzureKeyCredential,
  } = require("@azure/search-documents");
const response = require('../helper/formatResponse')

  const indexName = "nycjobs";
  const apiKey = "252044BE3886FE4A8E3BAA4F595114BB";
   
  // Create a SearchClient to send queries
  const client = new SearchClient(
    `https://azs-playground.search.windows.net/`,
    indexName,
    new AzureKeyCredential(apiKey)
  );

  const getSearchData = async (req, res) => {
      try{
          console.log('getSearchData');
        let documents = [];
        let count  = 0
        let searchResults = await client.search("*", { top: 5 });
        console.log('length', searchResults.results)
        console.log(`Index operations succeeded: ${JSON.stringify(searchResults.results)}`);
        // return JSON.stringify(searchResults);

        for await (const result of searchResults.results) {
          documents.push(result.document);
          // console.log(`${JSON.stringify(result.document)}`);

       }
      // context.documents = documents;
      // console.log('documents saved', documents);

    //   return documents;
      // res.status(200).send(response.successFormat(`success`, `States fectched successfully`, documents, []))
      return {documents: documents, count: documents.length, next:searchResults.next, byPage: searchResults.byPage} ;


      }catch (error) {
        // console.log(`something went wrong ${JSON.stringify(error)}`)
        let errorResponse = {}
        let code = (Object.prototype.hasOwnProperty.call(error, 'status')) ? error.code : 500
      }
    
  }

  module.exports = {getSearchData}