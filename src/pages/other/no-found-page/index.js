/*
 * @description: 404不存在界面
 * @Author: Cheng kaixuan
 * @Date: 2022-09-15 09:13:22
 * @LastEditors: Cheng kaixuan
 * @LastEditTime: 2023-05-05 16:26:02
 */
import { Button, Result } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import ThButton from "@comp/button";

function NoFoundPage() {
  const navigate = useNavigate();

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<ThButton title={"返回首页"} onClick={() => navigate("/")} />}
    />
  );
}

export default NoFoundPage;
