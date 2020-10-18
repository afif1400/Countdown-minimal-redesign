import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const Banner = () => {
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
                    justify='flex-start'
                >
                    <Typography>
                        Event goes live today! Catch it live on Airmeet from{' '}
                        <strong>5pm </strong>
                        onwards.
                    </Typography>

                    <a
                        href='https://tedxpesu.com/links/view'
                        style={{ textDecoration: 'none' }}
                    >
                        {' '}
                        <Button variant='outlined' style={{ marginLeft: 24 }}>
                            Watch now{' '}
                        </Button>
                    </a>
                </Grid>
            </div>
        </div>
    )
}

export default Banner
