//IMPORTS
import classes from './Sidebar.module.scss';
//Components
import Nav from "./Nav";

export default function Sidebar(props) {
    return (
        <aside style={{right: props.open ? '0' : '-28rem'}} className={classes.Sidebar}>
            <div onClick={props.close} className={classes.CloseIcon}>
                <span></span>
                <span></span>
            </div>
            <Nav navtype={'sidebar'} />
        </aside>
    );
}