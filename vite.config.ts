import { loadEnv } from 'vite'
import type { UserConfig, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import EslintPlugin from 'vite-plugin-eslint'
import { ViteEjsPlugin } from "vite-plugin-ejs"
import { resolve } from 'path'

const root = process.cwd()

function pathResolve(dir: string) {
  return resolve(root, '.', dir)
}
export default ({ command, mode }: ConfigEnv): UserConfig => {
  let env = {} as any
  const isBuild = command === 'build'
  if (!isBuild) {
    env = loadEnv(process.argv[3] === '--mode' ? process.argv[4] : process.argv[3], root)
  } else {
    env = loadEnv(mode, root)
  }
  return {
    base: env.VITE_BASE_PATH,
    plugins: [
      vue({
        script: {
          defineModel: true
        }
      }),
      EslintPlugin({
        cache: false,
        include: ['src/**/*.vue', 'src/**/*.ts'] // 检查的文件
      }),
      ViteEjsPlugin({
        title: env.VITE_APP_TITLE
      }),
    ],
    resolve: {
      alias: {
        '@': pathResolve('src')
      }
    },
    build: {
      minify: 'terser',
      outDir: env.VITE_OUT_DIR || 'dist',
      sourcemap: env.VITE_SOURCEMAP === 'true' ? 'inline' : false,
      // brotliSize: false,
      terserOptions: {
        compress: {
          drop_debugger: env.VITE_DROP_DEBUGGER === 'true',
          drop_console: env.VITE_DROP_CONSOLE === 'true'
        }
      }
    },
  }
}
