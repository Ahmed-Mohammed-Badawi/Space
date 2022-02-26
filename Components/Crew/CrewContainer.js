// IMPORTS
import classes from './CrewContainer.module.scss';
// COMPONENTS
import CrewImage from "./CrewImage";
import CrewContent from "./CrewContent";


export default function CrewContainer(props){


    const {image, title, name, paragraph} = props;

    return(
        <section className={classes.Crew}>
            <CrewImage image={image} />
            <CrewContent title={title} name={name} paragraph={paragraph} />
        </section>
    );
}