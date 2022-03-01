//IMPORTS
import classes from './Tech-Container.module.scss';
//COMPONENTS

export default function TechContainer(props) {

    const {lgImage, mdImage, title, name, paragraph} = props;


    return(
        <div className={classes.Technology}>
            <div className={classes.Image}>
                <picture>
                    <source media={`(min-width: 992px)`} type="image/webp" srcSet={lgImage} />
                    <img src={mdImage} alt={'Vehicle'} />
                </picture>
            </div>
            <div className={classes.Content}>
                <h2 className={classes.Title}>{title}</h2>
                <h3 className={classes.Name}>{name}</h3>
                <p className={classes.Paragraph}>{paragraph}</p>
            </div>
        </div>
    );
}