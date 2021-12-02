import React from 'react'
import '../css/Header.css'

export const Header = ({ title }) => {
    console.log(title)
    return (
        <div className='App-header'>
            <h1>{title}</h1>
        </div>
    )
}
