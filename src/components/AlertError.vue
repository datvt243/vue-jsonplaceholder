<template lang="pug">
  .alert.alert-error
    .clearfix
      slot
    .text-center
      router-link.link(to="/") Về trang chủ
</template>

<style lang="postcss" scoped>
.link {
  @apply px-6 py-2 bg-purple-100 rounded-md hover:bg-purple-200 transition-all;
}
.clearfix {
  @apply px-4 py-8 bg-purple-50 border-2 border-purple-200 mb-5;
}
</style>
