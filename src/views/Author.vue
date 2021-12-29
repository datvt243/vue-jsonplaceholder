<template lang="pug">
  .page-user
    .container.mx-auto
      .clearfix.mb-8
        h2.text-2xl.font-bold.uppercase.pb-2.mb-5.border-b
          | Thông tin user
        //- pre {{ posts }}
        .flex.items-center
          .col.pr-4
            span.h-24.w-24.block.rounded-full.bg-purple-100
          .flex-grow
            table.table-auto.border-collapse.w-full.text-sm
              tbody
                tr
                  th Name
                  td {{ user.name }}
                tr
                  th Email
                  td {{ user.email }}
                tr
                  th Phone
                  td {{ user.phone }}
      .clearfix.mb-5
        h2.text-2xl.font-bold.uppercase.pb-2.mb-5.border-b
          | Các bài viết của @{{ user.name  }}
        PostListView(:posts="posts")
</template>

<script>
import PostListView from "@/components/PostListView";
export default {
  name: "Author",
  data() {
    return {
      user: {},
      posts: null,
    };
  },
  components: {
    PostListView,
  },
  async created() {
    let _this = this;
    await Promise.all([
      this.$store.dispatch("fetchUser", this.$route.params.id),
      this.$store.dispatch("fetchPostByUser", this.$route.params.id),
    ]).then((response) => {
      // console.log(response)
      _this.user = response[0];
      _this.posts = response[1];
    });
  },
};
</script>

<style lang="postcss" scoped>
table th {
  @apply text-left;
}
table th,
table td {
  @apply border-b border-gray-100 p-2;
}
</style>
