<template>
  <PromiseBuilder #default="snapshot" :promise="generation">
    <div>
      <div v-if="snapshot.isStandby">
        <div>Generate number 1-1000</div>
        <button @click="generate()">Start</button>
      </div>
      <div v-else-if="snapshot.isPending">Generating...</div>
      <div v-else-if="snapshot.isSettled">
        <div v-if="snapshot.isFulfilled">
          {{ snapshot.result }}
        </div>
        <div v-else-if="snapshot.isRejected">
          {{ snapshot.error }}
        </div>

        <button @click="generate()">Retry</button>
      </div>
    </div>
  </PromiseBuilder>
</template>

<script>
// import { PromiseBuilder } from 'vue-promise-builder'
import PromiseBuilder from '~/components/PromiseBuilder.vue'

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
      this.generation = generate(1, 1000)

      try {
        await this.generation
      } catch (error) {
        //
      }
    },
  },
}

async function generate(min, max) {
  await new Promise((resolve) => setTimeout(resolve, random(200, 2000)))

  if (random(0, 1)) {
    throw new Error('Failed to generate')
  }

  return random(min, max)
}

function random(min, max) {
  return Math.floor(Math.random() * Math.floor(max - min + 1)) + min
}
</script>
