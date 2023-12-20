import React from 'react';
import TestComponent from './TestComponent';
import './App.css';
// React HooksとuseStateについて学んでいく

// 初めに、App関数を関数宣言からアロー関数に訂正する
const App: React.FC = () => {
  // React.FCはReactの関数コンポーネントを定義するための型であり、FCはFunctional Componentの略
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent text="hello from App" />
        {/* 文字列なので表示される、これがnumber型ならエラーが起こる
        TextCompnent.tsxのPropsの定義のコードを見てみよう、
        text: stringとしっかりstring型に定義してある */}
      </header>
    </div>
  );
};

export default App;
