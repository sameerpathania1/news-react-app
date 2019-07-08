import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Paper } from '@material-ui/core';
import Masonry from 'react-masonry-component';

function Newscard(props) {
  const styles = {
    float: "left",
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50 %, -50 %)',
    width: '30%',
    height: 400,
    margin: 5,
    padding: 10,
  }
  const { imgurl, details, time, title } = props
  return (
    <Paper style={styles}>
      <Col>
        <img style={{ Width: "100%", Height: "100%" }} src={imgurl} />
      </Col>
      <Col>
        <p style={{}} >{title}</p>
      </Col>
    </Paper>

  )
}
export default Newscard;