var express = require('express');

var app = express();

// view engine setup
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.listen(3000, ()=>{
  console.log('Now Listening on Port 3000 !')
})

// 1.  Untracked ! --> git add
// 2.  Stage !     --> git commit
// 3.  Commited ! 
/////
