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
          title: "Einfarbige Hintergründe",
          inst: "Nutze einfarbige Hintergründe ohne Muster oder Bilder",
        },
        {
          title: "Auf Weiß verzichten",
          inst: "Verzichte auf die Farbe Weiß als Hintergrund. Nutze bspw. stattdessen eine helle Pastell-Farbe.",
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
