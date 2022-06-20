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
          inst: "Nutze eine Schriftgröße von 16 - 19 px.",
        },
        {
          title: "Schriftart",
          inst: "Verwende eine Schriftart ohne Serifen (bspw. Sans-Serif)",
        },
        {
          title: "Zeichenabstand",
          inst: "Verwende einen Zeichenabstand von 35%",
        },
        {
          title: "Wortabstand",
          inst: "Der Abstand zwischen Wörtern sollte mind. 3.5 mal Größer sein als der Zeichenabstand",
        },
        {
          title: "Zeilenabstand",
          inst: "Nutze einen Zeilenabstand von 150% der Schriftgröße",
        },
        {
          title: "Zeilenlänge",
          inst: "Limitierte die Zeilenlänge auf 60 - 70 Zeichen",
        },
        {
          title: "Groß- / und Kleinschreibung",
          inst: "Verzichte auf Text in ausschließlich Groß- / Kleinbuchstaben",
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
