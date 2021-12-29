<template lang="pug">
  .clearfix(v-if="comments")
    p.text-xl.mb-2 Comments
    div(v-for="cmt in comments" :key="cmt.id")
      CommentItem(:comment="cmt")
</template>

<script>
import CommentItem from "@/components/CommentItem";
export default {
  Name: "CommentContainer",
  props: {
    comments: {
      type: Array,
      default: null,
    },
  },
  components: {
    CommentItem,
  },
};
</script>
