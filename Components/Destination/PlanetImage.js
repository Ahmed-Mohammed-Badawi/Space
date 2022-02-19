// IMPORTS
import classes from './PlanetImage.module.scss';
// COMPONENTS
import Image from 'next/image'

export default function (props) {
    
    const {alt, src} = props;


    return (
        <section className={classes.Image}>
            <Image alt={alt} src={src} width={445} height={445} />
        </section>
    );
}
