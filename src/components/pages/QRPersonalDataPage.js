import React, { useContext } from 'react'
import ScreenContext from '../../context/screenSize/screenContext'
import PersonalForm from '../createUsersFormsComponents/PersonalForm'

import { useHistory } from 'react-router-dom'

import Container from "@material-ui/core/Container"

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    pageXs: {
        padding: 0,
        margin: 0,
        width: '100vw',
        minHeight: '90vh',
        background: '#fff',
        borderTopLeftRadius: 80,
     },
     pageMd: {
        padding: 0,
        margin: 0,
        width: '80vw',
        minHeight: '90vh',
        background: '#fff',
        borderTopLeftRadius: 80,
        borderTopRightRadius: 80,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: "4px 4px 8px rgba(0,0,0,.3), -4px -4px 8px rgba(0,0,0,.3) "
     },
     pageLg: {
        padding: 0,
        margin: 0,
        width: '40vw',
        minHeight: '90vh',
        background: '#fff',
        borderTopLeftRadius: 80,
        borderTopRightRadius: 80,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: "4px 4px 8px rgba(0,0,0,.3), -4px -4px 8px rgba(0,0,0,.3) "
     },
    content: {
        padding: 0,
        margin: 0,
        width: '100%',
        borderTopLeftRadius: 80,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
     },
})

const QRPersonalDataPage = ({ personalData, setPersonalData }) => {

    const screenContext = useContext(ScreenContext)
    const { screen } = screenContext

    const history = useHistory()

    const formHandeler = {
        personalData: personalData,
        setPersonalData: setPersonalData,
        moveForward: () => history.push('/evaluation')
    }

    const classes = useStyles()

    return (
        <Container className={ screen === 'xs' ? classes.pageXs : (screen === 'sm' ? classes.pageMd : classes.pageLg) }>
            <PersonalForm handeler={ formHandeler } />
        </Container>
    )
}

export default QRPersonalDataPage
