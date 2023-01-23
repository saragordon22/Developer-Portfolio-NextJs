import React from "react";
import Link from "next/link";

function Navbar() {
  return (
   
    <ul className="nav-link">
      <li>
      <Link href="/about">HOME</Link>
      </li>
      <li>
      <Link href="/projects">PROJECTS</Link>
      </li>
      <li>
      <Link href="/contact">CONTACT</Link>
      </li>
    
      <style jsx>{`
    
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: bisque;
        colour: white;
      }
      
      li {
        float: left;
        margin-right: 20px;
        colour: white;
      }

     li:hover {
      colour:white;
     }
      
    .nav-link {
        color: white;
        text-decoration: none;
        padding: 14px;

      }

     `}</style>

</ul>
    
  );
}

export default Navbar;