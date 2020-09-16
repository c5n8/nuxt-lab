import _contains from 'validator/es/lib/contains'
import _equals from 'validator/es/lib/equals'
import _isAfter from 'validator/es/lib/isAfter'
import _isAlpha from 'validator/es/lib/isAlpha'
import _isAlphanumeric from 'validator/es/lib/isAlphanumeric'
import _isBefore from 'validator/es/lib/isBefore'
import _isByteLength from 'validator/es/lib/isByteLength'
import _isCurrency from 'validator/es/lib/isCurrency'
// @ts-ignore
import _isDate from 'validator/es/lib/isDate'
import _isDecimal from 'validator/es/lib/isDecimal'
import _isDivisibleBy from 'validator/es/lib/isDivisibleBy'
import _isEmail from 'validator/es/lib/isEmail'
import _isEmpty from 'validator/es/lib/isEmpty'
import _isFloat from 'validator/es/lib/isFloat'
import _isFQDN from 'validator/es/lib/isFQDN'
import _isHash from 'validator/es/lib/isHash'
import _isIdentityCard from 'validator/es/lib/isIdentityCard'
// @ts-ignore
import _isIMEI from 'validator/es/lib/isIMEI'
import _isIn from 'validator/es/lib/isIn'
import _isInt from 'validator/es/lib/isInt'
import _isIP from 'validator/es/lib/isIP'
import _isISBN from 'validator/es/lib/isISBN'
import _isISSN from 'validator/es/lib/isISSN'
import _isJSON from 'validator/es/lib/isJSON'
import _isLatLong from 'validator/es/lib/isLatLong'
import _isLength from 'validator/es/lib/isLength'
import _isMobilePhone from 'validator/es/lib/isMobilePhone'
import _isNumeric from 'validator/es/lib/isNumeric'
import _isPassportNumber from 'validator/es/lib/isPassportNumber'
import _isPostalCode from 'validator/es/lib/isPostalCode'
import _isRgbColor from 'validator/es/lib/isRgbColor'
// @ts-ignore
import _isTaxID from 'validator/es/lib/isTaxID'
import _isURL from 'validator/es/lib/isURL'
import _isUUID from 'validator/es/lib/isUUID'
import _isWhitelisted from 'validator/es/lib/isWhitelisted'
import _matches from 'validator/es/lib/matches'
import { isString } from './type-checks'

export function contains(seed: Parameters<typeof _contains>[1]) {
  return function (value: string) {
    return isString(value) && _contains(value, seed)
  }
}

export function isContaining(...args: Parameters<typeof contains>) {
  return contains(...args)
}

export function equals(comparison: Parameters<typeof _equals>[1]) {
  return function (value: string) {
    return isString(value) && _equals(value, comparison)
  }
}

export function isEqualTo(...args: Parameters<typeof equals>) {
  return equals(...args)
}

export function isAfter(date: Parameters<typeof _isAfter>[1]) {
  return function (value: string) {
    return isString(value) && _isAfter(value, date)
  }
}

export function isAlpha(locale: Parameters<typeof _isAlpha>[1]) {
  return function (value: string) {
    return isString(value) && _isAlpha(value, locale)
  }
}

export function isAlphanumeric(locale: Parameters<typeof _isAlphanumeric>[1]) {
  return function (value: string) {
    return isString(value) && _isAlphanumeric(value, locale)
  }
}

export function isBefore(date: Parameters<typeof _isBefore>[1]) {
  return function (value: string) {
    return isString(value) && _isBefore(value, date)
  }
}

export function isByteLength(options: Parameters<typeof _isByteLength>[1]) {
  return function (value: string) {
    return isString(value) && _isByteLength(value, options)
  }
}

export function isCurrency(options: Parameters<typeof _isCurrency>[1]) {
  return function (value: string) {
    return isString(value) && _isCurrency(value, options)
  }
}

export function isDate(format: Parameters<typeof _isDate>[1]) {
  return function (value: string) {
    return isString(value) && _isDate(value, format)
  }
}

export function isDecimal(options: Parameters<typeof _isDecimal>[1]) {
  return function (value: string) {
    return isString(value) && _isDecimal(value, options)
  }
}

export function isDivisibleBy(number: Parameters<typeof _isDivisibleBy>[1]) {
  return function (value: string) {
    return isString(value) && _isDivisibleBy(value, number)
  }
}

