<template lang="pug">
  .page-container.bg-dark.text-white
    .flex.flex-col.min-h-screen
      Header
        NavMenu(class="mx-auto")
      main.main-container.flex-grow.py-5
        TransitionFade
          router-view
      Footer
</template>

<script>
import NavMenu from "@/components/parts/NavMenu";
import Footer from "@/components/parts/Footer";
import Header from "@/components/parts/Header";

export default {
  name: "App",
  components: {
    NavMenu,
    Footer,
    Header,
  },
};
</script>
