import React from 'react'

import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    holder: {
        padding: 0,
        margin: 0,
        // marginTop: 30,
        width: '100vw',
        borderTopLeftRadius: 80,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt: {
        marginBottom: 50,
        fontWeight: 300
    },
    btn: {
        width: 175,
        height: 50,
        fontWeight: 300
    }
})

const ScanResponse = ({ handeler }) => {

    const classes = useStyles()

    return (
        <Container className={ classes.holder }>
            <Typography
                variant='h6'
                align='center'
                className={ classes.txt }
            >
                { handeler.txt }
            </Typography>
            <Button
                variant='contained'
                color={ handeler.btnColor }
                onClick={ handeler.action }
                className={ classes.btn }
            >{ handeler.btnTxt }</Button>
        </Container>
    )
}

export default ScanResponse
