import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const Banner = ({ scrollFunction }) => {
    const [canScroll, setCanScroll] = useState(false)

    const scrollTo = (y) => {
        !!canScroll && scrollFunction(y)
    }

    useEffect(() => {
        setCanScroll(typeof scrollFunction === 'function')
        return () => {}
    }, [scrollFunction])
    return (
        <div className='topBanner'>
            <div
                className='container'
                style={{ backgroundColor: '#f1ff39', height: 64 }}
            >
                <Grid
                    container
                    alignItems='center'
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    justify='space-between'
                >
                    <Grid item xs>
                        <Typography component='span'>
                            Event goes live today! Catch it live on Airmeet from{' '}
                            <strong>5pm </strong>
                            onwards.
                        </Typography>

                        <a
                            href='https://tedxpesu.com/links/view'
                            style={{ textDecoration: 'none' }}
                        >
                            <Button
                                style={{
                                    marginLeft: 32,
                                    backgroundColor: 'black',
                                    color: '#f1ff39',
                                    paddingLeft: 16,
                                    paddingRight: 16,
                                }}
                            >
                                Watch now
                            </Button>
                            <Button
                                variant='outlined'
                                style={{
                                    marginLeft: 18,
                                }}
                                onClick={() => {
                                    setTimeout(() => {
                                        scrollTo(
                                            window.innerHeight * 1.7 +
                                                document.querySelector('.about')
                                                    .offsetHeight +
                                                document.querySelector(
                                                    '.performanceSlide'
                                                ).offsetHeight +
                                                document.querySelector('.form')
                                                    .offsetHeight -
                                                document.querySelector(
                                                    '.footer'
                                                ).offsetHeight +
                                                document.querySelector(
                                                    '.performers'
                                                ).offsetHeight +
                                                document.querySelector(
                                                    '.speakers'
                                                ).offsetHeight +
                                                document.querySelector(
                                                    '.performers'
                                                ).offsetHeight +
                                                document.querySelector(
                                                    '.performances'
                                                ).offsetHeight +
                                                96
                                        ) //put in the value you wanna scroll to
                                    }, 200)
                                }}
                            >
                                Register
                            </Button>
                        </a>
                    </Grid>
                    <div></div>
                </Grid>
            </div>
        </div>
    )
}

export default Banner
