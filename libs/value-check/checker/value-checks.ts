import { isNull, isUndefined } from './type-checks'

export function isExists(value: any) {
  return !isNull(value) && !isUndefined(value)
}
