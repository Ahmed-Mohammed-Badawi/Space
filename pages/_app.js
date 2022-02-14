import '../styles/global.scss'
import Layout from "../Components/UI/Layout";

function MyApp({Component, pageProps}) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
