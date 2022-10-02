// qsale.js
const express = require("express");

const handlebars = require("express-handlebars");

const app = express();

console.log(handlebars);
// configuring handlebars as app templating engine
app.engine('hbs', handlebars.engine({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', 'hbs');


const port = process.env.PORT || 2000;

app.get("/", (req, res)=> {
   console.log(req);
   res.render("login");
});

app.listen(port, ()=> {
  console.log(`live at port ${port}`);
});
