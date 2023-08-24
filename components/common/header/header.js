import Head from 'next/head';
import Link from 'next/link';
import styles from '../../../styles/Header.module.css';

export default function HeaderComponent({ menuItems }) {    
    return (
        <header>
            <h2>I am the header component</h2>
            <ul>
                {   
                    menuItems.map((item) => (
                        <li key={item.label}>
                            <Link href={item.path}>{item.label}</Link>
                        </li>
                    ))
                }
            </ul>
        </header>
    );
}