import type { Validator } from '../use-validation'

export default max

export function max(limit: number): Validator<unknown> {
  return (value, key) => {
    if (value > limit) {
      throw new Error(`${key} can't be more than ${limit}`)
    }
  }
}
