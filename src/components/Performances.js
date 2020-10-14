import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { sectionWidth, textStyles } from '../constants';
import sourcandy from '../images/performers/sourcandy.jpg';
import bbb from '../images/performers/bbb.png';
import PaR from '../images/PaR.jpg';
import prajwal from '../images/prajwal.jpg';

const Performances = ({ color }) => {
  const backgroundImage = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    minHeight: '100%',
    width: '50vw',
  };

  const innerText = (title, content) => {
    return (
      <div
        className='performances'
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
          <div style={{ width: '75%' }}>
            <Typography
              variant='h3'
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
                marginTop: 32,
              }}
            >
              {content}
            </Typography>
          </div>
        </Grid>
      </div>
    );
  };
  return (
    <>
      <Grid
        className='performers'
        container
        alignItems='center'
        style={{
          backgroundColor: color,
          marginTop: 164,
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
              paddingBottom: 124,
              textTransform: 'uppercase',
            }}
            align='left'
          >
            We even invited a few <br />
            performers to the event
          </Typography>
        </Grid>
      </Grid>
      <div
        style={{
          minHeight: '100vh',
          maxWidth: '100vw',
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',
          position: 'relative',
          overflowX: 'hidden',
        }}
        className='performanceSlide'
      >
        <div
          className='slide'
          style={{
            backgroundImage: `url(${sourcandy})`,
            ...backgroundImage,
          }}
        >
          {innerText(
            <div>
              Sour <br /> Candy
            </div>,
            <>
              Sour Candy is a pop rock band based out of Bangalore. They were
              formed in 2018 by a group of college students and they’ve
              performed at various Battle of Bands around Bangalore .
            </>
          )}
        </div>
        <div
          className='slide'
          style={{
            backgroundImage: `url(${bbb})`,
            ...backgroundImage,
          }}
        >
          {innerText(
            <div>
              The <br /> BisiBeleBois
            </div>,
            <>
              The BisiBeleBois are an Improv Comedy trio based out of Bangalore.
              They are the Youngest Improv Comedy team in India.
            </>
          )}
        </div>
        <div
          className='slide'
          style={{
            backgroundImage: `url(${prajwal})`,
            ...backgroundImage,
          }}
        >
          {innerText(
            <div>
              Prajwal <br />
              vishwanath
            </div>,
            <>
              A spoken word poet and a member of the Write Angle Club. Because
              everyone sees the same Words, but everyone sees through Different
              Eyes.
            </>
          )}
        </div>
        <div
          className='slide'
          style={{
            backgroundImage: `url(${PaR})`,
            ...backgroundImage,
          }}
        >
          {' '}
          {innerText(
            <div>
              Pranav <br /> and Ridhima
            </div>,
            <>
              A duo with a passion and love for music. Watch them perform
              something mesmerizing.
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Performances;
