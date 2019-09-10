import React, {PureComponent} from 'react';
import {Form, Row, Col, Button} from 'antd';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actionCreators';
import './style.css';


class SearchBox extends PureComponent {

    // 将搜索条件进行赋值
    getFields() {
        const {getFieldDecorator} = this.props.form;
        const {searchCondition} = this.props;

        const children = [];
        for (let i = 0; i < searchCondition.length; i++) {
            children.push(
                <Col span={4} key={i}>
                    <Form.Item label={searchCondition[i].label} labelCol={{span: 10}}>
                        {getFieldDecorator(searchCondition[i].name, {})(
                            searchCondition[i].type
                        )}
                    </Form.Item>
                </Col>,
            )
        }
        return children;
    }

    handleSearch = (e,url,activeKey) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            const {getSearchList} = this.props;
            // 对筛选框内容进行校验操作
            const endTime = values.endTime ? values.endTime.format("YYYY-MM-DD").split('-').join("") : "";
            const fromTime = values.fromTime ? values.fromTime.format("YYYY-MM-DD").split('-').join("") : "";
            if (fromTime - endTime > 0) {
                alert("开始时间不能大于结束时间！");
                return;
            }
            values.fromTime = fromTime;
            values.endTime = endTime;
            for (let item in values){
                if (values[item] === undefined){
                    values[item] ="";
                }
            }
            getSearchList(values,url,activeKey);

        });
    };

    handleReset = () => {
        this.props.form.resetFields();
    };

    render() {
        const {url,activeKey} = this.props;
        return (
            <Form className="searchContent" onSubmit={e => this.handleSearch(e,url,activeKey)}>
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
        activeKey:state.getIn(['content', 'activeKey'])
    }
};
const initMapDispatchToProps = (dispatch) =>{
    return {
        getSearchList(values,url,activeKey){
            dispatch(actionCreators.getSearchList(values,url,activeKey));
        }
    }
};
export default Form.create()(connect(initMapStateToProps, initMapDispatchToProps)(SearchBox));