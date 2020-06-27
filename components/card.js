function Card(props){
    return (
        <div>
        <div>
            <a target="_blank" href={props.cTitle == "Ask HN" ? "https://news.ycombinator.com/item?id=" + props.data.id : props.data.url} className="panel-block">
                {props.data.title}
            </a>
        </div>
        <div className="has-text-right">
            <a target="_blank" href={"https://news.ycombinator.com/item?id=" + props.data.id}>
            <span className="icon has-text-grey is-right">
                    <i className="fa fa-comment" aria-hidden="true"></i>
                </span>
            </a>
            <a target="_blank" href={"https://twitter.com/intent/tweet?text=" + (props.cTitle == "Ask HN" ? "https://news.ycombinator.com/item?id=" + props.data.id : props.data.url)}>
            <span className="icon has-text-grey is-right">
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                </span>
            </a>
        </div>
        </div>
    )
}

export default Card