<template lang="pug">
  .container.mx-auto
    .clearfix.px-4.py-8.mt-6.bg-white.bg-opacity-10.rounded-md
      p.text-center.text-3xl.mb-5.uppercase 404. Page not found
      .text-center
        router-link.inline-block.px-6.py-2.underline(
          to="/" 
          class="hover:bg-purple-200 transition-all"
        ) Về trang chủ
</template>
