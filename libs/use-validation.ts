import { reactive, computed } from '@vue/composition-api'

export default useValidation

export function useValidation<Data>(data: Data, rule: Rule<Data>): Validation {
  const state: Validation = reactive({
    isValid: computed(
      () =>
        Object.values(state.result).some((result) => result.isInvalid) === false
    ),
    isInvalid: computed(() => state.isValid === false),
    result: computed(() =>
      Object.keys({ ...data, ...rule }).reduce((result, key) => {
        const value = (<any>data)[key] ?? null

        if (typeof rule[key] === 'function') {
          const error = rule[key](value, key, data)

          if (typeof error === 'string') {
            result[key] = {
              value,
              error,
              isValid: false,
              isInvalid: true,
            }

            return result
          }
        }

        result[key] = {
          value,
          error: null,
          isValid: true,
          isInvalid: false,
        }

        return result
      }, <Result>{})
    ),
  })

  return state
}

interface Validation {
  isValid: boolean
  isInvalid: boolean
  result: Result
}

interface Rule<Data> {
  [key: string]: (value: any, key: string, data: Data) => string | true
}

interface Result {
  [key: string]: {
    value: any
    error: string | null
    isValid: boolean
    isInvalid: boolean
  }
}
