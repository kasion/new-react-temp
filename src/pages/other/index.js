/*
 * @description: 错误页面
 * @Author: Cheng kaixuan
 * @Date: 2023-05-05 16:00:06
 * @LastEditors: Cheng kaixuan
 * @LastEditTime: 2023-05-05 16:23:06
 */
import { useRouteError } from "react-router-dom";
import NoFoundPage from "@pages/other/no-found-page/index";
import ErrorPage from "@pages/other/error-page/index";
import NoAuthorityPage from "@pages/other/no-authority-page/index";

export default function ErrorPageOther() {
  const error = useRouteError();
  console.error(error);
  console.error(error?.status);

  return {
    403: <NoAuthorityPage />,
    404: <NoFoundPage />,
    500: <ErrorPage />,
  }[error?.status];
}
