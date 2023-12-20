import React, { useState } from 'react';

/* eslint-disable */

// Propsの定義を行う
interface Props {
  text: string;
}
interface UserData {
  id: number;
  name: string;
}
const TestComponent: React.FC<Props> = (props) => {
  const [conut, setCount] = useState<number | null>(null);
  const [user, setUser] = useState<UserData>({ id: 1, name: 'Jackson' });
  // イベントハンドラーの実装
  const [inputData, setInputData] = useState(''); // 空文字で初期化

  //クリックイベントであるhandleInputChangeの定義
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value); //setInputDateに格納されるのはブラウザのinputボックスにユーザーが入力した情報
  }; // 引数の型は、 27行目のおnChangeをホバーして出てくるeventオブジェクトの型情報をコピペすると良い
  /* eslint-disable */

  return (
    <div>
      <h1>{props.text}</h1>
      <h1>{conut}</h1>
      <input type="text" value={inputData} onChange={handleInputChange} />
      {/* クリックでhandleInputChangeという関数が呼ばれるようにする */}
      <h1>{inputData}</h1>
      {/* ブラウザにinputDateが表示されるようにする */}
    </div>
  );
};

export default TestComponent;

// npm startでreact appを起動してみよう、入力フォームに適当な文字を入れると、その真下に連動して入力した文字が表示されるのがわかるだろう
// フォームに何か入力される度に、handleChangeInputが呼び出される
