import React from 'react'
import LoadingImage from 'assets/loadingGIF.gif'

import './style.scss'

const Loading = () => {
    return(
        <div className="loadingPage">
            <img src={LoadingImage} />
            <h4> Loading....</h4>
        </div>
    )
}

export default Loading