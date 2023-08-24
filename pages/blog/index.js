import styles from '../../styles/BlogHome.module.css';
import { getAllPosts } from "../../lib/api";
import Head from 'next/head';
import Link from 'next/link';

export async function getStaticProps() {
    const allPosts = await getAllPosts();

    return {
        props: {
            allPosts: allPosts,
        },
    }
}

export default function BlogHome({ allPosts }) {
    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>

            <main>
                <div className={styles.header}>
                    <h1>This is the blog home page</h1>
                </div>
                <section class={styles.postList}>
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