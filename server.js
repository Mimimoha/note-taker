const express = require('express');
const path = require('path');
const router = require ("./routes/controlerroutes")
const viewroutes =require('./routes/viewroutes');
const app = express();



const PORT = process.env.PORT || 3005;

// sets up express for form data

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static('public'));
app.use('/api', router)
app.use('/', viewroutes)





// port listenter
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
