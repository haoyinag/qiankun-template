import { defineConfig } from 'umi';

export default defineConfig({
  devServer: {
    port: 1111,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
});
