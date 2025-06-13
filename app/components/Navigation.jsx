import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2">
        <div>mylogo</div>
        <div>
          <ul className="flex gap-6 justify-end">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
