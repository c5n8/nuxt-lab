import { reactive, computed } from '@vue/composition-api'
import { extend } from '../extend-reactive'

export default useValidation

export function useValidation<
  D extends { [key: string]: any },
  R extends RuleMap<D>
>(data: D, ruleMap: R) {
  const state: Validation<D, R> = reactive({
    isPassed: computed(
      () =>
        Object.values(state.result).some((result) => result.isInvalid) === false
    ),

    isFailed: computed(() => state.isPassed === false),

    errors: computed(() =>
      Object.values(state.result).reduce<string[]>(
        (errors, result) => [...errors, ...result.errors],
        []
      )
    ),

    result: computed(() =>
      Object.keys({ ...data, ...ruleMap }).reduce<ResultMap<D, R>>(
        (result, key) => {
          const value = data[key]
          const rule = ruleMap[key]

          if (rule != null && Array.isArray(rule)) {
            const validators = <(Validator<D> | FormattableValidator)[]>rule
            const errors = validators.reduce<string[]>((errors, validator) => {
              try {
                if (typeof validator === 'function') {
                  ;(<Validator<D>>validator)(value, key, data)
                } else if ('validate' in validator) {
                  ;(<FormattableValidator>validator).validate(value, key, data)
                }
              } catch (error) {
                return [...errors, error.message]
              }

              return errors
            }, [])

            if (errors.length > 0) {
              return {
                ...result,
                [key]: extend(
                  {
                    errors,
                  },
                  {
                    key,
                    value,
                    error: errors[0],
                    isValid: false,
                    isInvalid: true,
                  }
                ),
              }
            }
          }

          if (rule != null) {
            const validator = rule

            try {
              if (typeof validator === 'function') {
                ;(<Validator<D>>validator)(value, key, data)
              } else if ('validate' in validator) {
                ;(<FormattableValidator>validator).validate(value, key, data)
              }
            } catch (error) {
              return {
                ...result,
                [key]: extend(
                  {
                    errors: [error.message],
                  },
                  {
                    key,
                    value,
                    error: error.message,
                    isValid: false,
                    isInvalid: true,
                  }
                ),
              }
            }
          }

          return {
            ...result,
            [key]: extend(
              {
                errors: [],
              },
              {
                key,
                value,
                error: null,
                isValid: true,
                isInvalid: false,
              }
            ),
          }
        },
        <ResultMap<D, R>>{}
      )
    ),
  })

  return extend(state, {
    data: computed(() => data),
  })
}

interface Validation<D, R> {
  isPassed: boolean
  isFailed: boolean
  errors: string[]
  result: ResultMap<D, R>
}

type ResultMap<D, R> = {
  [key: string]: Result
} & {
  [K in keyof D]: Result
} &
  {
    [K in keyof R]: Result
  }

type Result = {
  key: string
  value: any
  error: string | null
  errors: string[]
  isValid: boolean
  isInvalid: boolean
}

type RuleMap<D> = {
  [key: string]: Rule<D>
} & {
  [K in keyof D]?: Rule<D>
}

type Rule<D> =
  | Validator<D>
  | FormattableValidator
  | (Validator<D> | FormattableValidator)[]

export type Validator<D> = (value: any, key: string, data: D) => unknown

interface FormattableValidator {
  format(translator: Formatter): FormattableValidator
  validate: Validator<object>
}

type Formatter = (
  value: any,
  key: string,
  data: object
) => (...args: any[]) => string
