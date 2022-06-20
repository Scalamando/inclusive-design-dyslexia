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
          title: "Einstellungsmöglichkeiten",
          inst: "Lasse Nutzende die Schriftgröße, Zeilenabstand etc. selbst einstellen.",
        },
        {
          title: "Vorlesefunktion",
          inst: "Implementiere eine Vorlesefunktion",
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
