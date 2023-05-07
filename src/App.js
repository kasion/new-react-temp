/*
 * @description: 描述信息
 * @Author: Cheng kaixuan
 * @Date: 2023-05-04 16:27:53
 * @LastEditors: Cheng kaixuan
 * @LastEditTime: 2023-05-05 16:59:20
 */
// import logo from "./logo.svg";
import Routes from "@routes/index";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { setUserInfo } from "./redux/slices/userSlices";
import Login from "@pages/login/index";
import { DatePicker, Button } from "antd";
const { RangePicker } = DatePicker;

function App() {
  const userInfo = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(setUserInfo({ name: "你是谁？" }));
  };

  return (
    <Routes />
    // <div className="App">
    //   <RangePicker showTime />
    //   <Button type="primary">Button</Button>
    //   <h1>{userInfo?.name}</h1>
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <button onClick={onClick}>测试</button>
    //   </header>
    //   <Login />
    // </div>
  );
}

export default App;
