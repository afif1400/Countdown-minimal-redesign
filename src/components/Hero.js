import React, { useEffect, useRef } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Hero = ({ color }) => {
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
                                color: 'rgba(256,256,256,0.90)',
                                width: '84%',
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

                        overflow: 'hidden',
                    }}
                >
                    <iframe
                        className='video'
                        style={{
                            height: '100vh',
                            width: '100%',
                            position: 'absolute',
                            top: 0,
                            zIndex: -1,
                        }}
                        src='https://www.youtube.com/embed/D37aDfmWBag'
                        frameborder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
        </>
    )
}

export default Hero
