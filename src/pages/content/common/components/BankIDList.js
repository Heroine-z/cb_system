import React, {PureComponent} from 'react';
import {Select} from 'antd';
import store from 'store';

const {Option} = Select;

class BankIDList extends PureComponent {

    handleBankIDChange = bankID => {
        const {onChange} = this.props;
        if (onChange) {
            onChange(bankID);
        }
    };

    render() {
        let options = store.getState().toJS().content.bankID.map((item) => {
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
                onChange={this.handleBankIDChange}
            >
                {options}
            </Select>
        )
    }
}

export default BankIDList;