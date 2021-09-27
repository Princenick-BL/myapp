import React,{useEffect,useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image'

export default function Header() {
    
    const [largeur,setLargeur]=useState()
    const [showSubMenu1,setShowSubmenu1]=useState(false)
    //const [showSubMenu2,setShowSubmenu2]=useState(false)
    
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
                    {largeur < 900 &&
                        <nav className="mobile-menu">
                            <div className="navicon">
                                <div></div>
                            </div>
                            
                            <ul>
                                <li><a href="#0">{"Actualité"}</a></li>
                                    <li>
                                    <a href="#0" onClick={()=>{setShowSubmenu1(!showSubMenu1)}}>{"Tech"}</a>
                                    {showSubMenu1 &&
                                        <ul>
                                            <li><a href="#0">Android</a></li>
                                            <li><a href="#0">Apple</a></li>
                                            <li><a href="#0">Window</a></li>
                                        </ul>

                                    }
                                    </li>
                                    <li><a href="#0">Crypto</a></li>

                                    <li>
                                    <a href="#0">{"Start With"}</a>
                                   
                                </li>

                            </ul>
                        
                        </nav>            
                    }
                    <div className="header-logo">
                        
                        <div className="header-logo-img">
                            <Image alt="logo" src="/logo.png" width={40} height={40}/>
                        </div>
                        <div className="header-logo-text">
                            <div className="header-logo-text-top">
                                LA TOTALE
                            </div>
                            <div className="header-logo-text-bottom">{"by Nick's Corp"}</div>
                        </div>
                    </div>
                    {largeur > 900 &&

                        <div>
                            <nav className="menu">
                                <ul>
                                    <li><a href="#0">{"Actualité"}</a></li>
                                    <li>
                                    <a href="#0">{"Tech"}</a>
                                    <ul>
                                        <li><a href="#0">Android</a></li>
                                        <li><a href="#0">Apple</a></li>
                                        <li><a href="#0">Windows</a></li>
                                    </ul>
                                    </li>
                                    <li><a href="#0">Crypto</a></li>

                                    <li><a href="#0">{"Start With"}</a></li>
                                </ul>
                            </nav>
                        </div>
                    
                    }
                </>
            
        </div>
    )
}

