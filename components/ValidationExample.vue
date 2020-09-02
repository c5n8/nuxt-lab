<template>
  <form>
    <label>
      <div>Name</div>
      <input v-model="form.name" type="text" />
      <div v-if="validation.result.name.isInvalid">
        {{ validation.result.name.error }}
      </div>
    </label>
    <label>
      <div>Age</div>
      <input v-model="form.age" type="number" />
      <div v-if="validation.result.age.isInvalid">
        {{ validation.result.age.error }}
      </div>
    </label>
    <label>
      <div>Min Age Preference</div>
      <input v-model="form.minAgePreference" type="number" />
      <div v-if="validation.result.minAgePreference.isInvalid">
        {{ validation.result.minAgePreference.error }}
      </div>
    </label>
    <label>
      <div>Max Age Preference</div>
      <input v-model="form.maxAgePreference" type="number" />
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
    const form = reactive({
      name: '',
      minAgePreference: 18,
      maxAgePreference: 24,
      age: 0,
    })

    const validation = useValidation<typeof form>(form, {
      bruh() {
        return true
      },
      name(value, key) {
        if (value == null) {
          return `${key} is required`
        }

        if (typeof value !== 'string') {
          return `${key} must be string`
        }

        if (value.length === 0) {
          return `${key} must not empty`
        }

        if (value !== 'chabib') {
          return `${key} must be chabib`
        }

        return true
      },
      minAgePreference(value, key, data) {
        if (value == null) {
          return `${key} is required`
        }

        if (typeof value !== 'number') {
          return `${key} must be string`
        }

        if (value > data.maxAgePreference) {
          return `${key} can not be more than max age preference`
        }

        return true
      },
      maxAgePreference(value, key, data) {
        if (value == null) {
          return `${key} is required`
        }

        if (typeof value !== 'number') {
          return `${key} must be string`
        }

        if (value < data.minAgePreference) {
          return `${key} can not be less than min age preference`
        }

        return true
      },
      age(value: number, key) {
        if (value == null) {
          return `${key} is required`
        }

        if (typeof value !== 'number') {
          return `${key} must be string`
        }

        if (value < 18) {
          return 'Too young'
        }

        return true
      },
    })

    return {
      form,
      validation,
    }
  },
}
</script>
