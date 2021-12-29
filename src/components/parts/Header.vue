<template lang="pug">
  header.header-container
    .header-top.py-4
      .container.mx-auto
        .flex.justify-between.items-center
          .col-auto
            h1.uppercase.font-bold.flex.items-center
              span
                img(src="@/assets/logo.png" alt="Vuejs" width="35")
              span.pl-2 Vuejs jsonplaceholder
          .col.pl-4
            div(v-if="getUserLogin.id")
              .flex.justify-end.items-center
                .col-auto
                  p.text-right
                    small.pr-1 Hello,
                    router-link(
                      class="font-semibold text-yellow-500 hover:text-purple-700 transition-all"
                      to="/user"
                    ) {{ getUserLogin.name }}
                .col-auto.px-2 |
                .col-auto
                  button.px-2.py-2.rounded.underline.text-yellow-500(
                    class="hover:opacity-70 transition-opacity" 
                    @click.prevent="logout")
                    small Logout
            p(v-else)
              router-link(to="/login") Đăng nhập
    .header-bottom.bg-white.bg-opacity-10.py-3
      .container.mx-auto
        slot
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  Name: "Header",
  computed: {
    ...mapGetters(["getUserLogin"]),
  },
  methods: {
    ...mapMutations(["setUserLogin"]),
    logout() {
      let _this = this;
      if (localStorage.getItem("name") && localStorage.getItem("id")) {
        localStorage.removeItem("name");
        localStorage.removeItem("id");
        _this.setUserLogin({ name: "", id: "" });
        _this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>
