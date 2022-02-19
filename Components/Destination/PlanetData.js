import classes from './PlanetData.module.scss';

export default function PlanetData(props){

    const {title, paragraph, Distance, time} = props;


    return(
        <article className={classes.PlanetData}>
            <h2>{title}</h2>
            <p>{paragraph}</p>
            <div className={classes.Container}>
                <div>
                    <h3>AVG. DISTANCE</h3>
                    <p>{Distance}</p>
                </div>
                <div>
                    <h3>Est. travel time</h3>
                    <time>{time}</time>
                </div>
            </div>
        </article>
    )
}