import { Typography, Grid } from '@material-ui/core'
import React from 'react'

import Images from '../components/Images'
import { textStyles } from '../constants'

const About = ({ color }) => {
    return (
        <div
            style={{
                backgroundColor: color,
                paddingTop: 240,
                paddingBottom: 240,
            }}
            className='about'
            id="about"
        >
            <Grid container justify='center'>
                <Typography
                    component='span'
                    variant='h2'
                    style={{
                        ...textStyles,
                        fontWeight: 200,
                        color: 'white',
                        textTransform: 'uppercase',
                    }}
                    align='center'
                >
                    Join the Countdown to a <br />
                    zero carbon world
                </Typography>
                <div className="container"
                    style={{ width: '75%', marginTop: 224,display:"flex",flexWrap:"wrap" }}
                >
                    <Grid xs item>
                        <Typography
                            variant='h4'
                            style={{
                                ...textStyles,
                                fontWeight: 300,
                            }}
                        >
                            Countdown is a global initiative to champion and
                            accelerate solutions to the climate crisis, turning
                            ideas into action.
                        </Typography>
                        <Typography
                            variant='h6'
                            style={{
                                ...textStyles,
                                fontWeight: 200,
                                marginTop: 48,
                            }}
                        >
                            <p style={{ fontWeight: 400, display: 'inline' }}>
                                The goal:
                            </p>
                            To build a better future by cutting greenhouse gas
                            emissions in half by 2030 in the race to a
                            zero-carbon world – a world that is safer, cleaner
                            and fairer for everyone.
                        </Typography>
                    </Grid>
                    <Grid
                        xs
                        item
                        style={{ height: '100%' }}
                        container
                        justify='flex-end'
                    >
                        <Images image='aboutImage1' />
                    </Grid>
                </div>
            </Grid>
        </div>
    )
}

export default About
