const square = (num) => num * num

const goodEnough = (guess, x) => {
  return Math.abs(square(guess) - x) < 0.001
}

const average = (x, y) => {
  return (x + y) / 2
}

const improve = (guess, x) => {
  return average(guess, x / guess)
}

const sqrtIter = (guess, x) => {
  return goodEnough(guess, x) ? 
          guess
          : sqrtIter(improve(guess, x), x)
} 

export const sqrt = (x) => {
  return sqrtIter(1, x)
}