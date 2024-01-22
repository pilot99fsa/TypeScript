// ローカルからのインポート
import './App.css';
import UserCard from './components/UserCard';
import useAllUsers from './hooks/useAllUsers';

export default function App() {
  // カスタムフックから受け取る値
  const { getUsers, userProfiles, loading, error } = useAllUsers();

  // ユーザー情報を取得するボタンがクリックされたときの処理
  function onClickFetchUser() {
    getUsers();
  }

  return (
    <div className="App">
      {/* データを取得するボタン */}
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {/* 三項演算子を用いて、エラーが存在する場合のUIと、ローディング中のUIを作っていく */}
      {error ? (
        <p style={{ color: 'red' }}>データの取得に失敗しました。</p> // エラーが出てしまった結果。useAllUsers.tsのエンドポイントのURLに末尾に適当な文字を入力してデータ取得してみよう、エラーになる
      ) : loading ? (
        <p>Loading...</p> // エラーが出ずに、ローディングを表す表示
      ) : (
        // エラーも回避し、ロードも無事に終わると、以下のコンポーネント(ユーザー情報のカード)が表示される
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
