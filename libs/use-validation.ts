import { reactive, computed } from '@vue/composition-api'
import { extend } from './extend-reactive'

export default useValidation

export function useValidation<
  D extends { [key: string]: any },
  R extends Rule<D>
>(data: D, rule: R) {
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
      Object.keys({ ...data, ...rule }).reduce<Result<D, R>>((result, key) => {
        const value = data[key]

        if (Array.isArray(rule[key])) {
          const validators = <Validator<D>[]>rule[key]
          const errors = validators.reduce<string[]>((errors, validator) => {
            try {
              validator(value, key, data)
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
          const validator = <Validator<D>>rule[key]

          try {
            validator(value, key, data)
          } catch (error) {
            return {
              ...result,
              [key]: extend(
                {
                  errors: [error.message],
                },
                {
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
  isPassed: boolean
  isFailed: boolean
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
