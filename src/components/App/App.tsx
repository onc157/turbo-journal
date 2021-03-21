import React from 'react';
import './style.scss';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Content from '../Content/Content';
import { Grid } from '@material-ui/core';

function App() {
  return (
    <>
      <Grid container>
        <Grid item xs={4} sm={3} md={2}>
          <Navbar />
        </Grid>
        <Grid item xs={8} sm={9} md={10}>
          <Content />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
