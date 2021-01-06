
import { useState, useEffect } from 'react';

// 每一次state改变会触发 整个组件的渲染
export default function Login(props) {

  console.log("开始运行");

  const [userName, setUserName] = useState('')

  // 但是每一次页面渲染不触发useEffect
  // useEffect(() => {
  //   console.log("绑定事件");
  //   return () => {
  //     console.log("解绑事件");
  //   }
  // }, [])

  useEffect(() => {
    console.log("绑定事件");
    return () => {
      console.log("解绑事件", userName);
    }
  }, [userName])

  console.log("一轮结束");

  return (
    <div className="login-div">
      <form>
        <input
          placeholder="请输入用户名"
          name="username"
          value={userName}
          autoComplete="username"
          onChange={(e) => setUserName(e.target.value)}
        />
      </form>
    </div>
  )
}