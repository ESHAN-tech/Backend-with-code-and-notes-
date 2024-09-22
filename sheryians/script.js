// const fs = require('fs');
// fs.writeFile(file, data[, options], callback)
// fs.writeFile("hey.txt" , "hey hello kaise ho" , function(err){
//     if(err) console.log(err);
//     else console.log("done");
// })

// fs.appendFile("hey.txt" , " me to accha hoon" , function(err){
//     if(err) console.log(err);
//     else console.log("done");
// })

// fs.rename("hey.txt" , "hello.txt" , function(err){
//     if(err) console.log(err);
//     else console.log("done");
// })

// fs.copyFile("hello.txt", "./copy/chacha.txt" , function(err){
//     if(err) console.log(err);
//     else console.log("done");
// })

//unlink = deletion of the file 

// fs.unlink("hello.txt" , (err)=>{
//     if(err) console.log(err);
//     else console.log("file is deleted");
// })

// rmdir =  to remove the directory , means you can delete the blank folder
// by using recusive we can del the folder insted it is not a blank

// fs.rmdir("./copy" ,{recursive:true}, function(err){
//     if(err) console.log(err.message);
//     else console.log("removed");
// })

// fs.rm("./copy" ,{recursive:true}, function(err){
//     if(err) console.log(err.message);
//     else console.log("removed");
// })

// const http = require('http');

// const server = http.createServer(function(req , res){
//     res.end("hello world ");
// })

// server.listen(3000);


const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}))

// app.use(function(req , res,next){
//     console.log("middleware chal gaya!!!");
//     next();
// });
// app.use(function(req , res,next){
//     console.log(" ek middleware chal gaya hai ji!!!");
//     next();
// });

app.get('/' , function(req , res){
    res.send("Champion mera anuj ");
})

app.get('/about' , function(req , res){
    res.send("about page h ye");
})

app.get('/profile' , function(req , res , next){
   return next(new Error("something went wrong"))
   //ye jayega console per 
})

app.use((err , req , res , next)=>{
	console.error(err.stack)
	res.status(500).send('something went wrong we dont know')
    // iska reponse will go frontend
})

app.listen(3000)