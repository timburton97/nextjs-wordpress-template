import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../../styles/Header.module.css';

export default function HeaderComponent({ menuItems, headerImage, title }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
            </Head>

            <header>
                <div class="flex flex-row bg-gray-900 justify-center">
                    {   
                        menuItems.map((item) => (
                            <div class="rounded-lg h-16 justify-center justify-items-center text-white" key={item.label}>
                                <Link href={item.path}>{item.label}</Link>
                            </div>
                        ))
                    }
                </div>
                <div class={styles.headerContainer} style={{ backgroundImage:`url(${headerImage ? headerImage.mediaItemUrl : "/placeholder.png"})`}}>
                    <h1 class="text-4xl">{title}</h1>
                </div>
                
                
            </header>
        </>
    );
}