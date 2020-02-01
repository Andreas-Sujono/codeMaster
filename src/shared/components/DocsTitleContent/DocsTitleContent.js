import React, {Component} from 'react';
import './style.scss'

class DocsTitleContent extends Component {
    render() {
        const {title, content} = this.props
        return (
            <div className="docsTitleContent">
                <h2> {title}</h2>
                <div class="content">
                    {content}
                </div>

            </div>
        );
    }
}

DocsTitleContent.defaultProps= {
    title:'Title',
    content:'Lorem ipsum dolor sit amet, consectetur ' +
        'adipiscing elit, sed do eiusmod tempor' +
        ' incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud' +
        ' exercitation ullamco laboris nisi ut aliquip ' +
        'ex ea commodo consequat. Duis aute irure dolor' +
        ' in reprehenderit in voluptate velit esse ' +
        'cillum dolore eu fugiat nulla pariatur.' +
        ' Excepteur sint occaecat cupidatat non ' +
        'proident, sunt in culpa qui officia deserunt ' +
        'mollit anim id est laborum.\n'
}

export default DocsTitleContent;