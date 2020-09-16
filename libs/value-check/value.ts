import { type } from './type'
import { string } from './string'
import { isExists } from './checker/value-checks'

export default value

export function value(value: any) {
  return {
    ...type(value),
    ...string(value),
    isExists() {
      return isExists(value)
    },
  }
}
