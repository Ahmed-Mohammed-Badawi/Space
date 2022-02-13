//Imports
import classes from '../styles/Pages/Home.module.scss';
//Components
import Header from "../Components/UI/Header";
import HomeMain from "../Components/Home/HomeMain";

export default function Home() {
    return (
        <section className={classes.Home}>
            <Header />
            <HomeMain />
        </section>
    )
}
