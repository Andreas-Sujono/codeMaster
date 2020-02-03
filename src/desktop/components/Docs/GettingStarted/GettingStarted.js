import React, { Component } from 'react';
import DocsTitleContent from 'shared/components/DocsTitleContent'
import './style.scss'
import content from './utils.js'

class GettingStarted extends Component {
    render() {
        return (
            <div className="gettingStarted">
                <h2>GettingStarted</h2>
                {
                    content.map ( (item,idx) =>
                        <DocsTitleContent key={idx} title={item.title} content={item.detail}/>
                    )
                }

            </div>
        );
    }
}

export default GettingStarted;