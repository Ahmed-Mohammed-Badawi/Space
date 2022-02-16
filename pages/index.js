//Imports
import classes from '../styles/Pages/Home.module.scss';
//Components
import Head from 'next/head'
import HomeMain from "../Components/Home/HomeMain";


export default function Home() {

    return (
        <section className={classes.Home}>
            <Head>
                <title>Home</title>
                <meta name='description' content='Explore the Space and learn amazing things like planets, technologies, and many more' />
            </Head>
            <HomeMain/>
        </section>
    )
}


export async function getStaticProps() {

    return{
        props:{

        },
        revalidate: 1000
    }
}
