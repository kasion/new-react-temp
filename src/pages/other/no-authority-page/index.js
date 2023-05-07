/*
 * @description: 403无权限访问界面
 * @Author: Cheng kaixuan
 * @Date: 2022-09-15 09:13:22
 * @LastEditors: Cheng kaixuan
 * @LastEditTime: 2023-05-05 16:25:27
 */
import { useNavigate } from "react-router-dom";
import { Button, Result } from "antd";
import React from "react";
import ThButton from "@comp/button";

function NoAuthorityPage() {
  const navigate = useNavigate();

  return (
    <Result
      status="403"
      title="403"
      subTitle="抱歉, 您没有权限访问该界面"
      extra={<ThButton title={"返回首页"} onClick={() => navigate("/")} />}
    />
  );
}

export default NoAuthorityPage;
