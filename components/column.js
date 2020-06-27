import Panel from './panel'

function Column(props) {
    return (
        <div className="column">
            <Panel data={props} />
        </div>
    )
}

export default Column