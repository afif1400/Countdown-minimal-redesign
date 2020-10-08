import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { sectionWidth, textStyles } from '../constants'
import Images from './Images'
import band from '../images/band.jpg'
import stage from '../images/stage.jpg'
import book from '../images/book.jpg'
import guitar from '../images/guitar.jpg'

const Performances = ({ color }) => {
    const backgroundImage = {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        height: '100%',
        width: '50vw',
    }

    const innerText = (title, content) => {
        return (
            <div
                style={{
                    position: 'absolute',
                    backgroundColor: 'rgba(0,0,0,0.42)',
                    width: '100%',
                    height: '100%',
                }}
            >
                <Grid
                    container
                    style={{ width: '100%', height: '84%' }}
                    alignItems='flex-end'
                    justify='center'
                >
                    <div style={{ width: '75%', height: '36%' }}>
                        <Typography
                            variant='h2'
                            style={{
                                fontFamily: 'Open Sans',
                                fontWeight: 400,
                                color: 'white',
                            }}
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant='h5'
                            style={{
                                fontFamily: 'Open Sans',
                                fontWeight: 300,
                                color: 'white',
                                marginTop: 64,
                            }}
                        >
                            {content}
                        </Typography>
                    </div>
                </Grid>
            </div>
        )
    }
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
                        backgroundImage: `url(${band})`,
                        ...backgroundImage,
                    }}
                >
                    {innerText(
                        'Sour Candy',
                        <>
                            Sour Candy is a pop rock band based out of
                            Bangalore. They were formed in 2018 by a group of
                            college students and they’ve performed at various
                            Battle of Bands around Bangalore and have also
                            performed shows for various events at their college,
                            PES University.
                        </>
                    )}
                </div>
                <div
                    className='slide'
                    style={{
                        backgroundImage: `url(${stage})`,
                        ...backgroundImage,
                    }}
                >
                    {innerText(
                        'The BisiBeleBois',
                        <>
                            The BisiBeleBois are an Improv Comedy trio based out
                            of Bangalore. They are the Youngest Improv Comedy
                            team in India.
                        </>
                    )}
                </div>
                <div
                    className='slide'
                    style={{
                        backgroundImage: `url(${book})`,
                        ...backgroundImage,
                    }}
                >
                    {' '}
                    {innerText(
                        'Prajwal Vishwanath',
                        <>
                            A spoken word poet and a member of the Write Angle
                            Club. Because everyone sees the same Words, but
                            everyone sees through Different Eyes.
                        </>
                    )}
                </div>
                <div
                    className='slide'
                    style={{
                        backgroundImage: `url(${guitar})`,
                        ...backgroundImage,
                    }}
                >
                    {' '}
                    {innerText(
                        ' Pranav and Ridhima',
                        <>
                            A duo with a passion and love for music. Watch them
                            perform something mesmerizing.
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Performances
