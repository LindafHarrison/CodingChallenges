function shuffleDeck(deck) {
  let shuffledDeck = []
  let half1 = deck.splice(0, Math.floor(deck.length / 2))
  let half2 = deck
  let i = 0

  function randomStack(half) {
    let stack = half.splice(0, Math.ceil(Math.random() * half.length))
    shuffledDeck = shuffledDeck.concat(stack)
  }

  while (half1.length && half2.length) {
    i++
    if (i === 3) {
      shuffledDeck = shuffledDeck.concat(half1, half2)
      half1 = []
      half2 = []
    }
    randomStack(half1)
    randomStack(half2)
  }

  return shuffledDeck
  // write the body of your function here

}

// run your function through some test cases here
// remember: debugging is half the battle!
console.log(shuffleDeck([1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52]));