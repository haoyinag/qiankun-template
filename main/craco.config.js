/** @format */
const CracoLessPlugin = require("craco-less");
const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin");

// const theme = require("./src/theme");

module.exports = {
  webpack: {
    plugins: [new AntdDayjsWebpackPlugin()],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "primary-color": "red" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
