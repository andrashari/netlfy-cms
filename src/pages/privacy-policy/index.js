import React, { Component } from 'react';

import Heading from './../../components/Heading';
import Layout from '../../components/layout'

export default class PrivacyPolicy extends Component {

    render() {
        return (
            <Layout>
                <Heading content={"Privacy Policy"} type={"h1"} style={"normal"} />
            </Layout>
        )
    }
}