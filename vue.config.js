module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/vue-jsonplaceholder" : "/",
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "Vuejs - jsonplaceholder",
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
  },
};
