const scoresList = require('../data/TestData.json').scoresList

function calculationRank(finalScore){
    const belowScores = scoresList.filter(score => score < finalScore);
    const rank = (belowScores.length / scoresList.length) * 100;
    return rank.toFixed(2);
  }



  exports.getRank = (req, res) => {
    const { finalScore } = req.body;
    const rank = calculationRank(finalScore);
    return res.status(200).send(JSON.stringify(rank));
    
  };
  