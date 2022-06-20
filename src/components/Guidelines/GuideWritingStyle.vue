<template>
  <div class="w-full">
    <Guideline
      v-for="Guide in Guides"
      :key="Guide"
      :inst="Guide.inst"
      :title="Guide.title"
    ></Guideline>
  </div>
</template>

<script>
import Guideline from "./Guideline.vue";
export default {
  data() {
    return {
      Guides: [
        {
          title: "Komplexität",
          inst: "Verwende kurze und simple Sätze.",
        },
        {
          title: "Stil",
          inst: "Schreibe ein einem direkten und aktiven Stil.",
        },
        {
          title: "Verneinungen",
          inst: "Verzichte auf doppelte Verneinungen",
        },
        {
          title: "Stichpunkte und Nummerierungen",
          inst: "Nutze Stichpunkte und Nummerierungen wenn möglich.",
        },
      ],
    };
  },
  components: {
    Guideline,
  },
};
</script>

<style></style>
