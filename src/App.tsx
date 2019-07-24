import React, { FC } from 'react';
import './App.css';
import Form from './container/Form'
import moment from "moment";
import 'antd/dist/antd.css'
// 推荐在入口文件全局设置 locale
import "moment/locale/zh-cn";
moment.locale("zh-cn");

const App:FC =()=> {
  return (
    <div className="App">
      <header className="App-header">
      <Form />
      </header>
    </div>
  );
}

export default App;
