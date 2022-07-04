<template>
	<section
		id="guidelines-section"
		class="mb-4 w-[90ch] max-w-[calc(100vw-1.75rem)] sm:max-w-[calc(100vw-3rem)] lg:max-w-[calc(100vw-var(--nav-width))]"
	>
		<h2 id="guidelines">Guidelines</h2>
		<p class="mb-3 guidelines">
			Diese Regeln berücksichtigen die Probleme von Menschen mit Legasthenie.
			Sie vereinfachen das Lesen u. Verstehen von geschriebenen Inhalten für
			alle Leser*innen.
		</p>
		<p class="mb-6 guidelines">
			Verwende jedoch zusätzlich zu diesen Regeln die Richtlinen der <br />
			<a
				class="underline"
				href="https://www.w3.org/WAI/standards-guidelines/wcag/"
				>Web Accessibility Content Guidelines (WCAG)</a
			>
		</p>

		<div id="GuidelinesContent" class="rounded-lg overflow-hidden">
			<nav class="bg-dark/20">
				<h3 v-for="tab in Tabs" :key="tab" :id="tab.name" class="inline-block !p-0 !m-0">
					<button
						class="px-3 py-2.5 text-xl leading-none hover:bg-dark/20"
						:class="{ focusButton: tab === currentTab }"
						@click="setFocus(tab)"
					>
						{{ tab.name }}
					</button>
				</h3>
			</nav>

			<div class="bg-dark/10 py-6 w-full">
				<Guideline
					v-for="Guide in currentTab.Guidelines"
					:key="Guide"
					:inst="Guide.inst"
					:title="Guide.title"
					:doo="Guide.doo"
					:dont="Guide.dont"
					:doStyle="Guide.doStyle"
					:dontStyle="Guide.dontStyle"
				></Guideline>
			</div>
		</div>
	</section>
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
							inst: "Nutze eine Schriftgröße von 16 - 20 px.",
							doo: "Schriftgröße von 20px",
							dont: "Schriftgröße von 12px",
							doStyle: "border-accent-green doDont",
							dontStyle: "border-accent-red  doDont text-sm",
						},
						{
							title: "Schriftart",
							inst: "Verwende eine Schriftart ohne Serifen (bspw. Sans-Serif).",
							doo: "Schrift ohne Serifen",
							dont: "Schrift mit Serifen",
							doStyle: "  doDont border-accent-green",
							dontStyle: "  doDont border-accent-red font-serif ",
						},
						{
							title: "Zeichen und Wortabstand",
							inst: "Verwende einen Zeichenabstand von 35% der Schriftgröße. Der Abstand zwischen einzelnen Wörtern sollte mind. 3,5 mal größer sein als der Zeichenabstand.",
							doo: "Die Zeichen und Wörter haben ausreichend Abstand!",
							dont: "Zeichen und Wörter sind zu nah aneinander!",
							doStyle:
								"  doDont border-accent-green tracking-[.1.5em] wordspaceRight",
							dontStyle:
								"  doDont border-accent-red tracking-[-.1em] wordspaceWrong",
						},
						{
							title: "Zeilenabstand",
							inst: "Nutze einen Zeilenabstand von 150% der Schriftgröße",
							doo: "Der Zeilenabstand in diesem Text beträgt 150% der Schriftgröße. ",
							dont: "Der Zeilenabstand in diesem Text beträgt 100% der Schriftgröße.",
							doStyle: " doDont border-accent-green ",
							dontStyle: " doDont border-accent-red leading-none w-1/2",
						},
						{
							title: "Zeilenlänge",
							inst: "Limitierte die Zeilenlänge auf 60 - 70 Zeichen",
							doo: "Die Zeilen in diesem Text haben eine maximale Länge von 60 Zeichen, und haben somit die korrekte Länge.",
							dont: "Die Zeilen in diesem Text haben eine maximale Länge von 80 Zeichen, und haben somit eine falsche Länge.",
							doStyle: "doDont w-auto border-accent-green ",
							dontStyle: "doDont max-w-[80ch] w-auto border-accent-red ",
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
							inst: "Nutze einfarbige Hintergründe ohne Muster oder Bilder.",
							doo: "Dies ist ein einfarbiger Hintergrund.",
							dont: "Dies ist ein mehrfarbiger Hintergrund mit Muster.",
							doStyle: " doDont border-accent-green bg-light",
							dontStyle:
								" doDont border-accent-red bg-gradient-to-r from-accent-red via-slate-600 to-blue-500",
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
							doo: "Dieser Text ist linksbündig angeordnet.  Dies ist gut für die Lesbarkeit! ",
							dont: "Dieser Text ist zentriert. \n Dies verschlechtert den Lesefluss und ist schlecht für die Lesbarkeit! ",
							doStyle: " doDont border-accent-green ",
							dontStyle: " doDont border-accent-red  text-center",
						},
						{
							title: "Textspalten",
							inst: "Verzichte auf mehrere Textspalten",
							doo: "Dieser Text befindet sich in einer Textspalte! Das ist gut für den Lesefluss und macht die Seite übersichtlicher!",
							dont: "Dieser Text ist in mehreren Textspalten angeordnet. Das ist schlecht für den Lesefluss und macht die Seite unübersichtlicher!",
							doStyle: " doDont border-accent-green ",
							dontStyle: " doDont border-accent-red items-start columns-2",
						},
						{
							title: "Überschriften",
							inst: "Trenne lange Texte mit Überschriften für Absätze. Verwende zusätzlich ein Inhaltsverzeichnis.",
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
							doo: "Dieser Text hat einfache Sätze. Sie sind kurz und simpel. Dadurch ist der Text einfacher zu verstehen. ",
							dont: "Innerhalb dieses Textes sind schwierigere Sätze enthalten, da diese länger und komplex strukturiert sind, wodurch dieser Text schwieriger zu verstehen ist. ",
							doStyle: " doDont border-accent-green ",
							dontStyle: " doDont border-accent-red ",
						},
						{
							title: "Stil",
							inst: "Schreibe ein einem direkten und aktivem Stil.",
							doo: '"Jonas versteht den Text."',
							dont: '"Der Text wird von Jonas verstanden."',
							doStyle: " doDont border-accent-green",
							dontStyle: " doDont border-accent-red",
						},
						{
							title: "Verneinungen",
							inst: "Verzichte auf doppelte Verneinungen",
							doo: '"Ich habe alles Verstanden!"',
							dont: '"Ich habe nichts nicht verstanden!"',
							doStyle: " doDont border-accent-green",
							dontStyle: " doDont border-accent-green",
						},
						{
							title: "Stichpunkte und Nummerierungen",
							inst: "Nutze Stichpunkte und Nummerierungen wenn möglich.",
							doo: {
								header: "Stichpunkte und Nummerierungen!",
								one: "Bringen Struktur in den Text",
								two: "Verbessern die Verständlichkeit",
								three: "Machen vieles übersichtlicher",
							},
							dont: "Stichpunkte und Nummerierungen bringen Struktur in einen Text. Außerdem verbessern sie die Verständlichkeit. Zusätzlich werden durch Stichpunkte und Nummerierungen viele Texte übersichtlicher.",
							doStyle:
								" doDont border-accent-green place-content-start list-disc",
							dontStyle: " doDont border-accent-red",
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
							inst: "Implementiere eine Vorlesefunktion.",
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
	methods: {
		setFocus: function (tab) {
			this.currentTab = tab;
		},
	},
	mounted() {
		this.currentTab = this.Tabs[0];
	},
};
</script>
