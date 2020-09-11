import _max from '../validators/max'
import { formattable } from '../formattable'

export function max(...args: Parameters<typeof _max>) {
  return formattable(_max)(...args)
}
