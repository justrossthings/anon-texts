import React from 'react';
import { Row, Col, FormGroup, FormControl, Alert } from 'react-bootstrap';
// import Phone from 'react-phone-number-input';

// import rrui from 'react-phone-number-input/rrui.css';
// import rpni from 'react-phone-number-input/style.css';

const NumberField = (props) => {
  return (
    <Row>
      <Col xs={12} sm={6} smOffset={3}>
        <FormGroup>
          <FormControl
            type="number"
            value={props.number}
            placeholder="eg. 0416 032 684"
            onChange={props.handleChange}
          />
          {/*<Phone*/}
          {/*placeholder="eg. 0416 032 684"*/}
          {/*country={'AU'}*/}
          {/*countries={['AU']}*/}
          {/*value={props.number}*/}
          {/*showCountrySelect={true}*/}
          {/*onChange={props.handleChange}*/}
          {/*className=""*/}
          {/*/>*/}
          <br/><br/>
          {props.error === 'BAD_LENGTH' ?
            <Alert bsStyle="danger">
              Bad number. Only 10-digit mobile numbers are supported
            </Alert>
            : props.error === 'BAD_NUMBER_CODE' ?
              <Alert bsStyle="danger">
                Bad number. Only Australian mobile numbers starting with '04' are supported
              </Alert>
              : null
          }
        </FormGroup>
      
      </Col>
    </Row>
  )
};

export default NumberField;