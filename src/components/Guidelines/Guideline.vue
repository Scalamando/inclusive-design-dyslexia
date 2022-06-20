<template>
  <div class="w-full flex justify-center">
    <div class="border w-4/5 my-3 flex justify bg-slate-100">
      <div class="w-2/5 border pl-1">
        <p class="text-xl font-semibold">{{ title }}</p>
        <p>{{ inst }}</p>
      </div>
      <div class="border w-3/5 flex justify">
        <div id="do" class="border w-1/2 m-2 h-12">do</div>
        <div id="dont" class="border w-1/2 m-2">dont</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    title: String,
    inst: String,
  },
};
</script>
