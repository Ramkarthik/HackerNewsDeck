import Head from 'next/head'
import Navbar from './navbar'
import Footer from './footer'
function Layout(props) {
    return (
        <div>
            <Head>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.0/css/bulma.css" rel="stylesheet" />
                <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
                <title>HackerNews Deck</title>
                <meta name="description" content="HackerNews Deck is a way to browse HackerNews like TweetDeck" />
                <meta property="og:url" content="https://hackernewsdeck.vercel.app/" />
                <meta property="og:site_name" content="HackerNews Deck" />
                <meta property="og:title" content="HackerNews Deck - Browse HackerNews like TweetDeck" />
                <meta property="og:description" content="HackerNews Deck is a way to browse HackerNews like TweetDeck" />
                <meta property="og:image" content="https://raw.githubusercontent.com/Ramkarthik/HackerNewsDeck/master/images/HNDeck.PNG" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1024" />
                <meta property="og:image:height" content="512" />
                <meta property="twitter:site" content="hndeck" />
                <meta property="twitter:creator" content="ramkarthik" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content="HackerNews Deck - Browse HackerNews like TweetDeck" />
                <meta property="twitter:description" content="HackerNews Deck is a way to browse HackerNews like TweetDeck" />
                <meta property="twitter:image:src" content="https://raw.githubusercontent.com/Ramkarthik/HackerNewsDeck/master/images/HNDeck.PNG" />
                <meta property="twitter:image:width" content="1024" />
                <meta property="twitter:image:height" content="512" />
            </Head>
            <div className="container">
                <Navbar />
                { props.children }
                <Footer />
            </div>
        </div>
   )
}

export default Layout