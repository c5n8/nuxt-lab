import { reactive, computed } from '@vue/composition-api'
import { extend } from 'vue-extend-reactive'

export default useAsyncFunction

export function useAsyncFunction<F extends (...args: any[]) => any, R>(
  fn: F
): PromiseSnapshot<F, R> {
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

  async function start(...args: Parameters<F>): Promise<R> {
    props.error = undefined
    props.result = undefined
    props.status = 'pending'

    let result

    try {
      result = await fn(...args)
    } catch (error) {
      props.error = error
      props.status = 'rejected'

      throw error
    }

    props.error = null
    props.result = result
    props.status = 'fulfilled'

    return result
  }

  return extend(extend(props, getters), <Methods<F>>{ start })
}

interface PromiseSnapshot<F extends (...args: any[]) => any, R>
  extends Props<R>,
    Getters,
    Methods<F> {
  readonly error: any
  readonly result: R | null | undefined
  readonly status: PromiseStatus
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

interface Methods<F extends (...args: any[]) => any> {
  start(...args: Parameters<F>): Promise<Unpacked<ReturnType<F>>>
}

type PromiseStatus = 'standby' | 'pending' | 'fulfilled' | 'rejected'

type Unpacked<T> = T extends (infer U)[]
  ? U
  : T extends (...args: any[]) => infer U
  ? U
  : T extends Promise<infer U>
  ? U
  : T
