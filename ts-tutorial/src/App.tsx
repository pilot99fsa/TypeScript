import React from 'react';
import './App.css';

// letとconstのおさらい
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const name = 'hello';
let nameChange = 'hello';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
nameChange = 'hello2';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let username = 'Hello'; // このコードにマウスをホバーすると情報が見れる。型推論でstring型に定義されている
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let username2: string = 'Hello'; // このようにデータ型を指定できる。アノテーションと呼ぶ

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let dummyNum = 2; // 型推論が効いてnumber型となっている

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let bool = true; // boolean型となっている

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let array1 = [true, false, true]; //俺もboolean型である

// 配列に数字と文字列を混ぜる
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let array2 = [0, 1, 'hello']; // 型推論でstring | numberと表示される。これはstring型もしくはnumber型を持つという意味である

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const name2 = 'hello'; //これをマウスホバーすると型推論でhelloと具体的な文字列になっている。これはリテラル型と呼ばれる。文字列リテラル

interface NAME {
  first: string;
  last: string;
}
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
