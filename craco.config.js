/*
 * @description: craco 配置
 * @Author: Cheng kaixuan
 * @Date: 2023-05-05 09:29:14
 * @LastEditors: Cheng kaixuan
 * @LastEditTime: 2023-05-05 17:45:22
 */
const { when,whenDev, whenProd } = require("@craco/craco");
const webpack = require("webpack");
const path = require("path");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  devServer: {
    port: 5500,
    hot: true,
    proxy: {
      "/api": {
        target: "http://mes.yp.t/", // 测试环境
        changeOrigin: true,
      },
    },
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      console.log("env~~~~~~~~~~", env.NODE_ENV);
      webpackConfig.entry = "./src/index.js";
      webpackConfig.optimization = {
        minimize: when(process.env.NODE_ENV === 'production', () =>true, false),
        minimizer: [
          new TerserPlugin({
          // exclude: /\/node_modules/,
          parallel: true,
          minify: TerserPlugin.uglifyJsMinify,
          terserOptions: {
            compress: {
              drop_console: true,
              drop_debugger: true
            }
          },
        })
      ],
      chunkIds: "named",
      splitChunks:{
        cacheGroups: {
          commons: {
            chunks: "initial",
            minChunks: 2,
            maxInitialRequests: 5, // The default limit is too small to showcase the effect
            minSize: 0 // This is example is too small to create commons chunks
          },
          // vendor: {
          //   test: /node_modules/,
          //   chunks: "initial",
          //   name: "vendor",
          //   priority: 10,
          //   enforce: true
          // },
          lodash: {
            test: /node_modules\/lodash/,
            chunks: "initial",
            name: "lodash",
            priority: 10,
            enforce: true,
            minChunks:2
          },
          dayjs: {
            test: /node_modules\/dayjs/,
            chunks: "initial",
            name: "dayjs",
            priority: 10,
            enforce: true,
            minChunks:2
          },
          
        }
      }
      };
      return webpackConfig;
    },

    alias: {
      "@": path.resolve("src"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@comp": path.resolve(__dirname, "src/components"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },

    plugins: [
      // 打包分析
        // new BundleAnalyzerPlugin(),
      ...whenProd(
        () => [
          new CompressionWebpackPlugin({
            algorithm: "gzip",
            test: /\.(js|css|html|svg)$/,
            threshold: 1024,
            minRatio: 0.8,
          }),
        ],
        []
      ),
    ],
  },

  style: {
    sass: {
      loaderOptions: {},
    },
  },

  eslint: {
    enable: true,
  }
};
