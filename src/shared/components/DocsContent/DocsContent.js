import React, {Component} from 'react';
import './style.scss'

/*
props:
    title: <string>
    detail: <array> 
            ( type: <textContent/listContent>, 
            content: <string>/<array> (<string>)
            )
*/
class DocsContent extends Component {
    render() {
        const {title, detail} = this.props
        return (
            <div className="DocsContent">
                <h2> {title}</h2>
                <div class="content">
                    {
                        detail.map( (item,idx) => 
                            item.type == 'textContent' ? 
                                <div key={idx} dangerouslySetInnerHTML={{ __html: item.content}} /> 
                            : item.type == 'listContent' ? 
                                <ul key={idx}>
                                    {item.content.map( (li,idx2) => <li key={`${idx}_${idx2}`}> {li}</li>)}
                                </ul>
                            : <code key={idx}> {item.content.map( (item2,idx2) => <pre key={`${idx}_${idx2}`}> {item2} </pre>)}</code>
                        )
                    }
                </div>
                <hr/>

            </div>
        );
    }
}

export default DocsContent;