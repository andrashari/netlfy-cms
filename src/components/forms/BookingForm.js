import React, { Component } from 'react'
import moment from 'moment'

import { insertOrder } from '../../mock'

import { Form, Input, DatePicker, Select, Button } from 'antd';
// TODO index.js:499 You are using a whole package of antd, please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.
import 'antd/lib/form/style/css';
import 'antd/lib/date-picker/style/css';
import 'antd/lib/select/style/css';
import 'antd/lib/button/style/css';

import ui from "../../assets/theme/ui";

import { GetaQuoteImageIcon } from '../svgs/images';

const Option = Select.Option; 'antd';
const FormItem = Form.Item;
const RangePicker = DatePicker.RangePicker;

class BookingForm extends Component {
    state = {
        today: [moment(new Date()), moment(new Date()).add(1, 'days')],
        isOpen: true
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const data = JSON.parse(JSON.stringify(values))
                data.start = new Date(data.interval[0])
                data.end = new Date(data.interval[1])
                delete data.interval;
                console.log(insertOrder(data))
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                >
                    {getFieldDecorator('interval', {
                        rules: [
                            { required: true, message: 'Please select your interval!' },
                        ],
                    })(
                        <RangePicker

                        />
                    )}
                </FormItem>

                <FormItem
                >
                    {getFieldDecorator('camper', {
                        rules: [
                            { required: true },
                        ],
                        initialValue: this.props.camper.toLowerCase()
                    })(
                        <Input type="hidden" />
                    )}
                </FormItem>

                {/*
                    <FormItem
                        {...formItemLayout}
                        label="Please select Camper"
                    >
                        {getFieldDecorator('camper', {
                            rules: [
                                { required: true, message: 'Please select your camper!' },
                            ],
                        })(
                            <Select
                                placeholder="Select a Camper"
                            >
                                <Option value="camper1">Happy Camper</Option>
                                <Option value="camper2">Sad Camper</Option>
                            </Select>
                        )}
                    </FormItem>
                        */}

                <FormItem
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        marginBottom: 0
                    }}
                >
                    <Button type="primary" htmlType="submit" style={ui.button}><GetaQuoteImageIcon /></Button>
                </FormItem>
            </Form>
        );
    }
}

export default BookingForm = Form.create()(BookingForm);