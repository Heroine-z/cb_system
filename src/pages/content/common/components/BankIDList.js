import React, {PureComponent,forwardRef} from 'react';
import {Select} from 'antd';
import {connect} from 'react-redux';

const {Option} = Select;

class BankIDList extends PureComponent {
    static getDerivedStateFromProps(nextProps) {
        // Should be a controlled component.
        if ('value' in nextProps) {
            return {
                ...(nextProps.value || {}),
            };
        }
        return null;
    }

    constructor(props) {
        super(props);

        const value = props.value || {};
        this.state = {
            currency: value.currency || 'rmb',
        };
    }

    handleCurrencyChange = currency => {
        if (!('value' in this.props)) {
            this.setState({ currency });
        }
        this.triggerChange({ currency });
    };

    triggerChange = changedValue => {
        // Should provide an event to pass value to Form.
        const { onChange } = this.props;
        if (onChange) {
            onChange({
                ...this.state,
                ...changedValue,
            });
        }
    };

    render() {
        const {bankID,currency} = this.props;

        let options = bankID.toJS().map((item) => {
            return (<Option key={item.bankID} value={item.bankID}>{item.bankID + "-" + item.bankName}</Option>)
        });
        return (
            <Select
                showSearch
                style={{width: 200}}
                optionFilterProp="children"
                filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                value={currency}
                onChange={this.handleCurrencyChange}
            >
                {options}
            </Select>
        )
    }

}

const initMapStateToProps = (state) => {
    return {
        bankID: state.getIn(['content', 'bankID'])
    }
};

export default connect(initMapStateToProps, null)(BankIDList);