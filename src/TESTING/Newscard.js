import React, { Component } from 'react';
import { Row, Col, Modal } from 'react-bootstrap';
import { Grid ,Paper } from '@material-ui/core';


function Newscard(props) {
  const styles = {
    float: "left",
    width: "32.4%",
    maxHeight: "100%",
    margin: 5,
    padding: 10
  }

  const { imgurl, details, time, title } = props
  return (
    <Grid container style={styles}>
      <Grid item xs={12} sm={12} md={12}>
        <p><strong>Time: </strong>{time}</p>
      </Grid>
      <Grid item xs={12} sm={12} md={12} >
        { imgurl && imgurl.length ? <img style={{width: "100%"}} src={imgurl} alt="no image"/> : 
        <div style={{width: "100%", textAlign: "center", justifyContent: "center"}} >NO IMAGE</div> }
      </Grid>
      <Grid item xs={12} sm={12} md={12} >
        <p><strong>Title: </strong>{title}</p>
      </Grid>
    </Grid>
  )
}



export default Newscard;