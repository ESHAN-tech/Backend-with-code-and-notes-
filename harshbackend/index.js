const express = require('express');
const app = express();
const path = require('path');// used to allow path(path module liya hai )

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public','index.html')));
app.set('view engine' , 'ejs');

// app.get('/', function(req , res){
//     res.send("index");
// });
// render kiya hai ejs page jo view folder me view hoga
app.get('/', function(req , res){
    res.render("index");
});

app.get('/profile/:harsh', function(req , res){
    res.send(` welcome to my route ${req.params.harsh}`);
});

app.get('/profile/:shaurya/:age', function(req , res){
    res.send(` welcome to my route ${req.params.shaurya} of age  ${req.params.age} `);
});


app.listen(3000, function(){
    console.log("it running");
})