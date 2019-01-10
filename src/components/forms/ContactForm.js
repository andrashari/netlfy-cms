import React, { Component } from 'react';

import {
    Modal, Form, Icon, Select, Input, Button, Row, Col
} from 'antd';

import { sendMessage } from '../../mock'

const { TextArea } = Input;
const { Option } = Select;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

function getValue(obj) {
    return Object.keys(obj)
        .map(key => `${key} - ${obj[key]}`)
        .join(',');
}

class ContactForm extends Component {

    state = {
        success: '',
    }

    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                sendMessage(values).then(response => {
                    this.setState({ success: response.note })
                    Modal.success({
                        title: 'Your message is successfully sent!',
                        //content: 'We are going to reply as soon as possible.',
                        content: this.state.success
                    });
                }).catch()
            }
        });
    }

    render() {
        const {
            getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
        } = this.props.form;

        // Only show error after a field is touched.
        const nameError = isFieldTouched('name') && getFieldError('name');
        const emailError = isFieldTouched('email') && getFieldError('email');
        const phoneError = isFieldTouched('phone') && getFieldError('phone');
        const noteError = isFieldTouched('note') && getFieldError('note');

        return (//onSubmit={this.handleSubmit}
            <div>
                <Form onSubmit={this.handleSubmit} action="#">
                    <Row>
                        <Col span={12}>
                            <Row>
                                <Form.Item
                                    label="Your Name"
                                    validateStatus={nameError ? 'error' : ''}
                                    help={nameError || ''}
                                >
                                    {getFieldDecorator('name', {
                                        rules: [{ required: true, message: 'Please tell us your name!' }],
                                    })(
                                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="name" />
                                    )}
                                </Form.Item>
                                <Form.Item
                                    label="Email"
                                    validateStatus={emailError ? 'error' : ''}
                                    help={emailError || ''}
                                >
                                    {getFieldDecorator('email', {
                                        rules: [{ required: true, message: 'Please tell us your email!' }],
                                    })(
                                        <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="email" />
                                    )}
                                </Form.Item>
                                <Form.Item
                                    label="Phone"
                                    validateStatus={phoneError ? 'error' : ''}
                                    help={phoneError || ''}
                                >
                                    {getFieldDecorator('phone', {
                                        rules: [{ required: true, message: 'Please tell us your phone!' }],
                                    })(
                                        <Input prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="phone" />
                                    )}
                                </Form.Item>
                            </Row>
                        </Col>
                        <Col offset={1} span={11}>
                            <Form.Item
                                label="Your idea"
                                validateStatus={noteError ? 'error' : ''}
                                help={noteError || ''}
                            >
                                {getFieldDecorator('note', {
                                    rules: [{ required: true, message: 'Please tell us about your idea!' }],
                                })(
                                    <TextArea rows={12} prefix={<Icon type="message" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Please tell us about your idea!" />
                                )}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                disabled={hasErrors(getFieldsError())}
                            >
                                SEND MESSAGE
                        </Button>
                        </Form.Item>
                    </Row>
                </Form>
            </div>
        );
    }
}

export default ContactForm = Form.create({ name: 'contact_form' })(ContactForm);