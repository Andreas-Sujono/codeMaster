import React, { Component } from 'react';
import DocsContent from 'shared/components/DocsContent'
import './style.scss'
import content from './utils.js'

class FrontEnd extends Component {
    render() {
        return (
            <div className="frontEnd">
                <h2> FrontEnd </h2>
                {
                    content.map ( (item,idx) =>
                        <DocsContent key={idx} title={item.title} detail={item.detail}/>
                    )
                }
            </div>
        );
    }
}

export default FrontEnd;