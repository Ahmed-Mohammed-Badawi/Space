// IMPORTS
import classes from "../styles/Pages/Crew.module.scss";
import "swiper/css";
import 'swiper/css/pagination';
// COMPONENTS
import CrewContainer from "../Components/Crew/CrewContainer";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";
import {Fragment} from "react";
import Head from "next/head";

export default function Technologies() {

    return (
        <Fragment>
            <Head>
                <title>Crew</title>
                <meta name={'description'}
                      content={'Want to know more about the space explorers ? => It\'s time to Know more about Our Crew'}/>
            </Head>
            <section className={classes.Crew}>
                <h1 className={classes.Meet}>
                    <span>02</span>Meet Your Crew
                </h1>
                <Swiper
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                        modifierClass: "crew-"
                    }}
                >
                    <SwiperSlide>
                        <CrewContainer
                            image={"/Images/Crew/image-douglas-hurley.webp"}
                            title={"Commander "}
                            name={"Douglas Hurley"}
                            paragraph={
                                "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CrewContainer
                            image={"/Images/Crew/image-mark-shuttleworth.webp"}
                            title={"Mission Specialist"}
                            name={"MARK SHUTTLEWORTH"}
                            paragraph={
                                "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CrewContainer
                            image={"/Images/Crew/image-victor-glover.webp"}
                            title={"PILOT"}
                            name={"Victor Glover"}
                            paragraph={
                                "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CrewContainer
                            image={"/Images/Crew/image-anousheh-ansari.webp"}
                            title={"Flight Engineer"}
                            name={"Anousheh Ansari"}
                            paragraph={
                                "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "
                            }
                        />
                    </SwiperSlide>
                </Swiper>
            </section>
        </Fragment>
    );
}
