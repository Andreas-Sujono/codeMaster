import React, { Component } from 'react';
import DocsTitleContent from 'shared/components/DocsTitleContent'
import './style.scss'

class GettingStarted extends Component {
    render() {
        return (
            <div className="gettingStarted">
                <h2>GettingStarted</h2>
                <DocsTitleContent/>
                <DocsTitleContent/>
                <DocsTitleContent/>
            </div>
        );
    }
}

export default GettingStarted;