//const http = require('./http.js') //export locally

const http = require('http')




// http.createServer(function(req,res){

// })


const server =http.createServer((req,res)=>{
    console.log(req);

    //process.exit() // Quit the event loop when browser is reloaded
    
})


server.listen(3000) //in production default port will be 80