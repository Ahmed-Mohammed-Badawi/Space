//IMPORTS
import classes from './Technologies.module.scss';
//COMPONENTS
import TechContainer from "./Tech-Container";

export default function Technologies() {
    return (
        <section className={classes.Technologies}>
            <h1 className={classes.Heading}><span>03</span>SPACE LAUNCH 101</h1>
            <TechContainer />
        </section>
    )
}