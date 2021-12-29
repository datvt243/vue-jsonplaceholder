<template lang="pug">
  .comment
    .flex
      .col.pr-4
        span.avatar
      .flex-grow
        p.font-semibold.text-purple-600.mb-1
          | {{ comment.email }}
        .clearfix(v-html="comment.body")
</template>

<script>
export default {
  Name: "CommentItem",
  parent: "CommentContainer",
  props: {
    comment: {
      type: Object,
      default: function () {
        return {
          postId: null,
          id: null,
          name: "",
          email: "",
          body: "",
        };
      },
    },
  },
};
</script>

<style lang="postcss" scoped>
.comment {
  @apply rounded-md bg-purple-50 bg-opacity-5 p-4 mb-4;
}
.avatar {
  @apply h-10 w-10 block rounded-full bg-purple-600;
}
</style>
