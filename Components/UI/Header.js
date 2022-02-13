//IMPORTS
import classes from './Header.module.scss';
import {useRouter} from "next/router";
//Components
import Link from "next/link";
import Image from "next/image";


export default function Header() {

    const router = useRouter();
    console.log(router)

    return (
        <header className={classes.Header}>
            <div className={classes.Logo}>
                <Link passHref href={'/'}>
                    <a><Image src={"/Images/Logo/Logo.svg"} width={35} height={35}/></a>
                </Link>
            </div>
            <div className={classes.Line}> </div>
            <nav>
                <ul>
                    <li>
                        <Link passHref href={'/'}>
                            <a className={router.pathname === '/'? classes.active : null}><span>00</span>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link passHref href={'/Destination'}>
                            <a className={router.pathname === '/Destination'? classes.active : null}><span>01</span>Destination</a>
                        </Link>
                    </li>
                    <li>
                        <Link passHref href={'/Crew'}>
                            <a className={router.pathname === '/Crew'? classes.active : null}><span>02</span>Crew</a>
                        </Link>
                    </li>
                    <li>
                        <Link passHref href={'/Technologies'}>
                            <a className={router.pathname === '/Technologies'? classes.active : null}><span>03</span>Technologies</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}