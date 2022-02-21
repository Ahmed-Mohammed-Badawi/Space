// IMPORTS
import classes from '../styles/Pages/Crew.module.scss';
// COMPONENTS
import CrewContainer from '../Components/Crew/CrewContainer';


export default function Technologies() {
    return(
        <section className={classes.Crew}>
            <p className={classes.Meet}><span>02</span>Meet Your Crew</p>
            <CrewContainer />
        </section>
    )
}