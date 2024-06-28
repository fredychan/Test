import Link from "next/link";
export default function Home(){
    return (
        <div>
            <h1>welcome home!new</h1>
            <Link href="/blog">Blog</Link>
            <Link href="/products">Product</Link>
        </div>
        
    )

}
