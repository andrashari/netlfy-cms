import React from 'react'
import PropTypes from 'prop-types'

import { Collapse } from 'antd';
import 'antd/lib/collapse/style/css';
const Panel = Collapse.Panel;

export const FaqTemplate = ({
    faqQuestion,
    faqAnswer,
}) => {

    return (
        <Collapse accordion>
            <Panel header={faqQuestion} key={faqAnswer}>
                {faqAnswer}
            </Panel>
        </Collapse>
    )
}

FaqTemplate.propTypes = {
    faqQuestion: PropTypes.string,
    faqAnswer: PropTypes.string
}

const Faq = ({ faq }) => {
    return (
        <FaqTemplate
            faqQuestion={faq.frontmatter.faqQuestion}
            faqAnswer={faq.frontmatter.faqAnswer}
        />
    )
}

Faq.propTypes = {
    faq: PropTypes.object
}

export default Faq
