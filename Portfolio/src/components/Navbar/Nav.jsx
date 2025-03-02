import { useEffect, useState } from "react"
import "./navbar.css"
import { Link } from "react-router-dom"
const Nav = () => {
  
  const [scrollData,setscrollData]= useState({y:0,lastY:1}) 
  // get the postion of the Scroll bar y axis
  const[navBarVisable,setNavbarvisible]=useState(true) 
  // if it ture then show navbr else hide helps tom change the css property

  useEffect(()=>{
    const handelScrolldata=()=>{ 
      //function which will update the scroll movementn and give it to the setscrollData state
      setscrollData(prevState=>{
        return{
          y:window.scrollY,
          lastY:prevState.y
        }
      })
    };
    window.addEventListener('scroll',handelScrolldata);
    return()=>{// cleanup function 
      window.removeEventListener('scroll',handelScrolldata);
    }

  },[])
  
  useEffect(()=>{// over her we will use the conditonal operations and change the navbarvisibe 
    // console.log(scrollData);
    if(scrollData.y >20){
      setNavbarvisible(false)
    }else{
      setNavbarvisible(true)
    }
    if(scrollData.y < scrollData.lastY){
      // here if the last postion of the scroll is larger then hide 
      setNavbarvisible(true)       
       //if the user scroll back to then the the scroll bar will pop u again.
    }
    else{
      setNavbarvisible(false) 
      // and hide if the user scrolls down back again
    }
    
// update evertime the scrollData changes
  },[scrollData])

  return (
    <nav
      className={`navbar ${navBarVisable ? "show" : ""}`}
      dir="ltr"
      style={{ margin: "0px" }}
    >
      {/* here if the navBarViaibe is true then it will activate the show class from the css file else " " */}
      <div className="logo">Ak</div>
      <div className="icons">
        <ul className="flex felx-row justify-between">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav
