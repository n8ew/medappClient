import React from 'react'
import logoImg from './logo.PNG'

import { useHistory } from 'react-router-dom'

const Logo = ({ isHomePage }) => {

    const history = useHistory()

    const style = {
        width: '200px',
        cursor: 'pointer'
    }

    const handleClick = () => {
        if(!isHomePage) {
           history.push('/')
        }
     }

    return (
        <img
            src={ logoImg }
            alt="logo"
            style={ style }
            onClick={ handleClick }
        />
    )
}

export default Logo
