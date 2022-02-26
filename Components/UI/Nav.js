import classes from './Nav.module.scss';
import sidebarClasses from './Sidebar.module.scss';
import Link from "next/link";
import {useRouter} from "next/router";

export default function Nav(props) {

    const navStyleType = props.navtype;

    const router = useRouter();

    return (
        <nav className={navStyleType === 'sidebar' ? sidebarClasses.Nav : classes.Nav}>
            <ul>
                <li>
                    <Link passHref href={'/'}>
                        <a
                            className={router.pathname === '/' ?
                                navStyleType === 'sidebar' ? sidebarClasses.active : classes.active
                                : null}
                        >
                            <span>00</span>
                            Home
                        </a>
                    </Link>
                </li>
                <li>
                    <Link passHref href={'/Destination'}>
                        <a
                            className={router.pathname === '/Destination' ?
                                navStyleType === 'sidebar' ? sidebarClasses.active : classes.active
                                : null}
                        >
                            <span>01</span>
                            Destination
                        </a>
                    </Link>
                </li>
                <li>
                    <Link passHref href={'/Crew'}>
                        <a
                            className={router.pathname === '/Crew' ?
                                navStyleType === 'sidebar' ? sidebarClasses.active : classes.active
                                : null}
                        >
                            <span>02</span>
                            Crew
                        </a>
                    </Link>
                </li>
                <li>
                    <Link passHref href={'/Technologies'}>
                        <a
                            className={router.pathname === '/Technologies' ?
                                navStyleType === 'sidebar' ? sidebarClasses.active : classes.active
                                : null}
                        >
                            <span>03</span>
                            Technologies
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}