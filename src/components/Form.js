import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import { PrimaryTextField } from '../theme'
import CountDown from './CountDown'

const Form = ({ color }) => {
    return (
        <Grid container className='form'>
            <Grid
                container
                style={{ height: '100vh' }}
                justify='center'
                alignItems='center'
                direction='column'
            >
                <Typography
                    variant='h5'
                    style={{
                        color: `${color === '#f1ff39' ? 'black' : 'white'}`,
                        marginTop: 124,
                    }}
                >
                    #JoinTheCountdown
                </Typography>
                <Typography
                    variant='h2'
                    style={{
                        color: `${color === '#f1ff39' ? 'black' : 'white'}`,
                        textTransform: 'uppercase',
                        marginTop: 16,
                    }}
                >
                    We need your help
                </Typography>

                <div style={{ marginTop: 48 }}></div>
                <CountDown
                    targetDate='Oct 10, 2020'
                    targetTime='18:00:00'
                    color={color}
                />
            </Grid>
            <Grid
                container
                item
                alignItems='center'
                justify='center'
                style={{
                    minHeight: '100vh',
                    backgroundColor: color,
                    width: '100%',

                    paddingBottom: 84,
                }}
            >
                <form
                    action='https://tedxpesu.us17.list-manage.com/subscribe/post?u=ba7804f5c0145f0050fc88bd4&amp;id=f7a8682e3a'
                    method='post'
                    id='mc-embedded-subscribe-form'
                    name='mc-embedded-subscribe-form'
                    class='validate'
                    target='_blank'
                    novalidate
                    style={{ width: '75%' }}
                >
                    <Typography
                        component='span'
                        variant='h1'
                        style={{
                            color: `${color === '#f1ff39' ? 'black' : 'white'}`,
                            fontFamily: 'Inter',
                            fontWeight: 400,
                        }}
                    >
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'auto 1fr auto',
                            }}
                        >
                            <span>My name is</span>
                            <input
                                type='name'
                                name='FNAME'
                                id='mce-FNAME'
                                variant='outlined'
                                required
                                label='Name'
                                style={{
                                    width: '100%',
                                    border: 0,
                                    background: 'transparent',
                                    outline: 0,
                                    borderBottom: `4px solid ${
                                        color === '#f1ff39' ? 'black' : 'white'
                                    }`,
                                    fontSize: '6rem',
                                    marginLeft: 32,
                                }}
                            />
                            <span>,</span>
                        </div>
                    </Typography>
                    <Typography
                        component='span'
                        variant='h1'
                        style={{
                            color: `${color === '#f1ff39' ? 'black' : 'white'}`,
                            fontFamily: 'Inter',
                            fontWeight: 400,
                        }}
                    >
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'auto 1fr',
                            }}
                        >
                            <span>here's my email</span>
                            <input
                                type='email'
                                name='EMAIL'
                                id='mce-EMAIL'
                                variant='outlined'
                                required
                                label='Email'
                                style={{
                                    width: '100%',
                                    border: 0,
                                    background: 'transparent',
                                    outline: 0,
                                    borderBottom: `4px solid ${
                                        color === '#f1ff39' ? 'black' : 'white'
                                    }`,
                                    fontSize: '6rem',

                                    display: 'inline-block',
                                    marginLeft: 32,
                                }}
                            />
                        </div>
                    </Typography>
                    <Grid container style={{ width: '100%' }}>
                        <Button
                            style={{
                                marginTop: 64,
                                textTransform: 'none',
                                background: 'transparent',
                                border: 0,
                            }}
                            type='submit'
                        >
                            <Typography
                                variant='h1'
                                style={{
                                    fontFamily: 'Inter',
                                    color: `${
                                        color === '#f1ff39' ? 'black' : 'white'
                                    }`,
                                    fontWeight: 400,
                                    borderBottom: `4px solid ${
                                        color === '#f1ff39' ? 'black' : 'white'
                                    }`,
                                    paddingBottom: 8,
                                }}
                            >
                                Register
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item xs style={{ height: '100%' }}>
                        {/* this div is for bot spam protection do not remove */}
                        <div
                            style={{
                                position: 'absolute',
                                left: '-5000px',
                            }}
                            aria-hidden='true'
                        >
                            <input
                                type='text'
                                name='b_ba7804f5c0145f0050fc88bd4_f7a8682e3a'
                                tabindex='-1'
                                value=''
                            />
                        </div>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    )
}

export default Form