export function isEmail(options: Parameters<typeof _isEmail>[1]) {
  return function (value: string) {
    return isString(value) && _isEmail(value, options)
  }
}

export function isEmpty(options: Parameters<typeof _isEmpty>[1]) {
  return function (value: string) {
    return isString(value) && _isEmpty(value, options)
  }
}

export function isFloat(options: Parameters<typeof _isFloat>[1]) {
  return function (value: string) {
    return isString(value) && _isFloat(value, options)
  }
}

export function isFQDN(options: Parameters<typeof _isFQDN>[1]) {
  return function (value: string) {
    return isString(value) && _isFQDN(value, options)
  }
}

export function isHash(algorithm: Parameters<typeof _isHash>[1]) {
  return function (value: string) {
    return isString(value) && _isHash(value, algorithm)
  }
}

export function isIdentityCard(locale: Parameters<typeof _isIdentityCard>[1]) {
  return function (value: string) {
    return isString(value) && _isIdentityCard(value, locale)
  }
}

export function isIMEI(options: Parameters<typeof _isIMEI>[1]) {
  return function (value: string) {
    return isString(value) && _isIMEI(value, options)
  }
}

export function isIn(values: Parameters<typeof _isIn>[1]) {
  return function (value: string) {
    return isString(value) && _isIn(value, values)
  }
}

export function isInt(options: Parameters<typeof _isInt>[1]) {
  return function (value: string) {
    return isString(value) && _isInt(value, options)
  }
}

export function isIP(version: Parameters<typeof _isIP>[1]) {
  return function (value: string) {
    return isString(value) && _isIP(value, version)
  }
}

export function isISBN(version: Parameters<typeof _isISBN>[1]) {
  return function (value: string) {
    return isString(value) && _isISBN(value, version)
  }
}

export function isISSN(options: Parameters<typeof _isISSN>[1]) {
  return function (value: string) {
    return isString(value) && _isISSN(value, options)
  }
}

export function isJSON() {
  return function (value: string) {
    return isString(value) && _isJSON(value)
  }
}

export function isLatLong() {
  return function (value: string) {
    return isString(value) && _isLatLong(value)
  }
}

export function isLength(options: Parameters<typeof _isLength>[1]) {
  return function (value: string) {
    return isString(value) && _isLength(value, options)
  }
}

export function isMobilePhone(
  locale: Parameters<typeof _isMobilePhone>[1],
  options: Parameters<typeof _isMobilePhone>[2]
) {
  return function (value: string) {
    return isString(value) && _isMobilePhone(value, locale, options)
  }
}

export function isNumeric(options: Parameters<typeof _isNumeric>[1]) {
  return function (value: string) {
    return isString(value) && _isNumeric(value, options)
  }
}

export function isPassportNumber(
  countryCode: Parameters<typeof _isPassportNumber>[1]
) {
  return function (value: string) {
    return isString(value) && _isPassportNumber(value, countryCode)
  }
}

export function isPostalCode(locale: Parameters<typeof _isPostalCode>[1]) {
  return function (value: string) {
    return isString(value) && _isPostalCode(value, locale)
  }
}

export function isRgbColor(
  includePercentValues: Parameters<typeof _isRgbColor>[1]
) {
  return function (value: string) {
    return isString(value) && _isRgbColor(value, includePercentValues)
  }
}

export function isTaxID(locale: Parameters<typeof _isTaxID>[1]) {
  return function (value: string) {
    return isString(value) && _isTaxID(value, locale)
  }
}

export function isURL(options: Parameters<typeof _isURL>[1]) {
  return function (value: string) {
    return isString(value) && _isURL(value, options)
  }
}

export function isUUID(version: Parameters<typeof _isUUID>[1]) {
  return function (value: string) {
    return isString(value) && _isUUID(value, version)
  }
}

export function isWhitelisted(chars: Parameters<typeof _isWhitelisted>[1]) {
  return function (value: string) {
    return isString(value) && _isWhitelisted(value, chars)
  }
}

export function matches(
  pattern: Parameters<typeof _matches>[1],
  modifiers: Parameters<typeof _matches>[2]
) {
  return function (value: string) {
    return isString(value) && _matches(value, pattern, modifiers)
  }
}

export function isMatching(...args: Parameters<typeof matches>) {
  return matches(...args)
}
