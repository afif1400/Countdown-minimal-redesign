import React, { useEffect, useRef } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import '../styles/hero.css'

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
                </div>
            </div>
        </>
    )
}

export default Hero
