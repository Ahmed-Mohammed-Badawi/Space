// IMPORTS
import classes from "../styles/Pages/Destination.module.scss";
import "swiper/css";
import "swiper/css/pagination";
// COMPONENTS
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Planet from "../Components/Destination/Planet";
import { Fragment } from "react";
import Head from 'next/head';

export default function Technologies() {
    return (
        <Fragment>
            <Head>
                <title>Destination</title>
                <meta name="description" content="Explore Planets and Imagine the Space" />
                <link rel="canonical" href="https://space-jade.vercel.app/Technologies"/>
            </Head>
            <section className={classes.Destination}>
                <h1 className={classes.Pick}><span>01</span> Pick your destination</h1>
                <Swiper
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                        bulletActiveClass: classes.PaginationActive,
                        modifierClass: "destination-",
                        renderBullet: (index, className) => {
                            const names = ["Moon", "Mars", "EUROPA", "TITAN"];
                            return `<div class="${[
                                className,
                                classes.Pagination,
                            ].join(" ")}">${names[index]}</div>`;
                        },
                    }}
                >
                    <SwiperSlide>
                        <Planet
                            alt='Moon'
                            src='/Images/Destination/image-moon.webp'
                            paragraph='See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.'
                            distance='384,400 km'
                            time='3 days'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Planet
                            alt='MARS'
                            src='/Images/Destination/image-mars.webp'
                            paragraph='Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!'
                            distance='225 MIL. km'
                            time='9 months'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Planet
                            alt='EUROPA'
                            src='/Images/Destination/image-europa.webp'
                            paragraph='The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.'
                            distance='628 MIL. km'
                            time='3 years'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Planet
                            alt='TITAN'
                            src='/Images/Destination/image-mars.webp'
                            paragraph='The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.'
                            distance='1.6 BIL. km'
                            time='7 years'
                        />
                    </SwiperSlide>
                </Swiper>
            </section>
        </Fragment>
    );
}

export async function getStaticProps() {
    return {
        props: {},
        revalidate: 3600,
    };
}
