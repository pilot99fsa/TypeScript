// ローカルからのインポート
import './App.css';
import UserCard from './components/UserCard';
import useAllUsers from './hooks/useAllUsers';

export default function App() {
  // カスタムフックと受け取る値
  const { getUsers, userProfiles, loading, error } = useAllUsers();

  function onClickFetchUser() {
    getUsers();
  }

  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {/* 三項演算子を用いて、エラーが存在する場合の表示を作っていく */}
      {error ? (
        <p style={{ color: 'red' }}>データの取得に失敗しました。</p> // エラーが出てしまった結果。22行目のnエンドポイントのURLに末尾に適当な文字を入力してデータ取得してみよう、エラーになる
      ) : loading ? (
        <p>Loading...</p> // エラーが出ずに、ローディングを表す表示
      ) : (
        <>
          {' '}
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} /> // エラーも回避し、ロードも無事に終わると、カードが表示される
          ))}
        </>
      )}
    </div>
  );
}
