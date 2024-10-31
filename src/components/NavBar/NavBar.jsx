import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";


import Link from '../Link/Link';
import { useState } from "react";
const NavBar = () => {
const [open, setOpen] =useState(false)
    const routes = [
        { path: '/', name: 'Home', id: 1 },
        { path: '/about', name: 'About', id: 2 },
        { path: '/contact', name: 'Contact', id: 3 },
        { path: '/dashboard', name: 'Dashboard', id: 4 },
        { path: '/login', name: 'Login', id: 5 },
      ];
      


    return (
      
<nav className="text-black  ">
<div className="md:hidden" onClick={()=>setOpen(!open)}>
    {
        open === true? <IoMdClose className="text-xl md:hidden"></IoMdClose>: <AiOutlineMenu className="text-xl md:hidden"></AiOutlineMenu>

    }

</div>

<ul className= {`md:flex absolute duration-1000 md:static
    ${open? 'top-16': '-top-60'}
    bg-yellow-300 px-6`} >
{
    routes.map(route => 
    <Link key={route.id} route={route} ></Link>
  )
}
</ul>
</nav>


    );
};



export default NavBar;