<template>
  <div class="w-full flex justify-center">
    <div class="w-11/12 my-3 border-2 border-dark rounded-md">
      <div class="w-full pl-1 py-1 mx-2">
        <h4 class=" font-semibold guidelines mb-1">{{ title }}</h4>
        <p class="guidelines">{{ inst }}</p>
      </div>
      <div :class="containerClass">
        <div id="do" :class="doStyle">
          <div v-if="title == 'Stichpunkte und Nummerierungen'">
            Stichpunkte und Nummerierungen:
            <ul class="list-disc list-inside">
              <li>
                {{ doo.one }}
              </li>
              <li>
                {{ doo.two }}
              </li>
              <li>
                {{ doo.three }}
              </li>
            </ul>
          </div>
          <div v-else id="doContent">
            {{ doo }}
          </div>
        </div>
        <div v-if="title == 'Textspalten'" :class="dontStyle">
          <div class="border w-full">
            Dieser Text ist in mehreren Spalten angeordnet. Dadurch wird
          </div>
          <div class="border w-full">
            der Lesefluss gestört und der Text wird unübersichtlicher!
          </div>
        </div>
        <div v-else id="dont" :class="dontStyle">
          <div class="">{{ dont }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      containerClass: "w-full flex",
    };
  },
  props: {
    title: String,
    inst: String,
    doo: String,
    dont: String,
    doStyle: String,
    dontStyle: String,
  },
  mounted() {
    if (this.title == "Zeilenlänge") {
      this.containerClass = "w-full";
    }
  },
};
</script>

<style>

.wordspaceWrong{
  word-spacing: -4px;
}
.wordspaceRight{
  word-spacing: 0.35em
}
</style>
