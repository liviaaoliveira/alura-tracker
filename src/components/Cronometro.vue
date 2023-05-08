<template>
  <section>
    <strong class="display"> {{ tempoDecorrido }}</strong>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CronometroSegundos",
  props: {
    tempoEmSegundos: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    tempoDecorrido(): string {
      return new Date(this.tempoEmSegundos * 1000)
        .toISOString()
        .substring(19, 11);
    },
  },
});
</script>

<style>
.display {
  color: var(--texto-primario);
}
</style>
