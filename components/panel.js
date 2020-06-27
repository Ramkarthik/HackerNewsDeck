
import Card from './card'

class Panel extends React.Component {
    constructor() {
        super()
        this.state = {
            stories: []
        }
    }
    async componentDidMount(){
        let s = []

        this.props.data.data.map(p =>{
            s.push({id: p, story: []})
        })
        this.props.data.data.map(p => {
            getData(p).then(story => {
                s.find((o, i) => {
                    if (o.id === p) {
                        s[i] = { id: p, story: story };
                    }
                });
                this.setState({stories: s})
            })    
        })
        
    }
    render() {
        
        return (
            <article className="panel is-danger">
                <p className="panel-heading" style={{backgroundColor: "#ffe8e2", color: "#212121"}}>
                    {this.props.data.title}
                </p>
                {
                    this.state.stories.map(s =>{
                        return <Card key={s.id} data={s.story} />
                    })
                }
            </article>
            
        )

    }
}

async function getData(d){
    const u = 'https://hacker-news.firebaseio.com/v0/item/'+d+'.json';
    const story = await (await fetch(u)).json()
    return story
}

export default Panel