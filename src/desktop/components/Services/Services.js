import React from 'react'
import './style.scss'

import html from 'assets/HTML.png'
import css from 'assets/CSS.png'
import js from 'assets/JS.png'
import bootstrap from 'assets/bootstrap.png'
import git from 'assets/git.png'
import dataStructure from 'assets/dataStructure.png'
import matplotlib from 'assets/matplotlib.png'
import numpy from 'assets/numpy.png'
import pandas from 'assets/pandas.png'
import python from 'assets/python.png'
import react from 'assets/react.png'
import redux from 'assets/redux.png'
import reactNative from 'assets/reactNative.png'
import scikitLearn from 'assets/scikitLearn.png'

const imageList1 = [
    react,reactNative,redux,html,css,js,
]

const imageList2 = [
    bootstrap,python,numpy,pandas,matplotlib,git
]

const imageList3 = [
    scikitLearn,dataStructure,
]



const Services = (props) => {

    return(
        <div class="services">
            <h1> Services </h1>

            <div class="container">
                <div class="imageLibrary row">
                    {imageList1.map(img => (
                        <div class="imgContainer col">
                            <img src={img}  />
                        </div>
                    ))}
                </div>
                <div class="imageLibrary row">
                    {imageList2.map(img => (
                        <div class="imgContainer col">
                            <img src={img}  />
                        </div>
                    ))}
                </div>
                <div class="imageLibrary row">
                    {imageList3.map(img => (
                        <div class="imgContainer col">
                            <img src={img}  />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services