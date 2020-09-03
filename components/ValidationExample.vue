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

    <div>
      <pre>{{ validation }}</pre>
    </div>
  </form>
</template>

<script lang="ts">
import { reactive } from '@vue/composition-api'
import { useValidation } from '../libs/use-validation'

export default {
  setup() {
    const data = reactive({
      name: '',
      minAgePreference: 18,
      maxAgePreference: 24,
      age: 0,
      location: '',
      sex: '',
    })

    const validation = useValidation(data, {
      // bruh: () => 'bruh',
      zone: () => true,
      location: [
        // () => 'fuck what tha fak is going on here, please halp',
        () => true,
      ],
      name: (value, key) => {
        if (value == null) {
          throw new Error(`${key} is required`)
        }

        if (typeof value !== 'string') {
          return `${key} must be string`
        }

        if (value.length === 0) {
          return `${key} must not be empty`
        }

        if (value !== 'chabib') {
          return `${key} must be chabib`
        }
      },
      minAgePreference: (value, key, data) => {
        if (value == null) {
          return `${key} is required`
        }

        if (typeof value !== 'number') {
          return `${key} must be number`
        }

        if (value > data.maxAgePreference) {
          return `${key} can not be more than max age preference`
        }
      },
      maxAgePreference: (value, key, data) => {
        if (value == null) {
          return `${key} is required`
        }

        if (typeof value !== 'number') {
          return `${key} must be number`
        }

        if (value < data.minAgePreference) {
          return `${key} can not be less than min age preference`
        }
      },
      age: (value: number, key) => {
        if (value == null) {
          return `${key} is required`
        }

        if (typeof value !== 'number') {
          return `${key} must be number`
        }

        if (value < 18) {
          return 'Too young'
        }
      },
    })

    // validation.result.

    return {
      data,
      validation,
    }
  },
}
</script>
