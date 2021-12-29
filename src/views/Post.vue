<template lang="pug">
  .page-post-detail(v-if="post != {}")
    TransitionFade
      .container.mx-auto(v-if="!post.error")
        PostDetail(
          :title="post.title" 
          :body="post.body" 
          :user="user"
        )
        CommentContainer(
          :comments="comments"
        )
      .container.mx-auto(v-else)
        AlertError
          p.text-center.text-xl {{ post.error }}
</template>

<script>
import PostDetail from "@/components/PostDetail";
import CommentContainer from "@/components/CommentContainer";
import AlertError from "@/components/AlertError";
export default {
  data() {
    return {
      post: {},
      user: null,
      comments: null,
    };
  },
  components: {
    PostDetail,
    CommentContainer,
    AlertError,
  },
  async created() {
    let _this = this;
    await this.$store
      .dispatch("fetchPostById", this.$route.params.id)
      .then((res) => {
        _this.post = res;
      })
      .catch((err) => {
        _this.post = err;
      });
    if (!_this.post.error) {
      await Promise.all([
        this.$store.dispatch("fetchUser", _this.post.userId),
        this.$store.dispatch("fetchComments", _this.post.id),
      ]).then((response) => {
        _this.user = response[0];
        _this.comments = response[1];
      });
    }
  },
};
</script>

<style scoped></style>
