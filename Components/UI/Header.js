//IMPORTS
import classes from './Header.module.scss';
import {useEffect, useState} from "react";
//Components
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import SidebarIcon from "./SidebarIcon";


export default function Header() {
    //Inject in DOM
    const [showSidebar, setShowSidebar] = useState(false);
    //Open Sidebar
    const [SidebarOpen, setSidebarOpen] = useState(false)


    useEffect(() => {
        //Resize function
        function resizeHandler(e) {
            if (e.currentTarget.innerWidth < 769) {
                setShowSidebar(true)
            } else {
                setShowSidebar(false)
            }
        }
        //Add event listener to window on resize
        const ResizeListener = window.addEventListener('resize', resizeHandler);

        //Show or Hide Sidebar
        if (window.innerWidth < 769) {
            setShowSidebar(true)
        } else {
            setShowSidebar(false)
        }
        //remove event when component destroy
        return () => window.removeEventListener('resize', ResizeListener);
    });

    //OPEN SIDEBAR STATE
    function openSidebarHandler() {
        setSidebarOpen(true)
    }

    //CLOSE SIDEBAR STATE
    function closeSidebarHandler() {
        setSidebarOpen(false)
    }

    return (
        <header className={classes.Header}>
            {/*LOGO*/}
            <div className={classes.Logo}>
                <Link passHref href={'/'}>
                    <a><Image src={"/Images/Logo/Logo.svg"} alt='Logo' width={35} height={35}/></a>
                </Link>
            </div>
            {/*LINE*/}
            <div className={classes.Line}> </div>
            {/*NAVBAR*/}
            <Nav/>
            {/*TOGGLE ICON*/}
            <SidebarIcon open={openSidebarHandler} />
            {/*SIDEBAR*/}
            {showSidebar && <Sidebar close={closeSidebarHandler} open={SidebarOpen}/>}
        </header>
    );
}