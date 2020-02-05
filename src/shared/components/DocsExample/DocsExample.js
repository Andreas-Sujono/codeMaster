import React, { Component } from 'react';
import './style.scss'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class DocsExample extends Component {
    
    render() {
        const {content} = this.props
        return (
            <div className="docsExample">
                <h3>Example</h3>
                <div className="container">
                    <div className="row content">
                        <div className="codeContainer  col-12 col-md-7">
                            <pre ><SyntaxHighlighter language="htmlbars" style={docco}>{content}</SyntaxHighlighter></pre>
                        </div>
                        <div className="codeShow col-12 col-md-5 " dangerouslySetInnerHTML={{ __html: content}}/>
                    </div>
                </div>
                
                
            </div>
        );
    }
}

export default DocsExample;