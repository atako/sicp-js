import {oneThree, check, aPlusAbsB} from "../../src/01/index"
import { sqrt } from "../../src/01/1_6"

describe("Chapter one", ()=> {
  test("1.3", () => {
    expect(oneThree(2,3,4)).toBe(25)
    expect(oneThree(5,3,2)).toBe(34)
  })

  test("1.4", () => {
    const result = aPlusAbsB(2, -4)//?
  })

  test.skip("1.5", () => {
    const p = () => p()
    check(0, p())
  })

  test("1.6", () => {
    sqrt(25)//?
  })
})