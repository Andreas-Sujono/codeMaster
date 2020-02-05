import React, {Component} from 'react';
import './style.scss'
import DocsExample from 'shared/components/DocsExample'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/hljs';

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
                                item.intoHtml ? 
                                    <div key={idx} dangerouslySetInnerHTML={{ __html: item.content}} /> 
                                :
                                <p>{item.content}</p>
                            : item.type == 'listContent' ? 
                                <ul key={idx}>
                                    {item.content.map( (li,idx2) => <li key={`${idx}_${idx2}`}>{li}</li>)}
                                </ul>
                            : item.type == 'exampleContent' ? <DocsExample content={item.content}/>
                            :   <code key={idx} className="codeContent"> 
                                    <pre><SyntaxHighlighter language="htmlbars" style={vs}>{item.content}</SyntaxHighlighter></pre>
                                </code>
                        )
                    }
                </div>
                <hr/>

            </div>
        );
    }
}

export default DocsContent;