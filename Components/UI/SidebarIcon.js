import classes from './SidebarIcon.module.scss'

export default function SidebarIcon(props){
    return(
        <div onClick={props.open} className={classes.ToggleIcon}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}