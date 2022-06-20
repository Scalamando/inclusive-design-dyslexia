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
          title: "Schriftgröße",
          inst: "Verwende eine Schriftgröße die mind. 20% größer als der normale Text ist.",
        },
        {
          title: "Abstände",
          inst: "Nutze zusätzliche Abstände um Überschriften herum.",
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
