import React, { Component } from 'react';
import DocsContent from 'shared/components/DocsContent'
import content from './utils'
import './style.scss'

class HTML extends Component {
    render() {
        return (
            <div className="frontEnd-html">
                <h2>HTML</h2>
                {
                    content.map ( (item,idx) =>
                        <DocsContent key={idx} title={item.title} detail={item.detail}/>
                    )
                }
            </div>
        );
    }
}

export default HTML;