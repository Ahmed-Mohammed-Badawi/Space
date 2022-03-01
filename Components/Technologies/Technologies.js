//IMPORTS
import classes from './Technologies.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';
//COMPONENTS
import TechContainer from "./Tech-Container";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";

export default function Technologies() {
    return (
        <section className={classes.Technologies}>
            <h1 className={classes.Heading}><span>03</span>SPACE LAUNCH 101</h1>
            <Swiper
                modules={[Pagination]}
                pagination={{
                    clickable: true,
                    modifierClass: "tech-",
                    renderBullet: (index, className) => {
                        return `<span class="${className}">${index + 1}</span>`
                    },
                }}
            >
                <SwiperSlide>
                    <TechContainer
                        lgImage={'/Images/Technologies/image-launch-vehicle-portrait.webp'}
                        mdImage={'/Images/Technologies/image-launch-vehicle-landscape.webp'}
                        title={'THE TERMINOLOGY…'}
                        name={'LAUNCH VEHICLE'}
                        paragraph={'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\'s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it\'s quite an awe-inspiring sight on the launch pad!'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <TechContainer
                        lgImage={'/Images/Technologies/image-spaceport-portrait.webp'}
                        mdImage={'/Images/Technologies/image-spaceport-landscape.webp'}
                        title={'THE TERMINOLOGY…'}
                        name={'SPACEPORT'}
                        paragraph={'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <TechContainer
                        lgImage={'/Images/Technologies/image-space-capsule-portrait.webp'}
                        mdImage={'/Images/Technologies/image-space-capsule-landscape.webp'}
                        title={'THE TERMINOLOGY…'}
                        name={'SPACE CAPSULE'}
                        paragraph={'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth\'s atmosphere without wings. Our capsule is where you\'ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.'}
                    />
                </SwiperSlide>

            </Swiper>
        </section>
    )
}