import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

export default defineConfig(() => {
	return {
		server: {
			port: 3000,
			host: "0.0.0.0",
		},
		build: {
			outDir: "build",
		},
		plugins: [react(), svgr({ svgrOptions: { icon: true } })],
	};
});
