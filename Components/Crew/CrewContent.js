// IMPORTS
import classes from "./CrewContent.module.scss";
// COMPONENTS

export default function CrewContent(props) {
    const { title, name, paragraph } = props;

    return (
        <section className={classes.Content}>
            <h3>
                <span>{title}</span>
                <span>{name}</span>
            </h3>
            <p>{paragraph}</p>
        </section>
    );
}
