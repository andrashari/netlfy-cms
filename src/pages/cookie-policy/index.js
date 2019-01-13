import React, { Component } from 'react';

import Heading from './../../components/Heading';
import Layout from '../../components/layout'

export default class CookiePolicy extends Component {

    render() {
        return (
            <Layout>
                <Heading content={"Cookie Policy"} type={"h1"} style={"normal"} />
            </Layout>
        )
    }
}