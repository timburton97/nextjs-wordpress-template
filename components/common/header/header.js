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
                <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100;0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;0,9..40,900;0,9..40,1000;1,9..40,100;1,9..40,200;1,9..40,300;1,9..40,400;1,9..40,500;1,9..40,600;1,9..40,700;1,9..40,800;1,9..40,900;1,9..40,1000&family=Montserrat:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
            </Head>

            <header className="absolute top-0 w-full flex flex-row z-100 justify-between px-20 py-10 items-center">
                <div className="relative z-1000">
                    <Image
                        src='/header-logo.svg'
                        width={350}
                        height={112}
                        alt="Header Logo"
                    />
                </div>
                <div className="flex justify-end items-center">
                    <div className="w-full flex flex-row bg-transparent justify-items-center">
                        
                        {   
                            menuItems.map((item) => (
                                <div className="flex text-white hover:text-[#8DC63F] duration-300 flex-grow" key={item.label}>
                                    <Link className="flex justify-center items-center p-4 h-full w-full text-xl" href={item.path}>{item.label}</Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex w-52 justify-between">
                        <div className="flex w-[46px] h-[46px] border-2 border-white rounded-full align-center justify-center">
                            <Image 
                                src='/icon-linkedin.svg'
                                width={15.144}
                                height={14.161}
                                alt="Footer LinkedIn Icon"
                            />
                        </div>

                        <div className="flex w-[46px] h-[46px] border-2 border-white rounded-full align-center justify-center">
                            <Image 
                                src='/icon-phone.svg'
                                width={16.792}
                                height={17.108}
                                alt="Footer Phone Icon"
                            />
                        </div>

                        <div className="flex w-[46px] h-[46px] border-2 border-white rounded-full align-center justify-center">
                            <Image 
                                src='/icon-email.svg'
                                width={17.512}
                                height={12.687}
                                alt="Footer Email Icon"
                            />
                        </div>
                    </div>
                </div>
                
            </header>
            <div className={styles.headerContainer} style={{ backgroundImage:`url(${headerImage ? headerImage.mediaItemUrl : "/placeholder.png"})`}}>
                <h1 className="text-8xl text-center normal-case flex flex-col">{title}</h1>
            </div>
        </>
    );
}