import clientPromise from '../../lib/mongodb';
import Link from 'next/link';

export async function getStaticProps() {
  const client = await clientPromise;
  const db = client.db('bookstore');
  const books = await db.collection('books')
                        .find({})
                        .toArray();

  return {
    props: {
      books: JSON.parse(JSON.stringify(books)),
    },
    revalidate: 10,
  };
}


const Books = ( {books} ) => {
    return ( 
    <>
        <section className="blog">
            <h1>Books</h1>
            <ul>
                {books.map((book) => (
                <li key={book._id}>
                    <Link href={`/books/${book._id}`}>{book.title}</Link>
                </li>
                ))}
            </ul>
        </section>
    </> );
}
 
export default Books;