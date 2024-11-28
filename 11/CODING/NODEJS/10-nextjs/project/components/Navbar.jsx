import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                {/* <h1>Next JS 🍣</h1> */}
                <Image src="/next.jpg" alt="site logo" width={128} height={77}></Image>
            </div>
            <Link href="/">Home</Link>
            <Link href="/blogs">Blog</Link>
            <Link href="/books">Book</Link>
            <Link href="/about">About</Link>
        </nav>
     );
}
 
export default Navbar;