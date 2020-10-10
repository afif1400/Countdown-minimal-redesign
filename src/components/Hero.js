import React, { useEffect, useRef } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import '../styles/hero.css'
import Countdown from '../svgs/Countdown.svg'
import { sectionWidth } from '../constants'

const Hero = ({ color, setLoading }) => {
    useEffect(() => {
        return () => {}
    }, [])
    return (
        <>
            <div style={{ height: '170vh' }} className='hero'>
                <Grid
                    container
                    style={{
                        height: '70vh',
                        transition: '0.5s',
                        backgroundColor: color,
                        width: '100%',
                    }}
                    alignItems='center'
                >
                    <Grid
                        item
                        container
                        justify='center'
                        style={{ transition: '0.5s' }}
                    >
                        <Typography
                            component='span'
                            variant='h1'
                            style={{
                                mixBlendMode: 'difference',
                                color: 'rgba(256,256,256,0.96)',
                                width: sectionWidth,
                                fontWeight: 200,
                                textTransform: 'uppercase',
                                paddingTop: 48,
                                transition: '0.4s',
                            }}
                        >
                            We can change climate change.
                        </Typography>
                        {/* <div style={{ width: '84%', marginTop: 8 }}>
                            <Typography
                                component='span'
                                variant='h6'
                                style={{
                                    mixBlendMode: 'difference',
                                    color: 'white',

                                    fontWeight: 200,
                                }}
                            >
                                Register for the main event on 18.10.20. Don't
                                forget to join the watch party for the official
                                launch of Countdown on 10.10.20
                            </Typography>
                            <div style={{ display: 'inline' }}>Icon</div>
                        </div> */}
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
                            left: '50%',
                            transform: 'translate3d(-50%,0,0)',
                        }}
                        src='https://player.vimeo.com/video/230738063?autoplay=1&loop=1&background=1'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture ; fullscreen;'
                        allowFullScreen
                    />

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
                            </Typography>
                            <Countdown width='24%' />
                        </Grid>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
