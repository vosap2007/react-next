import { useRouter } from 'next/router';
import MainContainer from '../../components/MainContainer';
import styles from '../../styles/user.module.scss';

export default function User({ user }) {
  const { query } = useRouter();

  return (
    <MainContainer keywords={user.name}>
      <div className={styles.user}>
        <h1>Користувач {query.id}</h1>
        <p>Name: {user.name}</p>
      </div>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();
  return {
    props: { user },
  };
}
