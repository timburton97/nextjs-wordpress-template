import Head from 'next/head';
import Link from 'next/link';
import styles from '../../../styles/Header.module.css';

export default function HeaderComponent({ menuItems }) {    
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
            </Head>

            <header>
            <div class={styles.headerContainer}>
                {   
                    menuItems.map((item) => (
                        <div class={styles.headerItem} key={item.label}>
                            <Link href={item.path}>{item.label}</Link>
                        </div>
                    ))
                }
            </div>
            </header>
        </>
    );
}