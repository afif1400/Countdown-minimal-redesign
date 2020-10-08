import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { sectionWidth, textStyles } from '../constants'

const Performances = ({ color }) => {
    return (
        <div>
            <Grid
                container
                justify='center'
                style={{
                    backgroundColor: color,
                    paddingTop: 240,
                }}
            >
                <Grid container style={{ width: sectionWidth }}>
                    <Typography
                        variant='h2'
                        style={{
                            ...textStyles,
                            width: '100%',
                            fontWeight: 200,
                        }}
                        align='left'
                    >
                        Don't miss out on the Performances and activities we
                        have prepared for you
                    </Typography>
                </Grid>
                <div style={{ height: '100vh' }}></div>
            </Grid>
        </div>
    )
}

export default Performances
