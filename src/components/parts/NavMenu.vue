<template lang="pug">
  #nav.mr-auto
    .flex.justify-between
      .col-auto
        ul.flex.font-semibold
          li.pr-6
            router-link.uppercase(to="/") Bài Viết
          li.pr-6
            router-link.uppercase(to="/about") Về chúng tôi
      .col-auto
        div(v-if="userLogin.id")
          ul.flex.font-semibold
            li
              router-link.uppercase.text-green-500(to="/user/post/0") Thêm bài mới
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["userLogin"]),
  },
};
</script>
