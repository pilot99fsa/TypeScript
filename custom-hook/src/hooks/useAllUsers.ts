// 全ユーザー情報を取得するカスタムフック

import { useState } from 'react';

//ローカルからのインポート
import { UserProfile } from '../types/userProfiles';
import axios from 'axios';
import { User } from '../types/api/user';

// カスタムフックを定義していく
function useAllUsers() {
  // ユーザープロファイルの配列とその更新関数を取得するための useState フック
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  // APIからデータを取得中かどうかを示すためのローディング状態とその更新関数
  const [loading, setLoading] = useState(false);
  // エラーがあるかどうかを判定するstate
  const [error, setError] = useState(false); // エラーのフラグなので、初期値はfalse

  function getUsers() {
    // ローディングは必ず行われるので初期値はtrue
    setLoading(true);
    // エラーは初期値はfalseにする
    setError(false);

    axios // axiosでAPIからデータを取得
      .get<Array<User>>('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        // 取得したデータをmap関数で展開し、userPlofileの状態をuseStateで更新する
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street})`,
        }));
        setUserProfiles(data);
      })
      .catch(() => {
        setError(true); // エラーが発生したらtrueに設定する
      })
      .finally(() => {
        setLoading(false); // ローディング状態を終了
      }); // finallyはES2018から使えるようになった文法なので、tsconfig.jsonで使えるように設定る
  }
  // 呼び出し元(関数の実行元)にユーザー情報取得関数、ユーザープロファイル、ローディング状態、エラー状態を返す
  return { getUsers, userProfiles, loading, error };
}

// カスタムフックを他のTSファイルでも使えるようにエクスポートする
export default useAllUsers;
