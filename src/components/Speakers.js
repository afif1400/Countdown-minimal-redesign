import React, { useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { Draggable } from 'gsap/Draggable'

import gsap from 'gsap'

import { sectionWidth, textStyles } from '../constants'
import Images from '../components/Images'

const Speakers = ({ color }) => {
    useEffect(() => {
        return () => {}
    }, [])

    return (
        <div
            style={{
                minHeight: '100vh',
                backgroundColor: color,
                paddingTop: 24,
            }}
        >
            <Grid container justify='center'>
                <Grid
                    container
                    justify='space-between'
                    style={{ width: sectionWidth }}
                >
                    <Typography
                        variant='h2'
                        style={{
                            ...textStyles,
                            paddingBottom: 84,
                            textTransform: 'uppercase',
                            width: '100%',
                        }}
                    >
                        Meet the <br />
                        event speakers
                    </Typography>
                </Grid>
                <Grid
                    container
                    alignItems='center'
                    style={{ width: '100%', height: '100%' }}
                >
                    <div style={{ height: '100vh' }}>
                        <Images
                            image='speaker1'
                            styles={{ height: 240, width: 240 }}
                        />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Speakers
