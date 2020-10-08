import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import { PrimaryTextField } from '../theme'

const Form = ({ color }) => {
    return (
        <div
            className='form'
            style={{ backgroundColor: color, height: '100vh' }}
        >
            <form
                action='https://tedxpesu.us17.list-manage.com/subscribe/post?u=ba7804f5c0145f0050fc88bd4&amp;id=f7a8682e3a'
                method='post'
                id='mc-embedded-subscribe-form'
                name='mc-embedded-subscribe-form'
                class='validate'
                target='_blank'
                novalidate
                style={{ height: '100%' }}
            >
                {' '}
                <Typography
                    component='span'
                    style={{
                        color: `${color === '#f1ff39' ? 'black' : 'white'}`,
                        fontSize: '8vw',
                    }}
                >
                    My name is
                </Typography>{' '}
                <input
                    type='email'
                    name='EMAIL'
                    id='mce-EMAIL'
                    variant='outlined'
                    required
                    label='Email'
                    style={{ width: '36%' }}
                />
                <Grid
                    container
                    direction='column'
                    justify='flex-start'
                    alignItems='center'
                >
                    <Grid item xs>
                        <PrimaryTextField
                            fullWidth
                            type='name'
                            name='FNAME'
                            id='mce-FNAME'
                            variant='outlined'
                            required
                            label='Name'
                        />
                    </Grid>
                    <Grid item xs style={{ height: '100%' }}>
                        <Button
                            id='mc-embedded-subscribe'
                            type='submit'
                            size='large'
                        >
                            Register
                        </Button>
                    </Grid>

                    {/* this div is for bot spam protection do not remove */}
                    <div
                        style={{ position: 'absolute', left: '-5000px' }}
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
        </div>
    )
}

export default Form
