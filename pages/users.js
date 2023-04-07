import A from '../components/A';
import MainContainer from '../components/MainContainer';

const Users = ({ users }) => {
  return (
    <MainContainer keywords={'users page'}>
      <h1>Список користувачів</h1>
      <ul>
        {users &&
          users.map((user) => {
            return (
              <li key={user.id} className="us">
                <p>{user.id}</p>
                <A href={`/users/${user.id}`} text={user.username} />
              </li>
            );
          })}
      </ul>
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps(context) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  return {
    props: { users },
  };
}
