import _isAscii from 'validator/es/lib/isAscii'
import _isBase32 from 'validator/es/lib/isBase32'
import _isBase64 from 'validator/es/lib/isBase64'
import _isBIC from 'validator/es/lib/isBIC'
import _isBoolean from 'validator/es/lib/isBoolean'
import _isBtcAddress from 'validator/es/lib/isBtcAddress'
import _isCreditCard from 'validator/es/lib/isCreditCard'
import _isDataURI from 'validator/es/lib/isDataURI'
import _isEAN from 'validator/es/lib/isEAN'
import _isEthereumAddress from 'validator/es/lib/isEthereumAddress'
import _isFullWidth from 'validator/es/lib/isFullWidth'
import _isHalfWidth from 'validator/es/lib/isHalfWidth'
import _isHexadecimal from 'validator/es/lib/isHexadecimal'
import _isHexColor from 'validator/es/lib/isHexColor'
import _isHSL from 'validator/es/lib/isHSL'
import _isIBAN from 'validator/es/lib/isIBAN'
import _isIPRange from 'validator/es/lib/isIPRange'
import _isISIN from 'validator/es/lib/isISIN'
import _isISO31661Alpha2 from 'validator/es/lib/isISO31661Alpha2'
import _isISO31661Alpha3 from 'validator/es/lib/isISO31661Alpha3'
import _isISO8601 from 'validator/es/lib/isISO8601'
import _isISRC from 'validator/es/lib/isISRC'
import _isJWT from 'validator/es/lib/isJWT'
import _isLocale from 'validator/es/lib/isLocale'
import _isLowercase from 'validator/es/lib/isLowercase'
import _isMACAddress from 'validator/es/lib/isMACAddress'
import _isMagnetURI from 'validator/es/lib/isMagnetURI'
import _isMD5 from 'validator/es/lib/isMD5'
import _isMimeType from 'validator/es/lib/isMimeType'
import _isMongoId from 'validator/es/lib/isMongoId'
import _isMultibyte from 'validator/es/lib/isMultibyte'
import _isOctal from 'validator/es/lib/isOctal'
import _isPort from 'validator/es/lib/isPort'
import _isRFC3339 from 'validator/es/lib/isRFC3339'
import _isSemVer from 'validator/es/lib/isSemVer'
import _isSlug from 'validator/es/lib/isSlug'
import _isSurrogatePair from 'validator/es/lib/isSurrogatePair'
import _isUppercase from 'validator/es/lib/isUppercase'
import _isVariableWidth from 'validator/es/lib/isVariableWidth'
import { isString } from './type-checks'

export function isAscii(value: string) {
  return isString(value) && _isAscii(value)
}

export function isBase32(value: string) {
  return isString(value) && _isBase32(value)
}

export function isBase64(value: string) {
  return isString(value) && _isBase64(value)
}

export function isBIC(value: string) {
  return isString(value) && _isBIC(value)
}

export function isBoolean(value: string) {
  return isString(value) && _isBoolean(value)
}

export function isBtcAddress(value: string) {
  return isString(value) && _isBtcAddress(value)
}

export function isCreditCard(value: string) {
  return isString(value) && _isCreditCard(value)
}

export function isDataURI(value: string) {
  return isString(value) && _isDataURI(value)
}

export function isEAN(value: string) {
  return isString(value) && _isEAN(value)
}

export function isEthereumAddress(value: string) {
  return isString(value) && _isEthereumAddress(value)
}

export function isFullWidth(value: string) {
  return isString(value) && _isFullWidth(value)
}

export function isHalfWidth(value: string) {
  return isString(value) && _isHalfWidth(value)
}

export function isHexadecimal(value: string) {
  return isString(value) && _isHexadecimal(value)
}

export function isHexColor(value: string) {
  return isString(value) && _isHexColor(value)
}

export function isHSL(value: string) {
  return isString(value) && _isHSL(value)
}

export function isIBAN(value: string) {
  return isString(value) && _isIBAN(value)
}

export function isIPRange(value: string) {
  return isString(value) && _isIPRange(value)
}

export function isISIN(value: string) {
  return isString(value) && _isISIN(value)
}

export function isISO31661Alpha2(value: string) {
  return isString(value) && _isISO31661Alpha2(value)
}

export function isISO31661Alpha3(value: string) {
  return isString(value) && _isISO31661Alpha3(value)
}

export function isISO8601(value: string) {
  return isString(value) && _isISO8601(value)
}

export function isISRC(value: string) {
  return isString(value) && _isISRC(value)
}

export function isJWT(value: string) {
  return isString(value) && _isJWT(value)
}

export function isLocale(value: string) {
  return isString(value) && _isLocale(value)
}

export function isLowercase(value: string) {
  return isString(value) && _isLowercase(value)
}

export function isMACAddress(value: string) {
  return isString(value) && _isMACAddress(value)
}

export function isMagnetURI(value: string) {
  return isString(value) && _isMagnetURI(value)
}

export function isMD5(value: string) {
  return isString(value) && _isMD5(value)
}

export function isMimeType(value: string) {
  return isString(value) && _isMimeType(value)
}

export function isMongoId(value: string) {
  return isString(value) && _isMongoId(value)
}

export function isMultibyte(value: string) {
  return isString(value) && _isMultibyte(value)
}

export function isOctal(value: string) {
  return isString(value) && _isOctal(value)
}

export function isPort(value: string) {
  return isString(value) && _isPort(value)
}

export function isRFC3339(value: string) {
  return isString(value) && _isRFC3339(value)
}

export function isSemVer(value: string) {
  return isString(value) && _isSemVer(value)
}

export function isSlug(value: string) {
  return isString(value) && _isSlug(value)
}

export function isSurrogatePair(value: string) {
  return isString(value) && _isSurrogatePair(value)
}

export function isUppercase(value: string) {
  return isString(value) && _isUppercase(value)
}

export function isVariableWidth(value: string) {
  return isString(value) && _isVariableWidth(value)
}
