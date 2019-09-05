import React, {PureComponent} from 'react';
import {Form, Row, Col, Button} from 'antd';
import {connect} from 'react-redux';
import './style.css';


class SearchBox extends PureComponent {

    // 将搜索条件进行赋值
    getFields() {
        const {getFieldDecorator} = this.props.form;
        const {searchCondition,activeKey} = this.props;
        const searchGroup = searchCondition.toJS().length>0 && !isNaN(activeKey) ?searchCondition.toJS()[parseInt(activeKey)-1]:[];
        const children = [];
        for (let i = 0; i < searchGroup.length; i++) {
            children.push(
                <Col span={4} key={i}>
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
            // 对筛选框内容进行校验操作
            const endTime = values.endTime ? values.endTime.format("YYYY-MM-DD").split('-').join("") : "";
            const fromTime = values.fromTime ? values.fromTime.format("YYYY-MM-DD").split('-').join("") : "";
            if (fromTime - endTime > 0) {
                alert("开始时间不能大于结束时间！");
                return;
            }
            values.fromTime = fromTime;
            values.endTime = endTime;
            console.log(values)

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

const initMapStateToProps = (state) => {
    return {
        searchCondition: state.getIn(['content', 'searchCondition']),
        activeKey:state.getIn(['content', 'activeKey'])
    }
};
export default Form.create()(connect(initMapStateToProps, null)(SearchBox));