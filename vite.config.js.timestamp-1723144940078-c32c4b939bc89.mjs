// vite.config.js
import { defineConfig } from "file:///C:/WebDev/Personal/ReactJs/Tailwind/portfolio-v3/node_modules/vite/dist/node/index.js";
import react from "file:///C:/WebDev/Personal/ReactJs/Tailwind/portfolio-v3/node_modules/@vitejs/plugin-react-swc/index.mjs";
import svgr from "file:///C:/WebDev/Personal/ReactJs/Tailwind/portfolio-v3/node_modules/vite-plugin-svgr/dist/index.js";
var vite_config_default = defineConfig(() => {
  return {
    server: {
      port: 3e3,
      host: "0.0.0.0"
    },
    build: {
      outDir: "build"
    },
    plugins: [react(), svgr({ svgrOptions: { icon: true } })]
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxXZWJEZXZcXFxcUGVyc29uYWxcXFxcUmVhY3RKc1xcXFxUYWlsd2luZFxcXFxwb3J0Zm9saW8tdjNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFdlYkRldlxcXFxQZXJzb25hbFxcXFxSZWFjdEpzXFxcXFRhaWx3aW5kXFxcXHBvcnRmb2xpby12M1xcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovV2ViRGV2L1BlcnNvbmFsL1JlYWN0SnMvVGFpbHdpbmQvcG9ydGZvbGlvLXYzL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XG5pbXBvcnQgc3ZnciBmcm9tIFwidml0ZS1wbHVnaW4tc3ZnclwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHNlcnZlcjoge1xuXHRcdFx0cG9ydDogMzAwMCxcblx0XHRcdGhvc3Q6IFwiMC4wLjAuMFwiLFxuXHRcdH0sXG5cdFx0YnVpbGQ6IHtcblx0XHRcdG91dERpcjogXCJidWlsZFwiLFxuXHRcdH0sXG5cdFx0cGx1Z2luczogW3JlYWN0KCksIHN2Z3IoeyBzdmdyT3B0aW9uczogeyBpY29uOiB0cnVlIH0gfSldLFxuXHR9O1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThVLFNBQVMsb0JBQW9CO0FBQzNXLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFFakIsSUFBTyxzQkFBUSxhQUFhLE1BQU07QUFDakMsU0FBTztBQUFBLElBQ04sUUFBUTtBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1A7QUFBQSxJQUNBLE9BQU87QUFBQSxNQUNOLFFBQVE7QUFBQSxJQUNUO0FBQUEsSUFDQSxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssRUFBRSxhQUFhLEVBQUUsTUFBTSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQUEsRUFDekQ7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
