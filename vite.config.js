import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import { VantResolver } from 'unplugin-vue-components/resolvers'

const pathResolve = (dir) => {
    return resolve(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        VueSetupExtend(),
        AutoImport({
            imports: ['vue', 'vue-router', 'pinia'], // 自动导入vue和vue-router相关函数
            eslintrc: {
                enabled: true, // Default `false`
                filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
                globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
            }
        }),
        Components({
            resolvers: [VantResolver()],
            dirs: ['./src/components']
        })
    ],
    resolve: {
        alias: {
            '@': pathResolve('./src')
        }
    }
})
