import React from 'react';
import './App.css';

/* eslint-disable */
// create-react-app
// ここに型の種類等についてメモしていく

// letとconstのおさらい
const name = 'hello';
let nameChange = 'hello';

nameChange = 'hello2';

let username = 'Hello'; // このコードにマウスをホバーすると情報が見れる。型推論でstring型に定義されている

let username2: string = 'Hello'; // このようにデータ型を指定できる。アノテーションと呼ぶ

let dummyNum = 2; // 型推論が効いてnumber型となっている

let bool = true; // boolean型となっている

let array1 = [true, false, true]; //俺もboolean型である

// 配列に数字と文字列を混ぜる

let array2 = [0, 1, 'hello']; // 型推論でstring | numberと表示される。これはstring型もしくはnumber型を持つという意味である

const name2 = 'hello'; //これをマウスホバーすると型推論でhelloと具体的な文字列になっている。これはリテラル型 Literal typesと呼ばれる。文字列リテラル

interface NAME {
  //オブジェクトの方の定義にはinterfaceを用いる
  first: string;
  last: string | null; // nullも受け取れるようにしている
}

let nameObj: NAME = { first: 'Yamada', last: 'Taro' };
// nameObjにホバーするとNAMEの型推論になっていることがわかる
// また、lastはstring型以外にもnullも受け取れるようになっている

interface NAME2 {
  //オブジェクトの方の定義にはinterfaceを用いる
  first: string;
  last?: string; //よく見るとlastに?がついている
}

let nameObj2: NAME2 = { first: 'Yamada' };
// NAME2を定義する際にlastに?をつけた。これにより、nameObj2に第2引数を渡さなくてもエラーが起こらない

const func1 = (x: number, y: number) => {
  return x + y;
};
// func1にホバーすると、関数の返り値がnumber型になっていることがわかる、型推論が効いている
// 明示的に返り値の方を方を決めたい場合は、引数を入れる()に:を記述して、指定したい型名を書く

/////////////////////////////////////////////////

// Intersection Types
// 複数のtypeを結合する処理のこと

type PROFILE = {
  age: number;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
};
//これら２つのオブジェクトの型を結合していく。結合する型をIntersection Typesと呼ぶ

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 30,
  city: 'Tokyo',
  username: 'xxx',
  password: 'yyy',
};

/////////////////////////////////////////////////////

// Union types

let value: boolean | number; // valueにbooleanとnumberしか代入できないようにしている。論理和(バーティカルバーのこと)で繋げていくことで複数の型を指定できる

value = true; // もちろん問題ない
// value = 'hello'; // エラーが起こる

// このように変数が受け取れるデータを制限するのがunion typesである

// 配列にもunion typesは使える

let arrayUni: (number | string)[];
arrayUni = [0, 1, 2, 3, 4, 'Hello']; //１つ上のコードでnumber型とstring型を指定しているのでエラーは起こらない
// 試しにtrueを足すとエラーが起こる
// このように配列にもunion typesは使える

///////////////////////////////////////////////////

// Union typeと Literal typesを組み合わせる

let company: 'Facebook' | 'Google' | 'Amazon';
company = 'Amazon'; // エラーは起こらない
// company = 'Apple'; // エラー!

let memory: 256 | 512;
// memory = 12; エラー!
memory = 256; // エラーは起こらない

/////////////////////////////////////////////////////

// typeof
// 宣言済みの変数の型を取得する

let msg: string = 'Hi';
let msg2: typeof msg; // msgの型を取得している。msg2にホバーするとstring型になっていることがわかる
msg2 = 'Hello';
// msg2 = 1; エラー！

// オブジェクトの方にも適用できる

let animal = { cat: 'small cat' }; //型推論が効いて、catはstringとなっている
let newAnimal: typeof animal = { cat: 'big cat' }; //エラーは起こらない。catはstring型であるという情報を継承している

///////////////////////////////////////////////////////

// keyof

type KEYS = {
  praimary: string;
  secondary: string;
};

let key: keyof KEYS; // KEYSにホバーすると、データの型に primaryかsecondaryのみをkeyという変数は受け付けることが分かる
key = 'praimary'; //keyに何か代入しようとしてもprimaryかsecondaryしか受け付けない

// typeofとkeyofの併用

const SPORTS = {
  soccer: 'Soccer',
  baseball: 'Baseball',
};

let keySports: keyof typeof SPORTS; // typeofでSPORTSが持つデータ型を継承している
// keySportsに何か代入しようとしてもSPORTSから属性を取り出してUnion typeにしている。
//"soccer"か"baseball"しか受け付けない(エラーを吐く)
keySports = 'soccer';
keySports = 'baseball';
// keySports = soccer; エラー
// keySports = 'Soccer'; エラー

/////////////////////////////////////////////

// enum(列挙型)

enum OS {
  Windows,
  Mac,
  Linux,
} // このように記述すると自動で連番(0~2)が作られる

//この機能の使い方

//まずPCのオブジェクトを作る。id(数字型)とOSTypeを作り、OSTypeに上で作ったOSを割り当てる
interface PC {
  id: number;
  OSType: OS;
}

const PC1: PC = {
  id: 1,
  OSType: OS.Windows,
};

const PC2: PC = {
  id: 2,
  OSType: OS.Mac, // Macにホバーすると、idに2を指定したにも関わらず、実際は1が割り当てられている。
};

// enum(列挙型)を使うことで手動でid番号といった数字を呼び出すよりもenumで呼び出す方がバグを防ぎやすく、メンテナンス性も向上する

//////////////////////////////////////////////////////////////////////////

/* eslint-disable */
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
