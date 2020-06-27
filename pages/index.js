import Layout from '../components/layout';
import Column from '../components/column';

function Index(props) {
   
    const frontpage = props.frontpage.slice(0,10)
    const showhn = props.showhn.slice(0,10)
    const askhn = props.askhn.slice(0,10)
   
    return (
        <div>
            <Layout>
                <div className="container">
                    <div className="columns">
                        <Column title="front page" data={frontpage} />
                        <Column title="show hn" data={showhn} />
                        <Column title="ask hn" data={askhn} />
                    </div>
                </div>
            </Layout>
        </div>
    )
} 

Index.getInitialProps = async function(){
    const fp = await (await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')).json()
    const sh = await (await fetch('https://hacker-news.firebaseio.com/v0/showstories.json')).json()
    const ah = await (await fetch('https://hacker-news.firebaseio.com/v0/askstories.json')).json()

    return {
        frontpage: fp,
        showhn: sh,
        askhn: ah
    }
}

export default Index