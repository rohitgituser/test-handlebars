const {
  SearchClient,
  SearchIndexClient,
  SearchServiceClient,
  AzureKeyCredential,
} = require("@azure/search-documents");

const indexName = "nycjobs";
const apiKey = "252044BE3886FE4A8E3BAA4F595114BB";
const getSearchData = require('../controllers/getSearchData');
// Create a SearchClient to send queries
const client = new SearchClient(
  `https://azs-playground.search.windows.net/`,
  indexName,
  new AzureKeyCredential(apiKey)
);


const routeHome = async (req, res, next) => {
  try{
     let result = await  getSearchData.getSearchData(req, res);
      //  if(err) console.log('20 error', err);
      // console.log('rohit 21', (result));
      const context = {
        documents: result.documents,
        next: result.next,
        byPage: result.byPage,
        helpers: {
          json: function (value, options) {
                    return JSON.stringify(value);
          },
          getUrl: function(id){
            console.log(id);
            return "/job/" + id;
          },
          searchHandler: function(text){
            console.log(text);
          }
          // customSearch: async () => {      
          //   // let data = main(name);
          //   // return 'testing';
          //   var self = this;
          //   let documents = [];
          //   let count  = 0
          //   let searchResults = await client.search("*", { top: 5 });
          //   console.log('searchResults', searchResults.results)
          //   // console.log('length', searchResults.results)
          //   console.log(`Index operations succeeded: ${JSON.stringify(searchResults.results)}`);
          //   // return JSON.stringify(searchResults.results);
    
          //   for await (const result of searchResults.results) {
          //     console.log('await call');
          //     documents.push(result.document);
          //     // console.log(`${JSON.stringify(result.document)}`);
    
          // }
          // context.documents = documents;
          // console.log('documents saved', documents);
    
          // return documents;
        
          // },
         
        }
      }
      // console.log(context);
      res.render('home', context)
    
   
  }catch (error){
    console.log(error);

  }
  
}

module.exports = routeHome
