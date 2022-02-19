// IMPORTS
import classes from './Planet.module.scss'
// COMPONENTS
import PlanetImage from "./PlanetImage"
import PlanetData from "./PlanetData"

export default function Planet(props){

    const {alt, src, paragraph, distance, time} = props

    return(
        <section className={classes.Planet}>
            <p className={classes.Pick}><span>01</span> Pick your destination</p>
            <PlanetImage 
                alt={alt}
                src={src}
            />
            <PlanetData 
                title={alt}
                paragraph={paragraph}
                Distance={distance}
                time={time}
            />
        </section>
    )
}