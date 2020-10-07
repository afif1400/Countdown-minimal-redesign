import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import Link from '../components/Link'
import Header from '../components/Header'

export default function Index() {
    const [color, setColor] = useState('white')
    return (
        <Container maxWidth='xl'>
            <Header color={color} />
            <Box my={4}>
                <Typography variant='h4' component='h1' gutterBottom>
                    Gatsby v4-beta example
                </Typography>
            </Box>
        </Container>
    )
}
