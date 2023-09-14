import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../../styles/TripleCta.module.css';

export default function TripleCtaComponent({ tripleCtaItems }) {
    return (
        <>
            <div class="flex">
                {
                    tripleCtaItems.map((item) => (
                        <div key={item.id} class="w-1/3 h-[350px] flex flex-col justify-center items-center" style={{ backgroundColor:`${item.acfTripleBanner.backgroundColour}`, order:`${item.acfTripleBanner.bannerPosition}`}}>
                            <Link href={item.acfTripleBanner.link.uri} class="flex flex-col items-center">
                                <Image
                                    src={item.acfTripleBanner.icon.mediaItemUrl}
                                    width={item.acfTripleBanner.icon.mediaDetails.width}
                                    height={item.acfTripleBanner.icon.mediaDetails.height}
                                    alt="CTA Logo"
                                />
                                <h2 class="text-2xl text-white font-bold mt-5">{item.acfTripleBanner.title}</h2>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </>
    );
}