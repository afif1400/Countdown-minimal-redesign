import React, { useEffect, useRef } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import '../styles/hero.css'
import Countdown from '../svgs/Countdown.svg'

const Hero = ({ color, setLoading }) => {
    useEffect(() => {
        return () => {}
    }, [])
    return (
        <>
            <div style={{ height: '170vh' }} className='hero'>
                <Grid
                    container
                    style={{ height: '70vh', backgroundColor: color }}
                    alignItems='center'
                >
                    <Grid item container justify='center'>
                        <Typography
                            component='span'
                            variant='h1'
                            style={{
                                mixBlendMode: 'difference',
                                color: 'rgba(256,256,256,0.96)',
                                width: '84%',
                                fontWeight: 200,
                            }}
                        >
                            We can change climate change.
                        </Typography>
                        <div style={{ width: '84%', marginTop: 48 }}>
                            <Typography
                                component='span'
                                variant='h6'
                                style={{
                                    mixBlendMode: 'difference',
                                    color: 'yellow',

                                    fontWeight: 200,
                                }}
                            >
                                {/* Save your seat */}
                            </Typography>
                            <div style={{ display: 'inline' }}>Icon</div>
                        </div>
                    </Grid>
                </Grid>
                <div
                    style={{
                        height: '100vh',
                        backgroundColor: 'transparent',
                        width: '100%',
                        overflow: 'hidden',
                    }}
                >
                    <iframe
                        className='video'
                        style={{
                            height: '56.25vw',
                            width: '177.77777778vh',
                            position: 'absolute',
                            top: 0,
                            zIndex: -1,
                            minWidth: '100%',
                        }}
                        src='https://player.vimeo.com/video/230738063?autoplay=1&loop=1&background=1'
                        frameborder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture ; fullscreen;'
                        allowfullscreen
                    ></iframe>

                    <div
                        style={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0,0,0,0.40)',
                        }}
                    >
                        <Grid
                            container
                            justify='center'
                            alignItems='center'
                            style={{ width: '100%', height: '100%' }}
                            direction='column'
                        >
                            <Typography variant='h6' style={{ color: 'white' }}>
                                Presenting
                            </Typography>{' '}
                            <Countdown width='25%' />
                        </Grid>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
