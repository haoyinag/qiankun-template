import { defineConfig } from 'umi';
const packageName = require('./package.json').name;

export default defineConfig({
  devServer: {
    port: 1111,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  qiankun: {
    slave: {},
  },
  // configureWebpack: {
  //   output: {
  //     library: `${packageName}-[name]`,
  //     libraryTarget: 'umd',
  //     jsonpFunction: `webpackJsonp_${packageName}`,
  //   },
  // },
  // chainWebpack: (config: any) => {
  //   config.output = {
  //     library: `${packageName}-[name]`,
  //     libraryTarget: 'umd',
  //     jsonpFunction: `webpackJsonp_${packageName}`,
  //   };

  //   return config;
  // },
  routes: [{ path: '/', component: '@/pages/index' }],
  // plugins: [['@umijs/plugin-qiankun/slave', {}]],
});
