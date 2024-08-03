import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from "path";
import vike from "vike/plugin";

if (!__dirname.endsWith("frontend")) {
    throw Error("vite.config.ts has unexpected __dirname: " + __dirname)
} 

// https://vitejs.dev/config/
export default defineConfig({
    root: resolve(__dirname, "./frontend"),
    build: {
        emptyOutDir: true,
    },
    resolve: {
        alias: {
            '!': resolve(__dirname, ".."),
            "~": resolve(__dirname),
        },
        extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    plugins: [
        vike({
            baseAssets: "/assets/"
        }),
        vue(),
    ],
})
