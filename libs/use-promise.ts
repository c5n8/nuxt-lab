import { reactive, computed, watch } from '@vue/composition-api'
import { extend } from '~/libs/extend-reactive'

export default usePromise

export function usePromise<R>(): PromiseSnapshot<R> {
  const _flags: _Flags = reactive({
    ignoreError: false,
  })

  const _props: _Props<R> = reactive({
    promise: null,
  })

  const props: Props<R> = reactive({
    error: undefined,
    result: undefined,
    status: 'standby',
  })

  const getters: Getters = reactive({
    isStandby: computed(() => props.status === 'standby'),
    isPending: computed(() => props.status === 'pending'),
    isFulfilled: computed(() => props.status === 'fulfilled'),
    isRejected: computed(() => props.status === 'rejected'),
    isSettled: computed(() => getters.isFulfilled || getters.isRejected),
    hasResult: computed(() =>
      getters.isSettled ? props.result != null : undefined
    ),
    hasError: computed(() =>
      getters.isSettled ? props.error != null : undefined
    ),
  })

  async function start<T>(promise: Promise<T>): Promise<T> {
    _flags.ignoreError = true
    _props.promise = promise

    return await promise
  }

  watch(
    () => _props.promise,
    async (promise) => {
      props.error = undefined
      props.result = undefined
      props.status = 'pending'

      let result

      try {
        result = await promise
      } catch (error) {
        props.error = error
        props.status = 'rejected'

        if (_flags.ignoreError) {
          return
        }

        throw error
      } finally {
        _flags.ignoreError = false
      }

      props.error = null
      props.result = result
      props.status = 'fulfilled'

      return result
    }
  )

  return extend(extend(extend(props, _props), getters), <Methods>{ start })
}

interface PromiseSnapshot<R> extends _Props<R>, Props<R>, Getters, Methods {
  readonly error: any
  readonly result: R | null | undefined
  readonly status: PromiseStatus
}

interface _Flags {
  ignoreError: boolean
}

interface _Props<R> {
  promise: Promise<R | any> | null
}

interface Props<R> {
  error: any
  result: R | null | undefined
  status: PromiseStatus
}

interface Getters {
  readonly isStandby: boolean
  readonly isPending: boolean
  readonly isFulfilled: boolean
  readonly isRejected: boolean
  readonly isSettled: boolean
  readonly hasResult: boolean | undefined
  readonly hasError: boolean | undefined
}

interface Methods {
  start<T>(promise: Promise<T>): Promise<T>
}

type PromiseStatus = 'standby' | 'pending' | 'fulfilled' | 'rejected'
