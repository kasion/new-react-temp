/*
 * @description: 描述信息
 * @Author: Cheng kaixuan
 * @Date: 2023-05-04 16:27:53
 * @LastEditors: Cheng kaixuan
 * @LastEditTime: 2023-05-05 15:03:09
 */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import "antd/dist/reset.css";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
dayjs.locale("zh-cn");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ConfigProvider
        locale={zhCN}
        theme={{
          token: {
            colorPrimary: "#00b96b",
          },
        }}
      >
        <App />
      </ConfigProvider>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
