const square = (num) => num * num

export const oneThree = (x, y, z) => {
  const min = x > y ? (y > z ? z : y) : (x > z ? z : x)
  return square(x) + square(y) + square(z) - square(min)
}


export const check = (x, y) => x===0 ? 0 : y