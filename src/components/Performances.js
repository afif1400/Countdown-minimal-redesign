import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { sectionWidth, textStyles } from '../constants'
import Images from './Images'
import band from '../images/band.jpg'

const Performances = ({ color }) => {
    const numSlide = 4
    return (
        <>
            <Grid
                container
                alignItems='center'
                style={{
                    backgroundColor: color,
                    marginTop: 180,
                }}
                direction='column'
            >
                <Grid container style={{ width: sectionWidth }}>
                    <Typography
                        variant='h2'
                        style={{
                            ...textStyles,
                            width: '100%',
                            fontWeight: 200,
                            paddingBottom: 96,
                        }}
                        align='left'
                    >
                        We even invited a few
                        <br /> performers to the event
                    </Typography>
                </Grid>
            </Grid>
            <div
                style={{
                    height: '100vh',

                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'column',
                    position: 'relative',
                }}
                className='performanceSlide'
            >
                <div
                    className='slide'
                    style={{
                        height: '100%',
                        width: '50vw',
                        backgroundImage: `url(${band})`,
                        backgroundSize: 'cover',
                    }}
                ></div>
                <div
                    className='slide'
                    style={{
                        height: '100%',
                        width: '50vw',
                        backgroundImage: `url(${band})`,
                        backgroundSize: 'cover',
                    }}
                ></div>
                <div
                    className='slide'
                    style={{
                        height: '100%',
                        width: '50vw',
                        backgroundColor: 'blue',
                    }}
                ></div>
                <div
                    style={{
                        backgroundColor: 'red',
                        height: '100%',
                        width: '50vw',
                    }}
                ></div>
            </div>
        </>
    )
}

export default Performances
