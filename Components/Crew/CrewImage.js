// IMPORTS
import classes from './CrewImage.module.scss';
// COMPONENTS
import Image from 'next/image';


export default function CrewImage(props){

    const {image} = props;

    return(
        <div className={classes.Image}>
            <Image src={image} width={568} height={712} />
        </div>
    );
}