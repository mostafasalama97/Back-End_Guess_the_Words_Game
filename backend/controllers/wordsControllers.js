const wordList = require('../data/TestData.json').wordList;

function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

const adjectives = wordList.filter((word) => word.pos === 'adjective');
const adverbs = wordList.filter((word) => word.pos === 'adverb');
const nouns = wordList.filter((word) => word.pos === 'noun');
const verbs = wordList.filter((word) => word.pos === 'verb');

const randomAdjective = getRandomItem(adjectives);
const randomAdverb = getRandomItem(adverbs);
const randomNoun = getRandomItem(nouns);
const randomVerb = getRandomItem(verbs);

const remainingWords = wordList.filter(
  (word) =>
    word !== randomAdjective &&
    word !== randomAdverb &&
    word !== randomNoun &&
    word !== randomVerb
);
const randomWords = [];

for (let i = 0; i < 6; i++) {
  const randomWord = getRandomItem(remainingWords);
  randomWords.push(randomWord);
  remainingWords.splice(remainingWords.indexOf(randomWord), 1);
}

const selectedWords = [
  randomAdjective,
  randomAdverb,
  randomNoun,
  randomVerb,
  ...randomWords,
];

exports.getWord = (req, res) => {
  const randomWords = [];

  for (let i = 0; i < 10; i++) {
    const randomWord = getRandomItem(selectedWords);
    randomWords.push(randomWord);
  }

  res.status(200).json(randomWords);
};
