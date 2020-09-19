<template>
  <PromiseBuilder #default="snapshot" :promise="generation">
    <section>
      <button @click="reset()">Reset</button>

      <div v-if="snapshot.isStandby">
        <div>Generate number 1-1000</div>
        <button @click="generate()">Start</button>
      </div>

      <div v-if="snapshot.isPending">Generating...</div>
      <div v-else-if="snapshot.isFulfilled">
        {{ snapshot.result }}
      </div>
      <div v-else-if="snapshot.isRejected">
        {{ snapshot.error }}
      </div>

      <div v-if="snapshot.isSettled">
        <button @click="generate()">Retry</button>
      </div>
    </section>
  </PromiseBuilder>
</template>

<script>
import { PromiseBuilder } from 'vue-promise-builder'

export default {
  components: {
    PromiseBuilder,
  },

  data() {
    return {
      generation: null,
    }
  },

  methods: {
    async generate() {
      this.generation = _generate()

      try {
        await this.generation
      } catch (error) {
        //
      }
    },

    reset() {
      this.generation = null
    },
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
