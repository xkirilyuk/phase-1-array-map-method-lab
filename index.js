const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


function capitalize(tutorial){
  const splitWords = tutorial.split(" ");
  const capitalizeWords = splitWords(part => part[0].toUpperCase + part.slice(1));
  const combinedWords = capitalizeWords.join(" ");
  return sentences;
}

function titleCased(){
  return tutorials.map(capitalize);
}

console.log(titleCased());