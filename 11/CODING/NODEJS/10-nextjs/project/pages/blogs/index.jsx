import styles from "../../styles/Blogs.module.css"
import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    return {
      props: { users: data }
    }
  }

const Blogs = ({ users }) => {
    return ( 
        <section className="blog">
            <h1>Blogs</h1>

            {users?.map(user => (
                <Link href={'/blogs/' + user.id} key={user.id} className={styles.single}>
                    <h3>{ user.name }</h3>
                </Link>
            ))}
        </section>
     );
}
 
export default Blogs;