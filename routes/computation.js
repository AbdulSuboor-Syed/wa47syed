var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res)=>{
  let randomNumber=Math.floor(Math.random()*100)+1
  let data=req.query.x
  console.log(data)
  res.render('computation',{
    randomSolution:`sqrt of ${randomNumber} is ${Math.sqrt(randomNumber)}`,
    querySolution:`sqrt to ${data} is ${Math.sqrt(data)}`
  })
});

module.exports = router;
