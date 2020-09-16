export function isNull(value: any) {
  return value === null
}

export function isUndefined(value: any) {
  return typeof value === 'undefined'
}

export function isBoolean(value: any) {
  return typeof value === 'boolean'
}

export function isString(value: any) {
  return typeof value === 'string'
}

export function isNumber(value: any) {
  return typeof value === 'number'
}

export function isBigInt(value: any) {
  return typeof value === 'bigint'
}

export function isSymbol(value: any) {
  return typeof value === 'symbol'
}

export function isObject(value: any) {
  return typeof value === 'object'
}

export function isFunction(value: any) {
  return typeof value === 'function'
}

export function isArray(value: any) {
  return Array.isArray(value)
}
