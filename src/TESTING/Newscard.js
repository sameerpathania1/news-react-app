import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Paper } from '@material-ui/core';
import Masonry from 'react-masonry-component';

function Newscard(props) {
  const styles = {
    float: "left",
    width: '30%',
    margin: 5,
    padding: 10,
  }
  const { imgurl, details, time, title } = props
  return (
    <Paper style={styles}>
      <Col>
        <img style={{ maxWidth: "100%", maxHeight: "100%" }} src={imgurl} />
      </Col>
      <Col>
        <p>{time}</p>
      </Col>
      <Col>
        <p>{title}</p>
      </Col>
    </Paper>

  )
}
export default Newscard;