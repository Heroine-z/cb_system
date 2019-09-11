import React, {useState, forwardRef, PureComponent} from "react";
import {Input, Select} from 'antd';
const { Option } = Select;
const bankIDList = [];

function PriceInput({ size, value = {}, onChange }, ref) {
    const [num, setNum] = useState(value.number || 0);
    const [currency, setCurrency] = useState(value.currency || "rmb");
    function triggerChange(changedValue) {
        if (onChange) {
            onChange(Object.assign({}, { number: num, currency }, changedValue));
        }
    }
    return (
        <span ref={ref}>
      <Input
          type="text"
          size={size}
          value={"number" in value ? value.number : num}
          onChange={({ target: { value: val } }) => {
              const number = parseInt(val || 0, 10);
              if (Number.isNaN(number)) {
                  return;
              }

              setNum(val);
              triggerChange({ number: val });
          }}
          style={{ width: "65%", marginRight: "3%" }}
      />
      <Select
          value={"currency" in value ? value.currency : currency}
          size={size}
          style={{ width: "32%" }}
          onChange={currency => {
              setCurrency(currency);
              triggerChange({ currency });
          }}
      >
        <Option value="rmb">RMB</Option>
        <Option value="dollar">Dollar</Option>
      </Select>
    </span>
    );
}

export default PriceInput = forwardRef(PriceInput);