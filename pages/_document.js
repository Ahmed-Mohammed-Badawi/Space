import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {


    render() {
        return (
            <Html lang='en'>
                <Head>
                    <title>Explore the Space</title>
                    <meta name={'author'} content={'Ahmed Mohammed'}/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
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