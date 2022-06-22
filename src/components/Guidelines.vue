<template>
  <div>
    <h2 id="guidelines">Guidelines</h2>
    <p class="mb-3">
      Diese Regeln berücksichtigen die Probleme von Menschen mit Legasthenie.
      Sie vereinfachen das Lesen u. Verstehen von geschriebenen Inhalten für
      alle Leser*innen.
    </p>
    <p class="mb-3">
      Verwenden Sie zusätzlich zu diesen Regeln die Richtlinen der
      <a
        class="underline"
        href="https://www.w3.org/WAI/standards-guidelines/wcag/"
        >Web Accessibility Content Guidelines (WCAG)</a
      >
    </p>

    <div id="GuidelinesContent">
      <nav>
        <button
          v-for="tab in Tabs"
          :key="tab"
          class="mr-1 px-2 text-xl focus:bg-slate-700 focus:text-white focus:outline-none focus:border-none"
          v-on:click="currentTab = tab.Guidelines"
          v-bind:id="tab.name"
        >
          {{ tab.name }}
        </button>
      </nav>

      <div class="bg-slate-700 py-6 w-full">
        <Guideline
          v-for="Guide in currentTab"
          :key="Guide"
          :inst="Guide.inst"
          :title="Guide.title"
        ></Guideline>
      </div>
    </div>
  </div>
</template>

<script>
import Guideline from "./Guideline.vue";

export default {
  data() {
    return {
      Tabs: [
        {
          name: "Text",
          Guidelines: [
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
        },
        {
          name: "Farbe",
          Guidelines: [
            {
              title: "Einfarbige Hintergründe",
              inst: "Nutze einfarbige Hintergründe ohne Muster oder Bilder",
            },
            {
              title: "Auf Weiß verzichten",
              inst: "Verzichte auf die Farbe Weiß als Hintergrund. Nutze bspw. stattdessen eine helle Pastell-Farbe.",
            },
          ],
        },
        {
          name: "Anordnung",
          Guidelines: [
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
        },
        {
          name: "Überschriften",
          Guidelines: [
            {
              title: "Schriftgröße",
              inst: "Verwende eine Schriftgröße die mind. 20% größer als der normale Text ist.",
            },
            {
              title: "Abstände",
              inst: "Nutze zusätzliche Abstände um Überschriften herum.",
            },
          ],
        },
        {
          name: "Schreibstil",
          Guidelines: [
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
        },
        {
          name: "Werkzeuge",
          Guidelines: [
            {
              title: "Einstellungsmöglichkeiten",
              inst: "Lasse Nutzende die Schriftgröße, Zeilenabstand etc. selbst einstellen.",
            },
            {
              title: "Vorlesefunktion",
              inst: "Implementiere eine Vorlesefunktion",
            },
          ],
        },
      ],
      currentTab: [],
    };
  },
  components: {
    Guideline,
  },
  mounted() {
    document.getElementById("Text").focus({
      preventScroll: true,
    });
    this.currentTab = this.Tabs[0].Guidelines;
  },
};
</script>

<style></style>
