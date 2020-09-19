<template>
  <section>
    <div v-if="generation.isStandby">
      <div>Generate number 1-1000</div>
      <button @click="generate()">Start</button>
    </div>

    <div v-if="generation.isPending">Generating...</div>
    <div v-else-if="generation.isFulfilled">
      {{ generation.result }}
    </div>
    <div v-else-if="generation.isRejected">
      {{ generation.error }}
    </div>

    <div v-if="generation.isSettled">
      <button @click="generate()">Retry</button>
    </div>
  </section>
</template>

<script>
import { usePromiseSnapshot } from 'vue-promise-snapshot'

export default {
  setup() {
    const generation = usePromiseSnapshot()

    async function generate() {
      generation.promise = _generate()

      try {
        await generation.promise
      } catch (error) {
        //
      }
    }

    // You can also use start method to get one-liner and type hints

    // async function generate() {
    //   try {
    //     await generation.start(_generate())
    //   } catch (error) {
    //     //
    //   }
    // }

    return {
      generation,
      generate,
    }
  },
}

async function _generate() {
  const random = (min, max) =>
    Math.floor(Math.random() * Math.floor(max - min + 1)) + parseInt(min)
  await new Promise((resolve) => setTimeout(resolve, random(200, 2000)))

  if (random(0, 1)) {
    throw new Error('Failed to generate')
  }

  return random(1, 1000)
}
</script>
