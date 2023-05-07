/*
 * @Description: 按钮组件 - 增加防抖
 * @Author: Cheng kaixuan
 * @Date: 2022-03-31 17:00:05
 * @LastEditors: Cheng kaixuan
 * @LastEditTime: 2022-04-25 15:30:07
 */
import _ from "lodash";
import { Button } from "antd";

function ThButton({ ...props }) {
	/**
	 * 点击时进行防抖操作
	 * @param params
	 */
	const handleClick = _.throttle(() => props.onClick(), 1000);

	return (
		<Button {...props} onClick={handleClick}>
			{props.title}
		</Button>
	);
}

export default ThButton;
