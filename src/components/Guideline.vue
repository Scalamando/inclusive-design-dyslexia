<template>
  <div class="w-full flex justify-center">
    <div class="w-11/12 my-3 bg-slate-100">
      <div class="w-full pl-1 py-1">
        <p class="text-xl font-semibold guidelines">{{ title }}</p>
        <p class="guidelines">{{ inst }}</p>
      </div>
      <div :class="containerClass">
        <div id="do" :class="doStyle">
          <div>{{ doo }}</div>
        </div>
        <div id="dont" :class="dontStyle">
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
