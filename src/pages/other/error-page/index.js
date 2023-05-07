/*
 * @description: 500错误页面
 * @Author: Cheng kaixuan
 * @Date: 2022-09-15 09:13:22
 * @LastEditors: Cheng kaixuan
 * @LastEditTime: 2022-09-15 10:19:14
 */
import { useNavigate } from "react-router-dom";
import { Button, Result } from "antd";
import React from "react";
import ThButton from "@comp/button";

function ErrorPage() {
	const navigate = useNavigate();

	return <Result status="500" title="500" subTitle="抱歉，服务器出错了，请联系管理员" extra={<ThButton title={"返回首页"} onClick={() => navigate("/")} />} />;
}

export default ErrorPage;
