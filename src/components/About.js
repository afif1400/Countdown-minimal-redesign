import { Typography, Grid } from '@material-ui/core'
import React from 'react'

const About = ({ color }) => {
    const textStyles = {
        mixBlendMode: 'difference',
        color: 'rgba(256,256,256,0.96)',
        width: '84%',
        textTransform: 'capitalize',
    }
    return (
        <div
            style={{
                minHeight: '100vh',
                backgroundColor: color,
                paddingTop: 240,
                paddingBottom: 240,
            }}
            className='about'
        >
            <Grid container justify='center'>
                <Typography
                    component='span'
                    variant='h2'
                    style={{ ...textStyles, fontWeight: 200, color: 'white' }}
                    align='center'
                >
                    Join the Countdown to a <br />
                    zero carbon world
                </Typography>
                <Grid
                    container
                    alignItems='center'
                    justify='space-between'
                    style={{ width: '75%', marginTop: 148 }}
                >
                    <Grid xs item>
                        <Typography
                            variant='h4'
                            style={{
                                ...textStyles,
                                fontWeight: 200,
                            }}
                        >
                            Countdown is a global initiative to champion and
                            accelerate solutions to the climate crisis, turning
                            ideas into action.{' '}
                        </Typography>
                        <Typography
                            variant='h6'
                            style={{
                                ...textStyles,
                                fontWeight: 100,
                                marginTop: 48,
                            }}
                        >
                            <strong>The goal: </strong>To build a better future
                            by cutting greenhouse gas emissions in half by 2030
                            in the race to a zero-carbon world – a world that is
                            safer, cleaner and fairer for everyone.{' '}
                        </Typography>
                    </Grid>
                    <Grid xs item>
                        <Typography
                            variant='h4'
                            style={{ ...textStyles, fontWeight: 200 }}
                            component='span'
                        >
                            Countdown launches on 10.10.2020 at 11:00am ET
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default About
