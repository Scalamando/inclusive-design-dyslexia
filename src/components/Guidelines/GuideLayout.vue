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
          title: "Textausrichtung",
          inst: "Linksbündigen Text verwenden",
        },
        {
          title: "Textspalten",
          inst: "Verzichte auf mehrere Textspalten",
        },
        {
          title: "Überschriften",
          inst: "Trenne lange Texte mit Überschriften für Absätze. Verwende zusätzlich ein Inhaltsverzeichnis",
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
