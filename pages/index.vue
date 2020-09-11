<template>
  <main>
    <article v-if="true">
      <h3>Validation</h3>
      <ValidationExample />
    </article>

    <article v-if="false">
      <h3>Extend Reactive</h3>
      <ExtendReactiveExample />
    </article>

    <article v-if="false">
      <h3>Promise Builder</h3>
      <PromiseBuilderExample />
    </article>

    <article v-if="false">
      <h3>Promise Snapshot</h3>
      <PromiseSnapshotExample />
    </article>
  </main>
</template>

<script>
import ValidationExample from '../components/ValidationExample.vue'
// // import ExtendReactiveExample from '../components/ExtendReactiveExample.vue'
import PromiseBuilderExample from '../components/PromiseBuilderExample.vue'
import PromiseSnapshotExample from '../components/PromiseSnapshotExample.vue'

export default {
  components: {
    ValidationExample,
    // ExtendReactiveExample,
    PromiseBuilderExample,
    PromiseSnapshotExample,
  },
}
</script>
