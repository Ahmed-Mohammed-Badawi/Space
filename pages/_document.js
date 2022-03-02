import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {


    render() {
        return (
            <Html lang='en'>
                <Head>
                    <meta name={'author'} content={'Ahmed Mohammed'}/>
                    <link rel="icon" href="/Images/Logo/Logo.svg" type="image/x-icon" />
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument;