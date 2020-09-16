import {
  isAscii,
  isBase32,
  isBase64,
  isBIC,
  isBoolean,
  isBtcAddress,
  isCreditCard,
  isDataURI,
  isEAN,
  isEthereumAddress,
  isFullWidth,
  isHalfWidth,
  isHexadecimal,
  isHexColor,
  isHSL,
  isIBAN,
  isIPRange,
  isISIN,
  isISO31661Alpha2,
  isISO31661Alpha3,
  isISO8601,
  isISRC,
  isJWT,
  isLocale,
  isLowercase,
  isMACAddress,
  isMagnetURI,
  isMD5,
  isMimeType,
  isMongoId,
  isMultibyte,
  isOctal,
  isPort,
  isRFC3339,
  isSemVer,
  isSlug,
  isSurrogatePair,
  isUppercase,
  isVariableWidth,
} from './checker/string-checks'

import {
  contains,
  isContaining,
  equals,
  isEqualTo,
  isAfter,
  isAlpha,
  isAlphanumeric,
  isBefore,
  isByteLength,
  isCurrency,
  isDate,
  isDecimal,
  isDivisibleBy,
  isEmail,
  isEmpty,
  isFloat,
  isFQDN,
  isHash,
  isIdentityCard,
  isIMEI,
  isIn,
  isInt,
  isIP,
  isISBN,
  isISSN,
  isJSON,
  isLatLong,
  isLength,
  isMobilePhone,
  isNumeric,
  isPassportNumber,
  isPostalCode,
  isRgbColor,
  isTaxID,
  isURL,
  isUUID,
  isWhitelisted,
  matches,
  isMatching,
} from './checker/string-checks-with-args'

export default string

