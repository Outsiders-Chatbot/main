const express = require("express");
const router = express.Router();
module.exports = router;

const {User} = require('../Models/user')
const {Course} = require('../Models/Course')


const uuid = require('uuid');
const config = require('../config/dev')

const ServiceAccount = require('../authkey.json')



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

router.get('/getcurrentuser',async(req,res)=>{
  const result = await User.findById("60380e67e557ee5e0c8921f6")
  res.send(result);
})


// router.post('/addmessage',async(req,res)=>{


// try{
//   const result = await User.findByIdAndUpdate("60380e67e557ee5e0c8921f6" ,
//   {
//     $push : {
//        messages :  {
//                 "source": "user",
//                 "msg": "timestamp",
//                 "time":Date.now
//               } //inserted data is the object to be inserted 
//      }
//    }
  
//   );
  
//   res.send(result)
//   }
//   catch(er){
//       console.log(er);
//   }
// })


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
  // Send request and log result too
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
                "msg": result.fulfillmentMessages[0].text.text[0],
                "time":Date.now
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


router.post('/logout',async (req,res)=>{
  
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
  // Send request and log result too
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
                "msg": result.fulfillmentMessages[0].text.text[0],
                "time":Date.now
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



//add dates to other messages ;  