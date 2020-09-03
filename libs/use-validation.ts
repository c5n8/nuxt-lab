import { reactive, computed } from '@vue/composition-api'
import { extend } from './extend-reactive'

export default useValidation

export function useValidation<
  D extends { [key: string]: any },
  R extends Rule<D>
>(data: D, rule: R) {
  const state: Validation<D, R> = reactive({
    isValid: computed(() => {
      return (
        Object.values(state.result).some((result) => result.isInvalid) === false
      )
    }),

    isInvalid: computed(() => {
      return state.isValid === false
    }),

    errors: computed(() => {
      return Object.values(state.result).reduce<string[]>(
        (errors, result) => [...errors, ...result.errors],
        []
      )
    }),

    result: computed(() =>
      Object.keys({ ...data, ...rule }).reduce<Result<D, R>>((result, key) => {
        const value = data[key] ?? null

        if (Array.isArray(rule[key])) {
          const validatorArray = rule[key] as Validator<D>[]

          const errors = validatorArray.reduce<string[]>(
            (errors, validator) => {
              const validatorResult = validator(value, key, data)

              if (typeof validatorResult === 'string') {
                return [...errors, validatorResult]
              }

              return errors
            },
            []
          )

          if (errors.length > 0) {
            return {
              ...result,
              [key]: extend(
                {
                  errors,
                },
                {
                  value,
                  error: errors[0],
                  isValid: false,
                  isInvalid: true,
                }
              ),
            }
          }
        }

        if (typeof rule[key] === 'function') {
          const validatorFn = rule[key] as Validator<D>
          const validatorResult = validatorFn(value, key, data)

          if (typeof validatorResult === 'string') {
            return {
              ...result,
              [key]: extend(
                {
                  errors: [validatorResult],
                },
                {
                  value,
                  error: validatorResult,
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
              value,
              error: null,
              isValid: true,
              isInvalid: false,
            }
          ),
        }
      }, <Result<D, R>>{})
    ),
  })

  return state
}

interface Validation<D, R> {
  isValid: boolean
  isInvalid: boolean
  result: Result<D, R>
}

type Result<D, R> = {
  [key: string]: ResultField
} & {
  [K in keyof D]: ResultField
} &
  {
    [K in keyof R]: ResultField
  }

type ResultField = {
  value: any
  error: string | null
  errors: string[]
  isValid: boolean
  isInvalid: boolean
}

type Rule<D> = {
  [key: string]: RuleField<D>
} & {
  [K in keyof D]?: RuleField<D>
}

type RuleField<D> = Validator<D> | Validator<D>[]

type Validator<D> = (value: any, key: string, data: D) => string | any