export function string(value: string) {
  return {
    isAscii() {
      return isAscii(value)
    },
    isBase32() {
      return isBase32(value)
    },
    isBase64() {
      return isBase64(value)
    },
    isBIC() {
      return isBIC(value)
    },
    isBoolean() {
      return isBoolean(value)
    },
    isBtcAddress() {
      return isBtcAddress(value)
    },
    isCreditCard() {
      return isCreditCard(value)
    },
    isDataURI() {
      return isDataURI(value)
    },
    isEAN() {
      return isEAN(value)
    },
    isEthereumAddress() {
      return isEthereumAddress(value)
    },
    isFullWidth() {
      return isFullWidth(value)
    },
    isHalfWidth() {
      return isHalfWidth(value)
    },
    isHexadecimal() {
      return isHexadecimal(value)
    },
    isHexColor() {
      return isHexColor(value)
    },
    isHSL() {
      return isHSL(value)
    },
    isIBAN() {
      return isIBAN(value)
    },
    isIPRange() {
      return isIPRange(value)
    },
    isISIN() {
      return isISIN(value)
    },
    isISO31661Alpha2() {
      return isISO31661Alpha2(value)
    },
    isISO31661Alpha3() {
      return isISO31661Alpha3(value)
    },
    isISO8601() {
      return isISO8601(value)
    },
    isISRC() {
      return isISRC(value)
    },
    isJWT() {
      return isJWT(value)
    },
    isLocale() {
      return isLocale(value)
    },
    isLowercase() {
      return isLowercase(value)
    },
    isMACAddress() {
      return isMACAddress(value)
    },
    isMagnetURI() {
      return isMagnetURI(value)
    },
    isMD5() {
      return isMD5(value)
    },
    isMimeType() {
      return isMimeType(value)
    },
    isMongoId() {
      return isMongoId(value)
    },
    isMultibyte() {
      return isMultibyte(value)
    },
    isOctal() {
      return isOctal(value)
    },
    isPort() {
      return isPort(value)
    },
    isRFC3339() {
      return isRFC3339(value)
    },
    isSemVer() {
      return isSemVer(value)
    },
    isSlug() {
      return isSlug(value)
    },
    isSurrogatePair() {
      return isSurrogatePair(value)
    },
    isUppercase() {
      return isUppercase(value)
    },
    isVariableWidth() {
      return isVariableWidth(value)
    },

    // With Args
    contains(...args: Parameters<typeof contains>) {
      return contains(...args)(value)
    },
    isContaining(...args: Parameters<typeof isContaining>) {
      return isContaining(...args)(value)
    },
    equals(...args: Parameters<typeof equals>) {
      return equals(...args)(value)
    },
    isEqualTo(...args: Parameters<typeof isEqualTo>) {
      return isEqualTo(...args)(value)
    },
    isAfter(...args: Parameters<typeof isAfter>) {
      return isAfter(...args)(value)
    },
    isAlpha(...args: Parameters<typeof isAlpha>) {
      return isAlpha(...args)(value)
    },
    isAlphanumeric(...args: Parameters<typeof isAlphanumeric>) {
      return isAlphanumeric(...args)(value)
    },
    isBefore(...args: Parameters<typeof isBefore>) {
      return isBefore(...args)(value)
    },
    isByteLength(...args: Parameters<typeof isByteLength>) {
      return isByteLength(...args)(value)
    },
    isCurrency(...args: Parameters<typeof isCurrency>) {
      return isCurrency(...args)(value)
    },
    isDate(...args: Parameters<typeof isDate>) {
      return isDate(...args)(value)
    },
    isDecimal(...args: Parameters<typeof isDecimal>) {
      return isDecimal(...args)(value)
    },
    isDivisibleBy(...args: Parameters<typeof isDivisibleBy>) {
      return isDivisibleBy(...args)(value)
    },
    isEmail(...args: Parameters<typeof isEmail>) {
      return isEmail(...args)(value)
    },
    isEmpty(...args: Parameters<typeof isEmpty>) {
      return isEmpty(...args)(value)
    },
    isFloat(...args: Parameters<typeof isFloat>) {
      return isFloat(...args)(value)
    },
    isFQDN(...args: Parameters<typeof isFQDN>) {
      return isFQDN(...args)(value)
    },
    isHash(...args: Parameters<typeof isHash>) {
      return isHash(...args)(value)
    },
    isIdentityCard(...args: Parameters<typeof isIdentityCard>) {
      return isIdentityCard(...args)(value)
    },
    isIMEI(...args: Parameters<typeof isIMEI>) {
      return isIMEI(...args)(value)
    },
    isIn(...args: Parameters<typeof isIn>) {
      return isIn(...args)(value)
    },
    isInt(...args: Parameters<typeof isInt>) {
      return isInt(...args)(value)
    },
    isIP(...args: Parameters<typeof isIP>) {
      return isIP(...args)(value)
    },
    isISBN(...args: Parameters<typeof isISBN>) {
      return isISBN(...args)(value)
    },
    isISSN(...args: Parameters<typeof isISSN>) {
      return isISSN(...args)(value)
    },
    isJSON(...args: Parameters<typeof isJSON>) {
      return isJSON(...args)(value)
    },
    isLatLong(...args: Parameters<typeof isLatLong>) {
      return isLatLong(...args)(value)
    },
    isLength(...args: Parameters<typeof isLength>) {
      return isLength(...args)(value)
    },
    isMobilePhone(...args: Parameters<typeof isMobilePhone>) {
      return isMobilePhone(...args)(value)
    },
    isNumeric(...args: Parameters<typeof isNumeric>) {
      return isNumeric(...args)(value)
    },
    isPassportNumber(...args: Parameters<typeof isPassportNumber>) {
      return isPassportNumber(...args)(value)
    },
    isPostalCode(...args: Parameters<typeof isPostalCode>) {
      return isPostalCode(...args)(value)
    },
    isRgbColor(...args: Parameters<typeof isRgbColor>) {
      return isRgbColor(...args)(value)
    },
    isTaxID(...args: Parameters<typeof isTaxID>) {
      return isTaxID(...args)(value)
    },
    isURL(...args: Parameters<typeof isURL>) {
      return isURL(...args)(value)
    },
    isUUID(...args: Parameters<typeof isUUID>) {
      return isUUID(...args)(value)
    },
    isWhitelisted(...args: Parameters<typeof isWhitelisted>) {
      return isWhitelisted(...args)(value)
    },
    matches(...args: Parameters<typeof matches>) {
      return matches(...args)(value)
    },
    isMatching(...args: Parameters<typeof isMatching>) {
      return isMatching(...args)(value)
    },
  }
}
