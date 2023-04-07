import Head from 'next/head';
import A from './A';
import styles from '../styles/user.module.scss';

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={`kldjfdkfdkfnvdkfmn` + keywords}></meta>
        <title>Головна сторінка</title>
      </Head>
      <div className={styles.navbar}>
        <A href={'/'} text={'Головна'} />
        <A href={'/users'} text={'Користувачі'} />
      </div>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
