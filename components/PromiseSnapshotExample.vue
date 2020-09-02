<template>
  <section>
    <template v-if="calculation.isStandby">
      <div>Generate number 1-1000</div>
      <div>
        <button @click="startCalculation()">Start</button>
      </div>
    </template>

    <template v-if="calculation.isPending">
      <div>Generating...</div>
    </template>
    <template v-else-if="calculation.isFulfilled">
      <div>{{ calculation.result }}</div>
    </template>
    <template v-else-if="calculation.isRejected">
      <div>{{ calculation.error }}</div>
    </template>

    <template v-if="calculation.isSettled">
      <div>
        <button @click="startCalculation()">Retry</button>
      </div>
    </template>
  </section>
</template>

<script>
import { usePromise } from 'vue-promise-snapshot'
import { sample, random } from 'lodash-es'

export default {
  setup() {
    const calculation = usePromise()

    async function startCalculation() {
      try {
        await calculation.start(calculate())
      } catch (error) {
        //
      }
    }

    return {
      calculation,
      startCalculation,
    }
  },
}

export async function calculate() {
  const duration = random(200, 2000)

  await new Promise((resolve) => setTimeout(resolve, duration))

  if (sample([true, false])) {
    throw new Error('Failed to generate')
  }

  return random(0, 1000)
}
</script>
