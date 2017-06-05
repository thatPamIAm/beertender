import React, { Component } from 'react';
import { Container, Content, Form, Item, Input,Label, Title } from 'native-base';

export default class LoginForm extends Component {
  render() {
    return (
      <Form>
        <Title>Login</Title>
        <Item stackedLabel>
          <Label>Username</Label>
          <Input />
        </Item>
        <Item stackedLabel last>
          <Label>Password</Label>
          <Input />
        </Item>
      </Form>
    );
  }
}
