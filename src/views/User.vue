<template lang="pug">
  .page-user
    .container.mx-auto
      .clearfix.mb-5
        small.text-gray-400 Xin chào,
        h2.mb-6.text-3xl.font-extrabold
          | {{ userLogin.name }}
      .clearfix
        h3.text-2xl.font-bold.pb-2.mb-5.border-b
          | Danh sách bài viết của bạn
        .clearfix(v-if="!posts.error")
          table.table-post.min-w-full.divide-y.divide-gray-200
            thead.bg-gray-50.bg-opacity-10.text-white
              tr.text-white.border-0
                th.text-white.w-10.text-center(scope="col") #
                th.text-white(scope="col") Tiêu đề
                th.text-white(scope="col")
            tbody
              tr(v-for="post in posts" :key="post.id")
                td.text-center {{ post.id }}
                td
                  router-link(
                    :to="'/user/post/'+post.id"
                    tag="a"
                    class="hover:opacity-75 transition-opacity"
                  )
                    | {{ post.title }}
                td
                  .flex.justify-end.items-center
                    .col-auto
                      router-link.p-1.text-green-400(:to="'/post/'+post.id" class="hover:opacity-75")
                        small Xem
                    .col-py-2.opacity-20 
                      small |
                    .col-auto
                      router-link(:to="'/user/post/'+post.id").p-1.text-yellow-400(class="hover:opacity-75")
                        small Sửa
                    .col-py-2.opacity-20 
                      small |
                    .col-auto
                      button.p-1.text-red-400(class="hover:opacity-75" @click="deletePost(post.id)")
                        small Xóa
                    
        .clearfix(v-else)
          .text-center.text-red-700.bg-red-100.p-4.rounded
            p.font-semibold.text-md {{ posts.error }}
</template>

<script>
import { mapActions, mapState } from "vuex";
import PostListView from "@/components/PostListView";
export default {
  data() {
    return {
      posts: {},
    };
  },
  components: {
    PostListView,
  },
  async created() {
    let _this = this;
    await _this
      .fetchPostByUserId()
      .then((response) => {
        _this.posts = response;
      })
      .catch((err) => {
        _this.posts = err;
      });
  },
  computed: {
    ...mapState(["userLogin"]),
  },
  methods: {
    ...mapActions(["fetchPostByUserId"]),
    deletePost(id) {
      if (confirm(`Bạn có chắc là muốn xóa bài viêt #${id}`)) {
        this.$store
          .dispatch("deletingPost", id)
          .then(() => {
            alert(`Bạn đã xóa thành công bài viết #${id}`);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.table-post th {
  @apply px-6 py-3 text-xs text-left font-bold uppercase tracking-wider;
}
.table-post,
.table-post thead,
.table-post tbody,
.table-post tr,
.table-post th,
.table-post td {
  @apply border-0 border-opacity-10;
}

.table-post td {
  @apply px-6 py-3 whitespace-nowrap border-b;
}
</style>
