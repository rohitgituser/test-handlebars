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

  const getJobData = async (req, res) => {
      try{
          // console.log('getJobData');
          // console.log('req.param', req.params.id);
        let id = req.params.id;
        let document = {};
        let count  = 0
        let searchResults = await client.search(id, { top: 1 });
        const result = await client.getDocument(id);

        // console.log('result ', result)
        // return JSON.stringify(searchResults.results);

      // context.documents = documents;
      // console.log('documents saved', documents);

    //   return documents;
      // res.status(200).send(response.successFormat(`success`, `States fectched successfully`, documents, []))
      return result ;


      }catch (error) {
        // console.log(`something went wrong ${JSON.stringify(error)}`)
        let errorResponse = {}
        let code = (Object.prototype.hasOwnProperty.call(error, 'status')) ? error.code : 500
      }
    
  }

  module.exports = {getJobData}