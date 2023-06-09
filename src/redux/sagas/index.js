/*
 * @description: saga中间件
 * @Author: Cheng kaixuan
 * @Date: 2023-05-04 17:11:34
 * @LastEditors: Cheng kaixuan
 * @LastEditTime: 2023-05-04 17:21:48
 */
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { testApi } from "../../services/index";

// worker Saga : 将在 USER_FETCH_REQUESTED action 被 dispatch 时调用
function* fetchUser(action) {
  try {
    const user = yield call(testApi, action.payload.userId);
    yield put({ type: "USER_FETCH_SUCCEEDED", user: user });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

/*
  在每个 `USER_FETCH_REQUESTED` action 被 dispatch 时调用 fetchUser
  允许并发（译注：即同时处理多个相同的 action）
*/
function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

/*
  也可以使用 takeLatest

  不允许并发，dispatch 一个 `USER_FETCH_REQUESTED` action 时，
  如果在这之前已经有一个 `USER_FETCH_REQUESTED` action 在处理中，
  那么处理中的 action 会被取消，只会执行当前的
*/
export function* mySaga2() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}

export default mySaga;
