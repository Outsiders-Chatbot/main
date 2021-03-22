const express = require("express");
const router = express.Router();
module.exports = router;

const {User} = require('../Models/user')

const uuid = require('uuid');
const config = require('../config/dev')

const ServiceAccount = require('../authkey.json')

// projectId: ID of the GCP project where Dialogflow agent is deployed
// const projectId = 'PROJECT_ID';
// sessionId: String representing a random number or hashed user identifier
// const sessionId = '123456';
// queries: A set of sequential queries to be send to Dialogflow agent for Intent Detection
// const queries = [
//   'Reserve a meeting room in Toronto office, there will be 5 of us',
//   'Next monday at 3pm for 1 hour, please', // Tell the bot when the meeting is taking place
//   'B'  // Rooms are defined on the Dialogflow agent, default options are A, B, or C
// ]
// languageCode: Indicates the language Dialogflow agent should use to detect intents
// const languageCode = 'en';




//getting the keys to use our api 
const projectId = config.googleProjectID
const sessionId = config.dialogFlowSessionID

const credentials = {
    credential : ServiceAccount
}


const dialogflow = require('@google-cloud/dialogflow');

// Instantiates a session client
const sessionClient = new dialogflow.SessionsClient({credential:credentials});
const sessionPath = sessionClient.projectAgentSessionPath(
  projectId,
  sessionId
);


router.get('/',(req,res)=>{
    console.log(projectId , ' and this is ',sessionId);
    res.send('hellow')
})


router.post('/',async (req,res)=>{
  //find the user from the data base : test purpose , we will delete this later cuz its not the best practice
  await User.findByIdAndUpdate("60380e67e557ee5e0c8921f6" ,
  {
    $push : {
       messages :  {
                "source": "user",
                "msg": req.body.msg
              } 
     }
   }
  
  );
  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: req.body.msg,
        // The language used by the client (en-US)
        languageCode: config.dialogFlowSessionLanguageCode,
      },
    },
  };
 try
  {
  // Send request and log result
  const responses = await sessionClient.detectIntent(request);
  console.log('Detected intent');
  const result = responses[0].queryResult;
  console.log(`  Query: ${result.queryText}`);
  console.log(`  Response: ${result.fulfillmentText}`);
  BotAnswer = {
    source : 'bot',
    msg : result.fulfillmentMessages[0].text.text[0]
  }
  await User.findByIdAndUpdate("60380e67e557ee5e0c8921f6" ,
  {
    $push : {
       messages :  {
                "source": "bot",
                "msg": result.fulfillmentMessages[0].text.text[0]
              } //inserted data is the object to be inserted 
     }
   }
  
  );
  res.send(BotAnswer)
 }
 catch(err){
     console.log('******************************************************************************** \n' , err);

 }    
})


router.post('/addmessage',async(req,res)=>{


try{
  const result = await User.findByIdAndUpdate("60380e67e557ee5e0c8921f6" ,
  {
    $push : {
       messages :  {
                "source": "user",
                "msg": "timestamp",
                "time":Date.now
              } //inserted data is the object to be inserted 
     }
   }
  
  );
  
  res.send(result)
  }
  catch(er){
      console.log(er);
  }
})


router.post('/events',async (req,res)=>{
  
  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      event: {
        // The query to send to the dialogflow agent
        name: req.body.msg,
        // The language used by the client (en-US)
        languageCode: config.dialogFlowSessionLanguageCode,
      },
    },
  };
 try
  {
  // Send request and log result
  const responses = await sessionClient.detectIntent(request);
  console.log('Detected intent');
  const result = responses[0].queryResult;
  console.log(`  Query: ${result.queryText}`);
  console.log(`  Response: ${result.fulfillmentText}`);
  BotAnswer = {
    source : 'bot',
    msg : result.fulfillmentMessages[0].text.text[0]
  }
  await User.findByIdAndUpdate("60380e67e557ee5e0c8921f6" ,
  {
    $push : {
       messages :  {
                "source": "bot",
                "msg": result.fulfillmentMessages[0].text.text[0]
              } //inserted data is the object to be inserted 
     }
   }
  
  );
  
  res.send(BotAnswer)
 }
 catch(err){
     console.log('******************************************************************************** \n' , err);

 }    
})