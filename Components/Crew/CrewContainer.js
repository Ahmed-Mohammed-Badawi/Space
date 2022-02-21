// IMPORTS
import classes from './CrewContainer.module.scss';
// COMPONENTS
import CrewImage from "./CrewImage";
import CrewContent from "./CrewContent";


export default function CrewContainer(){
    return(
        <section className={classes.Crew}>
            <CrewImage image={'/Images/Crew/image-douglas-hurley.webp'} />
            <CrewContent title={'Commander '} name={"Douglas Hurley"} paragraph={'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'} />
        </section>
    );
}