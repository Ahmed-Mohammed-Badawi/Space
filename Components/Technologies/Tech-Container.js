//IMPORTS
import classes from './Tech-Container.module.scss';
//COMPONENTS
import Image from "next/image";

export default function TechContainer() {
    return(
        <div className={classes.Technology}>
            <div className={classes.Image}>
                <picture>
                    <source media={`(min-width: 992px)`} type="image/webp" srcSet="/Images/Technologies/image-launch-vehicle-portrait.webp" />
                    <img src={'/Images/Technologies/image-launch-vehicle-landscape.webp'} alt={'Vehicle'} />
                </picture>
            </div>
            <div className={classes.Content}>
                <h2 className={classes.Title}>THE TERMINOLOGY…</h2>
                <h3 className={classes.Name}>LAUNCH VEHICLE</h3>
                <p className={classes.Paragraph}>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
            </div>
        </div>
    );
}