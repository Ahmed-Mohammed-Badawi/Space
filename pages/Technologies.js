import TechnologiesContainer from "../Components/Technologies/Technologies";
import Head from "next/head";
import {Fragment} from "react";

export default function Technologies() {
    return (
        <Fragment>
            <Head>
                <title>Technologies</title>
                <meta name={'description'}
                      content={'Know more about Space technologies, know how we discover the space.'}/>
            </Head>
            <TechnologiesContainer/>
        </Fragment>
    )
}