import React, { Component } from 'react';
import DocsContent from 'shared/components/DocsContent'
import './style.scss'
import content from './utils.js'

class GettingStarted extends Component {
    render() {
        return (
            <div className="gettingStarted">
                <h2>Getting Started</h2>
                {
                    content.map ( (item,idx) =>
                        <DocsContent key={idx} title={item.title} detail={item.detail}/>
                    )
                }

            </div>
        );
    }
}

export default GettingStarted;