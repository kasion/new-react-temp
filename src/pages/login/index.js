import { useSelector, useStore } from "react-redux";

const Login = (props) => {
  const store = useStore();
  console.log(store.getState());
  const user = useSelector((state) => state.user.userInfo);
  return <h1>{user?.name}</h1>;
};

export default Login;
