import {
  isNull,
  isUndefined,
  isString,
  isBoolean,
  isBigInt,
  isNumber,
  isObject,
  isSymbol,
  isFunction,
  isArray,
} from './checker/type-checks'

export default type

export function type(value: any) {
  return {
    isUndefined() {
      return isUndefined(value)
    },
    isDefined() {
      return !isUndefined(value)
    },
    isNull() {
      return isNull(value)
    },
    isBoolean() {
      return isBoolean(value)
    },
    isString() {
      return isString(value)
    },
    isNumber() {
      return isNumber(value)
    },
    isBigInt() {
      return isBigInt(value)
    },
    isSymbol() {
      return isSymbol(value)
    },
    isObject() {
      return isObject(value)
    },
    isArray() {
      return isArray(value)
    },
    isFunction() {
      return isFunction(value)
    },
  }
}
