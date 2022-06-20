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
          v-on:click="currentTab = tab.component"
          v-bind:id="tab.name"
        >
          {{ tab.name }}
        </button>
      </nav>

      <div class="bg-slate-700 py-6">
        <component :is="currentTab"></component>
      </div>
    </div>
  </div>
</template>

<script>
import GuideText from "./Guidelines/GuideText.vue";
import GuideColor from "./Guidelines/GuideColor.vue";
import GuideLayout from "./Guidelines/GuideLayout.vue";
import GuideHeaders from "./Guidelines/GuideHeaders.vue";
import GuideTools from "./Guidelines/GuideTools.vue";
import GuideWritingStyle from "./Guidelines/GuideWritingStyle.vue";

export default {
  data() {
    return {
      currentTab: "GuideText",
      Tabs: [
        { name: "Text", component: GuideText },
        { name: "Farbe", component: GuideColor },
        { name: "Anordnung", component: GuideLayout },
        { name: "Überschriften", component: GuideHeaders },
        { name: "Schreibstil", component: GuideWritingStyle },
        { name: "Werkzeuge", component: GuideTools },
      ],
    };
  },
  components: {
    GuideText,
    GuideColor,
    GuideLayout,
    GuideHeaders,
    GuideTools,
    GuideWritingStyle,
  },
  mounted() {
    document.getElementById("Text").focus({
      preventScroll: true,
    });
  },
};
</script>

<style></style>
