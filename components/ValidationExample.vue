<template>
  <form>
    <label>
      <div>Name</div>
      <input v-model.trim="data.name" type="text" />
      <div v-if="validation.result.name.isInvalid">
        {{ validation.result.name.error }}
      </div>
    </label>

    <label>
      <div>Age</div>
      <input v-model.number="data.age" type="number" />
      <div v-if="validation.result.age.isInvalid">
        {{ validation.result.age.error }}
      </div>
    </label>

    <label>
      <div>Min Age Preference</div>
      <input v-model.number="data.minAgePreference" type="number" />
      <div v-if="validation.result.minAgePreference.isInvalid">
        {{ validation.result.minAgePreference.error }}
      </div>
    </label>

    <label>
      <div>Max Age Preference</div>
      <input v-model.number="data.maxAgePreference" type="number" />
      <div v-if="validation.result.maxAgePreference.isInvalid">
        {{ validation.result.maxAgePreference.error }}
      </div>
    </label>
    <label>
      <div>Debt</div>
      <input v-model.number="data.debt" type="number" />
      <div v-if="validation.result.debt.isInvalid">
        {{ validation.result.debt.error }}
      </div>
    </label>

    <div>
      <pre>{{ validation }}</pre>
    </div>
  </form>
</template>

<script lang="ts">
import { reactive } from '@vue/composition-api'
import { useValidation } from '../libs/vue-use-validation'
import { max } from '../libs/vue-use-validation/validators/formattable'

export default {
  setup() {
    const data = reactive({
      name: '',
      minAgePreference: 18,
      maxAgePreference: 24,
      age: 0,
      location: '',
      sex: '',
      debt: 0,
    })

    const validation = useValidation(data, {
      // debt: max(3).format((_, key) => (limit) =>
      //   `${key} ga boleh lebih dari ${limit}`
      // ),
      debt: [
        max(3).format((_, key) => (limit) =>
          `${key} tidak boleh lebih dari ${limit}`
        ),
        () => {
          throw new Error('zone')
        },
      ],
      // bruh: () => 'bruh',
      // zone: () => {
      //   throw new Error('zone')
      // },
      // location: [
      //   // () => 'fuck what tha fak is going on here, please halp',
      //   () => {
      //     throw new Error('location')
      //   },
      // ],
      name: (value, key) => {
        if (value == null) {
          throw new Error(`${key} is required`)
        }

        if (typeof value !== 'string') {
          throw new TypeError(`${key} must be string`)
        }

        if (value.length === 0) {
          throw new Error(`${key} must not be empty`)
        }

        if (value !== 'chabib') {
          throw new Error(`${key} must be chabib`)
        }
      },
      minAgePreference: (value, key, data) => {
        if (value == null) {
          throw new Error(`${key} is required`)
        }

        if (typeof value !== 'number') {
          throw new TypeError(`${key} must be number`)
        }

        if (value > data.maxAgePreference) {
          throw new Error(`${key} can not be more than max age preference`)
        }
      },
      maxAgePreference: (value, key, data) => {
        if (value == null) {
          throw new Error(`${key} is required`)
        }

        if (typeof value !== 'number') {
          throw new TypeError(`${key} must be number`)
        }

        if (value < data.minAgePreference) {
          throw new Error(`${key} can not be less than min age preference`)
        }
      },
      age: (value: number, key) => {
        if (value == null) {
          throw new Error(`${key} is required`)
        }

        if (typeof value !== 'number') {
          throw new TypeError(`${key} must be number`)
        }

        if (value < 18) {
          throw new Error('Too young')
        }
      },
    })

    // validation.

    return {
      data,
      validation,
    }
  },
}
</script>
