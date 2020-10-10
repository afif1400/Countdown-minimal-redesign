import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'

const Footer = () => {
    return (
        <div>
            <div style={{ height: '40vh', backgroundColor: 'black' }}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingTop: '150px',
                    }}
                >
                    <a href='mailto:contact@tedxpesu.com'>
                        {' '}
                        <MailOutlineIcon
                            style={{
                                fontSize: '30',
                                color: 'white',
                                margin: '20px',
                            }}
                        />
                    </a>
                    <a href='https://linkedin.com/company/tedxpesu'>
                        {' '}
                        <LinkedInIcon
                            style={{
                                fontSize: '30',
                                color: 'white',
                                margin: '20px',
                            }}
                        />
                    </a>
                    <a href='https://instagram.com/tedxpesu'>
                        {' '}
                        <InstagramIcon
                            style={{
                                fontSize: '30',
                                color: 'white',
                                margin: '20px',
                            }}
                        />
                    </a>
                    <a href='https://facebook.com/tedxpesu'>
                        {' '}
                        <FacebookIcon
                            style={{
                                fontSize: '30',
                                color: 'white',
                                margin: '20px',
                            }}
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
