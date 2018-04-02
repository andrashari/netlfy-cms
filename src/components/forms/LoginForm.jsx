import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox, Tabs } from 'antd';

import { registerEmail, logInWithGoogle, logInWithFacebook } from '../../utils/Auth'

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

class LoginForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                registerEmail(values.email, values.password)
                console.log('Received values of form: ', values.email + values.password);
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Tabs defaultActiveKey="1" style={{ textAlign: 'center' }}>
                <TabPane tab="Log In" key="1">
                    <Form onSubmit={this.handleSubmit} className="login-form" style={{ maxWidth: 300, margin: 'auto' }}>
                        <FormItem>
                            {getFieldDecorator('email', {
                                rules: [{
                                    type: 'email', message: 'The input is not valid E-mail!',
                                }, {
                                    required: true, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{
                                    type: 'string', message: 'The input is not valid password!',
                                }, {
                                    required: true, message: 'Please input your password!',
                                }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>Remember me</Checkbox>
                            )}
                            <a className="login-form-forgot" href="" style={{ float: 'right' }}>Forgot password</a>
                            <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
                                Log in
                            </Button>
                            {/*<Button type="secondary" className="login-form-button" style={{ width: '100%' }} onClick={logInWithFacebook}>
                                Log in with Facebook
                            </Button>
                            <Button type="secondary" className="login-form-button" style={{ width: '100%' }} onClick={logInWithGoogle}>
                                Log in with Google
                            </Button>*/}
                        </FormItem>
                    </Form>
                </TabPane>
                <TabPane tab="Sign Up" key="2">
                    <Form onSubmit={this.handleSubmit} className="login-form" style={{ maxWidth: 300, margin: 'auto' }}>
                        <FormItem>
                            {getFieldDecorator('email', {
                                rules: [{
                                    type: 'email', message: 'The input is not valid E-mail!',
                                }, {
                                    required: true, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [
                                    {
                                        type: 'string', message: 'The input is not valid password!',
                                    }, {
                                        required: true, message: 'Please input your password!',
                                    },{
                                        min: 6, message: 'Password length must be between 6 an 128 characters',
                                    },
                                    {
                                        min: 128, message: 'Password length must be between 6 an 128 characters',
                                    }
                                ],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
                                Sign Up
                            </Button>
                            {/*<Button type="secondary" className="login-form-button" style={{ width: '100%' }} onClick={logInWithFacebook}>
                                Log in with Facebook
                            </Button>
                            <Button type="secondary" className="login-form-button" style={{ width: '100%' }} onClick={logInWithGoogle}>
                                Log in with Google
                            </Button>*/}
                        </FormItem>
                    </Form>
                </TabPane>
            </Tabs>
        );
    }
}

export default LoginForm = Form.create()(LoginForm);