import { UserProfile } from '../types/userProfiles';

type Props = {
  user: UserProfile;
};

function UserCard({ user }: Props): JSX.Element {
  return (
    <div>
      <dl>
        <dt>名前</dt>
        <dd></dd>
        <dt>メール</dt>
        <dd></dd>
        <dt>住所</dt>
        <dd></dd>
      </dl>
    </div>
  );
}

export default UserCard;
