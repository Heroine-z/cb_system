import React, {PureComponent} from 'react';
import {Form, Row, Col, Input, Button, DatePicker, Select} from 'antd';
import './style.css';

const {Option} = Select;

class SearchBox extends PureComponent {

    searchCondition() {
        return [
            {
                label: "开始时间",
                name: "fromTime",
                type: (<DatePicker name="fromTime"/>)
            },
            {
                label: "结束时间",
                name: "endTime",
                type: (<DatePicker name="endTime"/>)
            },
            {
                label: "交易类型",
                name: "type",
                type: (
                    <Select
                        showSearch
                        placeholder="Select a person"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        name="type2"
                    >
                        <Option value="4101">4101</Option>
                        <Option value="5101">5101</Option>
                        <Option value="6222">6222</Option>
                    </Select>
                )
            }
        ]
    }

    // 将搜索条件进行赋值
    getFields() {
        const {getFieldDecorator} = this.props.form;
        const searchGroup = this.searchCondition();
        const children = [];
        for (let i = 0; i < searchGroup.length; i++) {
            children.push(
                <Col span={5} key={i}>
                    <Form.Item label={searchGroup[i].label} labelCol={{span: 10}}>
                        {getFieldDecorator(searchGroup[i].name, {})(
                            searchGroup[i].type
                        )}
                    </Form.Item>
                </Col>,
            )
        }
        return children;
    }

    handleSearch = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            let end = values.endTime.format('L').split('/');
            let from = values.fromTime.format('L').split('/');
            let endTime = end[2] + end[0] + end[1];
            let fromTime = from[2] + from[0] + from[1];
            if (fromTime - endTime > 0) {
                alert("开始时间不能大于结束时间！");
            }
            console.log(values.type)

        });
    };

    handleReset = () => {
        this.props.form.resetFields();
    };

    render() {
        return (
            <Form className="searchContent" onSubmit={this.handleSearch}>
                <Row gutter={8}>{this.getFields()}</Row>
                <Row>
                    <Col span={24} style={{textAlign: 'right'}}>
                        <Button type="primary" htmlType="submit">
                            Search
                        </Button>
                        <Button style={{marginLeft: 8}} onClick={this.handleReset}>
                            Clear
                        </Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default Form.create()(SearchBox);