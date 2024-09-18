import { useEffect, useState } from "react"
import "./navbar.css"
const Nav = () => {
  const[navBarVisable,setNavbarvisible]=useState(false)
  useEffect(()=>{
    const handnavScroll =()=>{
      if(window.scrollY >0){
        setNavbarvisible(true)
      }
      else{
        setNavbarvisible(false)
      }
    };
    window.addEventListener('scroll',handnavScroll);
    return()=>{
      window.removeEventListener('scroll', handnavScroll)
    };

  },[])
  return (
    <nav className={`navbar ${navBarVisable ?'show':'' }`} dir="ltr">
      <div className="logo">Ak</div>
      <div className="icons">
        <ul className="flex felx-row justify-between">
            <li>contact</li>
            <li>maile</li>
        </ul>
      </div>

    </nav>
  )
}

export default Nav
