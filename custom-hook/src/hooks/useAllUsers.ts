// 全ユーザー情報を取得するカスタムフック

import { useState } from 'react';

//ローカルからのインポート
import { UserProfile } from '../types/userProfiles';
import axios from 'axios';
import { User } from '../types/api/user';

function useAllUsers() {
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  // ローディングの表示
  const [loading, setLoading] = useState(false); // エラーのフラグなので、初期値はfalse
  // エラーがあるかどうかを判定するstate
  const [error, setError] = useState(false);

  function getUsers() {
    // ローディングは必ず行われるので初期値はtrue
    setLoading(true);
    // エラーは初期値はfalseにする
    setError(false);

    axios
      .get<Array<User>>('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street})`,
        }));
        setUserProfiles(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      }); // finallyはES2018から使えるようになった文法なので、tsconfig.jsonで使えるように設定る
  }
  return { getUsers, userProfiles, loading, error };
}
export default useAllUsers;
