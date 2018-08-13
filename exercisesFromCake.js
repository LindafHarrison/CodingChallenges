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

function isPalindrone(string) {

  string = string.toLowerCase()
  const count = {};
  let odd = 0

  for (let i = 0; i < string.length; i++) {
    if (count[string[i]]) count[string[i]]++
    else count[string[i]] = 1
  }

  for (el in count) {
    if (count[el] % 2 === 1) odd++
    if (odd > 1) {
      return false
    }
  }

  return true;
}