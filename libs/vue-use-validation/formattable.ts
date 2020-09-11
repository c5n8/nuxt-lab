import type { Validator } from './use-validation'

export default formattable

export function formattable<B extends ValidatorBuilder>(validatorBuilder: B) {
  return function (...args: Parameters<B>) {
    const validator = validatorBuilder(...args)
    let _translator: Formatter<B> | null

    const builder: FormattableValidator<B> = {
      format(translator) {
        _translator = translator

        return builder
      },
      validate: (value, key, data) => {
        try {
          validator(value, key, data)
        } catch (error) {
          if (_translator != null) {
            throw new Error(_translator(value, key, data)(...args))
          }

          throw error
        }
      },
    }

    return builder
  }
}

type ValidatorBuilder = (...args: any[]) => Validator<unknown>

interface FormattableValidator<B extends ValidatorBuilder> {
  format(translator: Formatter<B>): FormattableValidator<B>
  validate: Validator<object>
}

type Formatter<B extends ValidatorBuilder> = (
  value: any,
  key: string,
  data: object
) => (...args: Parameters<B>) => string
