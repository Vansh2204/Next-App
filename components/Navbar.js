import Link from "next/link";

export default function Navbar(){
    return(  
        <nav>
        <ul className="flex grid-cols-4 gap-4 m-10 justify-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    )
}