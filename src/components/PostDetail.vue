<template lang="pug">
  .post-detail.mb-5
    h2.text-3xl.text-yellow-600.mb-5.font-extrabold
      | {{ title | capitalize }}
    .info
      p(v-if="user")
        span.pr-2.opacity-75 Tác giả:
        router-link(
          tag="a"
          class="text-gray-300 hover:text-green-500 transition-all"
          :to="'/author/'+user.id"
        ) {{ user.name }}
    hr.line
    .post-content(v-html="body")
    hr.line
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    body: {
      type: String,
      default: "",
    },
    user: {
      type: Object,
      default: function () {
        return {
          id: 0,
          name: "",
          email: "",
        };
      },
    },
  },
};
</script>

<style lang="postcss" scoped>
.line {
  @apply pt-5 mt-5 border-t-2 border-blue-100 border-opacity-10;
}
</style>
