import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/BlogHome.module.css';
import { getAllPosts, getPrimaryMenuItems } from "../../lib/api";
import HeaderComponent from '../../components/common/header/header';
import FooterComponent from '../../components/common/footer/footer';

export async function getStaticProps() {
    const allPosts = await getAllPosts();
    const menuItems = await getPrimaryMenuItems();

    return {
        props: {
            allPosts: allPosts,
            menuItems: menuItems,
        },
    }
}

export default function BlogHome({ allPosts, menuItems }) {
    return (
        <>
            <HeaderComponent
                menuItems={menuItems}
            />

            <main>
                <div className={styles.header}>
                    <h1>This is the blog home page</h1>
                </div>
                <section className={styles.postList}>
                    <h2>Our Latest Blogs</h2>
                    <ul>
                        {
                            allPosts.nodes.map((post) => (
                                <li key={post.slug}>
                                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </section>
            </main>
        </>
    );
}