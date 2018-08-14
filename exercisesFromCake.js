//You've built an inflight entertainment system with on-demand movie streaming.

/* Users on longer flights like to start a second movie right when their first one ends, but they complain that the plane usually lands before they can see the ending. So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.

Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

When building your function:

Assume your users will watch exactly two movies
Don't make your users watch the same movie twice
Optimize for runtime over memory */

//   for (var i = 0; i < movieLengths.length - 1; i++) {
//     let leftoverTime = flightLength - movieLengths[i]
//     delete movieLengths[i]
//     if (movieLengths.includes(leftoverTime)) {
//       return true
//     }
//   }

//   return false;
// }

function canTwoMoviesFillFlight(movieLengths, flightLength) {

  let seen = {}

  for (var i = 0; i < movieLengths.length; i++) {
    let leftoverTime = flightLength - movieLengths[i]
    if (seen[movieLengths[i]]) {
      return true
    }
    seen[leftoverTime] = true
  }

  return false;
}



// Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome. ↴

// You can assume the input string only contains lowercase letters.

// Examples:

// "civic" should return true
// "ivicc" should return true
// "civil" should return false
// "livci" should return false

// function isPalindrone(string) {

//   string = string.toLowerCase()
//   const count = {};
//   let odd = 0

//   for (let i = 0; i < string.length; i++) {
//     if (count[string[i]]) count[string[i]]++
//     else count[string[i]] = 1
//   }

//   for (el in count) {
//     if (count[el] % 2 === 1) odd++
//     if (odd > 1) {
//       return false
//     }
//   }

//   return true;
// }

//new simplified answer using sets
function isPalindrone(string) {

  string = string.toLowerCase()
  const count = new Set();
  let odd = 0

  for (let i = 0; i < string.length; i++) {
    if (count.has(string[i])) count.delete(string[i])
    else count.add(string[i])
  }

  return count.size <= 1;
}

//You want to build a word cloud, an infographic where the size of a word corresponds to how often it appears in the body of text.

// To do this, you'll need data. Write code that takes a long string and builds its word cloud data in a map ↴ , where the keys are words and the values are the number of times the words occurred.

function size(text) {
  const wordSize = {}
  text = isLetter(text.toLowerCase()).split(' ')
  text.forEach(word => {
    if (wordSize[word]) wordSize[word]++
    else if (word.length !== 0) wordSize[word] = 1
  })

  return wordSize

}

function isLetter(string) {
  var alphabet = 'abcdefghijklmopqrstuvwxyz'
  let result = ''
  for (var i = 0; i < string.length; i++) {
    var char = string[i]
    if (alphabet.includes(char)) result += char
    else result += ' '

  }
  return result
}
// run your function through some test cases here
// remember: debugging is half the battle!
console.log(size("We came, we saw, we conquered...then we ate Bill's (Mille-Feuille) cake. The bill came to five dollars."));


function sortScores(unorderedScores, highestPossibleScore) {

  var sortedScore = new Array(highestPossibleScore)
  var result = []

  unorderedScores.forEach(score => {
    if (sortedScore[score]) sortedScore[score]++
    else sortedScore[score] = 1
  })

  for (var score = highestPossibleScore; score >= 0; score--) {

    if (sortedScore[score]) {
      let count = sortedScore[score]
      while (count > 0) {
        result.push(score)
        count--
      }
    }
  }

  return result;
}


// You created a game that is more popular than Angry Birds.

// Each round, players receive a score between 0 and 100, which you use to rank them from highest to lowest. So far you're using an algorithm that sorts in O(n\lg{n})O(nlgn) time, but players are complaining that their rankings aren't updated fast enough. You need a faster sorting algorithm.

// Write a function that takes:

// an array of unsortedScores
// the highestPossibleScore in the game
// and returns a sorted array of scores in less than O(n\lg{n})O(nlgn) time.

// run your function through some test cases here
// remember: debugging is half the battle!
var unsortedScores = [37, 89, 41, 65, 91, 53, 100, 0, 100, 91, 91];
const HIGHEST_POSSIBLE_SCORE = 100;
console.log(sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE));
