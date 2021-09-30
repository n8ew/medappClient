import React from 'react'
import PersonalForm from '../createUsersFormsComponents/PersonalForm'

import { useHistory } from 'react-router-dom'

import Container from "@material-ui/core/Container"

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    page: {
        padding: 0,
        margin: 0,
        width: '100vw',
        minHeight: '90vh',
        borderTopLeftRadius: 80,
        background: "#eee"
    },
    content: {
        padding: 0,
        margin: 0,
        width: '100vw',
        borderTopLeftRadius: 80,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
     },
})

const QRPersonalDataPage = ({ personalData, setPersonalData }) => {

    const history = useHistory()

    const formHandeler = {
        personalData: personalData,
        setPersonalData: setPersonalData,
        moveForward: () => history.push('/evaluation')
    }

    const classes = useStyles()

    return (
        <Container className={ classes.page }>
            <PersonalForm handeler={ formHandeler } />
        </Container>
    )
}

export default QRPersonalDataPage
