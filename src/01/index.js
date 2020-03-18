const square = (num) => num * num

export const oneThree = (x, y, z) => {
  return square(x) + square(y) + square(z) - 
  square(x > y ? (y > z ? z : y) : (x > z ? z : x))
}