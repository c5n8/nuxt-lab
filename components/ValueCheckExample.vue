<template>
  <div>
    <table>
      <tr>
        <td>Value</td>
        <td>:</td>
        <!-- <td>
          {{ `${state.value}` }}
        </td> -->
      </tr>
      <tr v-for="(value, key) of state.checked" :key="key">
        <!-- <td>{{ key }}</td>
        <td>:</td>
        <td>{{ value() }}</td> -->
      </tr>
    </table>
  </div>
</template>

<script>
import { computed, reactive } from '@vue/composition-api'
import { value } from '~/libs/value-check'

export default {
  setup() {
    const state = reactive({
      value: 'chabib@gmail.com',
      checked: computed(() => value(state.value)),
    })

    // console.log(value(2).isExists())

    return {
      state,
    }
  },
}
</script>
