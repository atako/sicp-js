const square = (num) => num * num

export const oneThree = (x, y, z) => {
  const min = x > y ? (y > z ? z : y) : (x > z ? z : x)
  return square(x) + square(y) + square(z) - square(min)
}

export const check = (x, y) => x===0 ? 0 : y

const plus = (a, b) => a + b
const minus = (a, b) => a - b

export const aPlusAbsB = (a, b) => {
  return (b >= 0 ? plus : minus)(a, b)
}
