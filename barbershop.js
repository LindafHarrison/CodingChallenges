function Barber(array,n) {
  n -= array.length
  let time = 0
  while (n !== 0) {
    time ++
    for(var i = 0; i < array.length; i++) {
      if (time % array[i] === 0)  {
        n -= 1
        if (n === 0) return time += array[i]
      }
    }
  }
  
  return time
}