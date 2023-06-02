import Head from "next/head";
import styles from '../styles/MainLayout.module.css'
import logo from '../public/header/logo.svg'

const MainLayout = ({children}) => {
  return (
    <>
      <Head>
        <meta keywords="cars, maximum"/>
        <title>Максимум</title>
      </Head>
      <div className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.logo__img}>
            <img src="/header/logo.svg" alt="Logo Img"/>
          </div>
          <div className={styles.logo__line}>
            <img src="/header/line.svg" alt="Logo Img"/>
          </div>
          <div className={styles.logo__item}>
            Официальный дилер Максимум
          </div>
        </div>
      </div>
      <div>{children}</div>
    </>
  );
};

export default MainLayout;