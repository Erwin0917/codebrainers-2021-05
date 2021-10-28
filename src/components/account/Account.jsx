import React from 'react';
import {
  Card, CardBody, Col, FormGroup, Input, Label,

} from 'reactstrap';

const Account = (props) => {
  const {
    userFullName,
    inputOnChange,
          inputOnBlur,
  } = props;

  return (
          <Card>
            <CardBody>
              <FormGroup>
                <Label for="userFullName">User name:</Label>
                <Input
                        id="userFullName"
                        name="userFullName"
                        type="text"
                        placeholder="Enter your name and surname…"
                        value={userFullName}
                        onChange={inputOnChange}
                        onBlur={inputOnBlur}
                />
              </FormGroup>
            </CardBody>
          </Card>
  )
}

export default Account;