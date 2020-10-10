import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'

const Footer = () => {
    const fontSize = 24
    return (
        <div>
            <div style={{ backgroundColor: 'black' }}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingTop: 24,
                        paddingBottom: 24,
                    }}
                >
                    <a href='mailto:contact@tedxpesu.com'>
                        {' '}
                        <MailOutlineIcon
                            style={{
                                fontSize: fontSize,
                                color: 'white',
                                margin: '24px',
                            }}
                        />
                    </a>
                    <a href='https://linkedin.com/company/tedxpesu'>
                        {' '}
                        <LinkedInIcon
                            style={{
                                fontSize: fontSize,
                                color: 'white',
                                margin: '24px',
                            }}
                        />
                    </a>
                    <a href='https://instagram.com/tedxpesu'>
                        {' '}
                        <InstagramIcon
                            style={{
                                fontSize: fontSize,
                                color: 'white',
                                margin: '24px',
                            }}
                        />
                    </a>
                    <a href='https://facebook.com/tedxpesu'>
                        {' '}
                        <FacebookIcon
                            style={{
                                fontSize: fontSize,
                                color: 'white',
                                margin: '24px',
                            }}
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
