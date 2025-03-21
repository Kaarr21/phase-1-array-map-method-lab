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

/*const titleCased = (tutorials) => {

  return tutorials
}*/

function titleCased() {
  return tutorials.map(tutorial => {
    // Split the tutorial string into an array of words
    const words = tutorial.split(' ');
    
    // Transform each word by capitalizing its first letter
    const titleCasedWords = words.map(word => {
      // Get the first letter and convert it to uppercase
      const firstLetter = word.charAt(0).toUpperCase();
      // Get the rest of the word
      const restOfWord = word.slice(1);
      // Combine the capitalized first letter with the rest of the word
      return firstLetter + restOfWord;
    });
    
    // Join the words back together with spaces
    return titleCasedWords.join(' ');
  });
}