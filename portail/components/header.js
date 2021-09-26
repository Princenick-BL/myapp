import React,{useEffect,useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image'

export default function Header() {
    
    const [largeur,setLargeur]=useState()
    
    useEffect(()=>{
        
        setLargeur(window.innerWidth)
        
        const changeWidth =()=>{
            
            setLargeur(window.innerWidth)
            
        }
        
        window.addEventListener('resize',changeWidth);
        
        return()=>{
            
            window.removeEventListener('resize',changeWidth);
            
        }
    },[])
   // console.log(largeur)
   return (
       <div className="Header">
                <>
                        <nav className="mobile-menu">
                            <div className="navicon">
                                <div></div>
                            </div>
                        
                            <a>This was</a>
                            <a>Made using</a>
                            <a>The clip-path property</a>
                            <a>Transition in</a>
                            <a>CSS only</a>
                        
                        </nav>
                    {/* {largeur < 1150 &&
                            
                           
                    } */}
                    <div className="header-logo">
                        
                        <div className="header-logo-img">
                            <Image alt="logo" src="/logo.png" width={40} height={40}/>
                        </div>
                        <div className="header-logo-text">
                            <div className="header-logo-text-top">
                                LA TOTALE
                            </div>
                            <div className="header-logo-text-bottom">by Nick's Corp</div>
                        </div>
                    </div>
                    {largeur > 900 &&

                        <div>
                            <nav className="menu">
                                <ul>
                                    <li><a href="#0">Home</a></li>
                                    <li><a href="#0">About</a></li>
                                    <li>
                                    <a href="#0">Clients</a>
                                    <ul>
                                        <li><a href="#0">Burger King</a></li>
                                        <li><a href="#0">Southwest Airlines</a></li>
                                        <li><a href="#0">Levi Strauss</a></li>
                                    </ul>
                                    </li>
                                    <li>
                                    <a href="#0">Services</a>
                                    <ul>
                                        <li><a href="#0">Print Design</a></li>
                                        <li><a href="#0">Web Design</a></li>
                                        <li><a href="#0">Mobile App Development</a></li>
                                    </ul>
                                    </li>
                                    <li><a href="#0">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    
                    }
                </>
            
        </div>
    )
}

