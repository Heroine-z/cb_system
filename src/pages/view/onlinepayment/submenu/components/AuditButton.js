import React, {PureComponent} from 'react';
import {Button, Input, Form, Row} from 'antd';
import './style.css';

const { TextArea } = Input;
class AuditButton extends PureComponent {
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form className="searchContent" onSubmit={this.handleSearch}>
                <Row>
                    <Form.Item label={"审核描述："} labelCol={{span: 1}}>
                        {getFieldDecorator('remark', {})(
                            <TextArea rows={3} name='remark'/>
                        )}
                    </Form.Item>
                </Row>
                <Row>
                    <div className="auditBtnWrapper" >
                        <Button type="primary" className="pass">通过</Button>
                        <Button type="danger" className="inject">驳回</Button>
                    </div>
                </Row>
            </Form>

        )
    }
}
export default Form.create()(AuditButton);