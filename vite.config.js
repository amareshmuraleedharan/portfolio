export default {
  base: "/portfolio/",
  root: "src",
  build: {
    outDir: "./dist",
    rollupOptions: {
      input: {
        main: "src/index.html",
        nested: "src/resume/resume.html",
      },
    },
  },
  server: {
    port: 3000,
  },
};
