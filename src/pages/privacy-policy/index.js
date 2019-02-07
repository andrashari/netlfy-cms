import React, { Component } from 'react';

import colors from '../../assets/theme/colors';

import Layout from "../../components/layout"
import Heading from '../../components/Heading'
import HeroImage from "../../components/imageRepresentation/HeroImage";
import Section from "../../components/layout/Section";

export default class PrivacyPolicy extends Component {
    render() {
        console.log(this.props);
        return (
            <Layout>
                <div style={{ background: colors.lightGrey }}>
                    <Heading content={"Alfresko Campers Privacy Policy"} type={"h1"} maxWidth={{ maxWidth: '50%' }} />
                    <Section style={{ paddingBottom: 0 }}>
                        <p style={{ marginBottom: 0 }}>
                            We respect your privacy; therefore, we are committed to ensuring that it is protected. We recognize your need for appropriate protection and management of your personal information that we learn about you while using our site. This policy provides you with the necessary information about your rights and our obligations, and explains how we collect your personal data. This policy refers to data that we collect from you as user of our web and that you provide us when completing a booking.
                        </p>
                    </Section>
                    <Section style={{ paddingBottom: 0 }}>
                        <Heading style={{ paddingBottom: '20px' }} content={"About Us"} type={"h3"} />
                        <p style={{ marginBottom: 0 }}>
                            Alfresko Campers (‘we’ or ‘us’ or ‘our’) gathers and processes your personal information in accordance with this privacy notice and in compliance with the relevant data protection regulation and laws when visiting our site, <a href="https://alfreskocampers.com">https://alfreskocampers.com</a>.
                        </p>
                    </Section>
                    <Section style={{ paddingBottom: 0 }}>
                        <Heading style={{ paddingBottom: '20px' }} content={"Collection of Information"} type={"h3"} />
                        <p style={{ marginBottom: 0 }}>
                            Alfresko Campers processes your personal information to meet its legal, statutory and contractual obligations and to provide you with our services. We will only collect necessary personal data from you and we will process it as specified in this notice.
                        </p>
                        <Heading style={{ paddingBottom: '20px' }} content={"Non-identifying Information"} type={"h4"} />
                        <p>
                            Information that we collect about your visit and use of our site. This information, no individual can be identified.
                        </p>
                        <Heading style={{ paddingBottom: '20px' }} content={"Personal identifiable information"} type={"h4"} />
                        <p>
                            We receive, store and process information, including personally identifiable information such as your name, email address, phone number(s), ID number, date of birth, credit card information, city of origin, nationality, billing name, billing address, zip code, city and country, that you make available to us when accessing or using our site and services. For example, when communicating with us, filling in a form to contact us, making a booking or paying for it.
                        </p>
                    </Section>
                    <Section style={{ paddingBottom: 0 }}>
                        <Heading style={{ paddingBottom: '20px' }} content={"Use of your personal data"} type={"h3"} />
                        <p style={{ marginBottom: 0 }}>
                            Our primary purpose in collecting your personal data is to provide you with the services you request, and data which will optimize your use of our site.
                        </p>
                    </Section>
                    <Section>
                        <Heading style={{ paddingBottom: '20px' }} content={"Legal Basis for processing"} type={"h3"} />
                        <span style={{ marginBottom: 0 }}>
                            The purposes and reasons for processing your personal data are:
                        </span>
                        <ul>
                            <li>
                                We need and process your personal information in order to provide you the services you have requested. (contractual obligations)
                            </li>
                            <li>
                                We may collect and store your personal information as part of our legal obligation for business accounting and tax purposes.
                            </li>
                            <li>
                                We may occasionally send you marketing information when it would be beneficial for you and in our interest. (legitimate interests)
                            </li>
                        </ul>
                    </Section>
                    <Section style={{ paddingBottom: 0 }}>
                        <Heading style={{ paddingBottom: '20px' }} content={"Disclosure of your personal data"} type={"h3"} />
                        <p style={{ marginBottom: 0 }}>
                            Alfresko Campers takes your privacy very seriously and will never disclose, share or sell your data without your consent; unless required to do so by law.
                        </p>
                    </Section>
                    <Section style={{ paddingBottom: 0 }}>
                        <Heading style={{ paddingBottom: '20px' }} content={"Consequences of not providing your data"} type={"h3"} />
                        <p style={{ marginBottom: 0 }}>
                            You are not obligated to provide your personal information to Alfresko Campers. Our web site can be visited without the consent of the Privacy Policy, but in order to complete a booking, we will require your personal information.
                        </p>
                    </Section>
                    <Section style={{ paddingBottom: 0 }}>
                        <Heading style={{ paddingBottom: '20px' }} content={"Your privacy rights"} type={"h3"} />
                        <p style={{ marginBottom: 0 }}>
                            You have the right to access any personal information that Alfresko Campers processes about you and to request information. If you believe that we hold any incomplete or inaccurate data about you, you have the right to request the rectification of your personal information. You also have the right to request erasure of your personal data or to restrict processing (where applicable) in accordance with data protection laws, as well as to object to any direct marketing from us, to exercise your data portability rights and to be informed about any automated decision-making we may use.
                        </p>
                        <p>
                            If we receive a request from you to exercise any of your rights, we might ask you to verify your identity, in order to ensure that your data is protected and kept secure.
                        </p>
                        <p>
                            We will aim to respond to any request received from you in relation to exercising your rights within 30 days from your request, although this may be extended in some circumstances in line with Data Protection Laws.
                        </p>
                    </Section>
                    <Section style={{ paddingBottom: 0 }}>
                        <Heading style={{ paddingBottom: '20px' }} content={"How long do we keep personal information?"} type={"h3"} />
                        <p style={{ marginBottom: 0 }}>
                            We may keep your personal information for up to 10 years to respond to any questions or complaints, to show that we treated you fairly, to maintain records according to rules that apply to us.
                        </p>
                        <p>
                            We may keep your data for longer than 10 years if we cannot delete it for legal, regulatory or technical reasons.
                        </p>
                    </Section>
                    <Section style={{ paddingBottom: 0 }}>
                        <Heading style={{ paddingBottom: '20px' }} content={"Security of your personal information"} type={"h3"} />
                        <p style={{ marginBottom: 0 }}>
                            We take every reasonable technical and organizational measure and precaution to help protect your personal information from unauthorized access, alteration, disclosure or destruction. We have programs in place to deploy several layers of security measures, including:
                        </p>
                        <ul>
                            <li>
                                Only necessary data retained
                            </li>
                            <li>
                                Data retained no longer than it is required
                            </li>
                            <li>
                                Encryption of our devices
                            </li>
                            <li>
                                Anonymization of sensitive data
                            </li>
                            <li>
                                Protection against cyber attacks (e.g. Cyber Essentials, Trustwave)
                            </li>
                        </ul>
                    </Section>
                    <Section style={{ paddingBottom: 0 }}>
                        <Heading style={{ paddingBottom: '20px' }} content={"Use of Cookies"} type={"h3"} />
                        <p style={{ marginBottom: 0 }}>
                            Cookies are small files web sites transfers to your hard drive (if you agree) that enables sites to recognize your browser and capture and remember certain information. We may use cookies to measure web traffic and site interaction, to offer you better experience on our site. Cookies cannot read any other information on your hard drive. The use of cookies is a common practice on many web sites. However, if you do not wish to receive cookies, or want to be notified of when they are placed, refer to your browser settings where you can turn off the cookie acceptance option. For more detailed information on cookies and the use of them, see our Cookie Policy.
                        </p>
                    </Section>
                    <Section>
                        <Heading style={{ paddingBottom: '20px' }} content={"Changes to our Privacy Policy"} type={"h3"} />
                        <p>
                            We may change this privacy policy from time to time, and in our sole discretion.  Changes will be posted to this page.
                        </p>
                        <span style={{ float: 'right', fontStyle: 'italic' }}>
                            Last updated: January 2019
                        </span>
                    </Section>
                </div>
            </Layout>
        )
    }
}