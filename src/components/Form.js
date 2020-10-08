import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import { PrimaryTextField } from '../theme'

const Form = ({ color }) => {
    return (
        <Grid container>
            <Grid
                container
                item
                alignItems='center'
                justify='center'
                style={{
                    height: '100vh',
                    backgroundColor: color,
                    width: '100%',
                }}
                className='form'
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
                        style={{
                            color: `${color === '#f1ff39' ? 'black' : 'white'}`,
                            fontFamily: 'Inter',
                            fontSize: '7rem',
                        }}
                    >
                        My name is
                        <input
                            type='email'
                            name='EMAIL'
                            id='mce-EMAIL'
                            variant='outlined'
                            required
                            label='Email'
                            style={{
                                width: '36%',
                                border: 0,
                                background: 'transparent',
                                outline: 0,
                                borderBottom: `4px solid ${
                                    color === '#f1ff39' ? 'black' : 'white'
                                }`,
                                fontSize: '5rem',
                                marginLeft: 32,
                                display: 'inline',
                            }}
                        />{' '}
                        <span>,</span>
                    </Typography>
                    <Typography
                        component='span'
                        style={{
                            color: `${color === '#f1ff39' ? 'black' : 'white'}`,
                            fontFamily: 'Inter',
                            fontSize: '7rem',
                        }}
                    >
                        here's my email
                        <input
                            type='name'
                            name='FNAME'
                            id='mce-FNAME'
                            variant='outlined'
                            required
                            label='Name'
                            style={{
                                width: '36%',
                                border: 0,
                                background: 'transparent',
                                outline: 0,
                                borderBottom: `4px solid ${
                                    color === '#f1ff39' ? 'black' : 'white'
                                }`,
                                fontSize: '5rem',
                                marginLeft: 32,
                            }}
                        />
                        and I would like to
                    </Typography>

                    <Grid item xs style={{ height: '100%' }}>
                        <Button
                            id='mc-embedded-subscribe'
                            type='submit'
                            size='large'
                        >
                            Register
                        </Button>

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
