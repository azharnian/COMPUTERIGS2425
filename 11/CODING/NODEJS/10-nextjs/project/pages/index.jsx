import Head from 'next/head';
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
    <Head>
        <title>Next Blog | Home</title>
        <meta name="keywords" content="blogs"/>
    </Head>
    <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis ab suscipit tempore aliquam, sint modi tenetur perspiciatis, odit laborum mollitia eaque maiores quae? Voluptatum explicabo natus officiis eaque accusantium, omnis eligendi unde error rerum, atque dolorem, dolorum repudiandae animi. Odit est ratione at in nesciunt molestiae nulla voluptatibus culpa accusamus.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore accusamus, ullam architecto, nihil, esse eos ea adipisci temporibus reprehenderit blanditiis eveniet quisquam vitae necessitatibus! Impedit distinctio necessitatibus unde repellendus. Aperiam.</p>
        <Link href="/blogs/" className={styles.btn}>
          See More
        </Link>
    </div>
    </>
  );
}
