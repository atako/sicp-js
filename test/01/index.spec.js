import {oneThree} from "../../src/01/index"

describe("Chapter one", ()=> {
  test("1.3", () => {
    expect(oneThree(2,3,4)).toBe(25)
    expect(oneThree(5,3,2)).toBe(34)
  })
})