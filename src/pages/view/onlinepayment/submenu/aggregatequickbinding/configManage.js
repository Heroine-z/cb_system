import {DatePicker, Input, Select} from "antd";
import React from "react";
const {Option} = Select;

export const searchCondition = () =>{
    return [[
        {
            label: "开始时间",
            name: "fromTime",
            type: (<DatePicker/>)
        },
        {
            label: "结束时间",
            name: "endTime",
            type: (<DatePicker/>)
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
                >
                    <Option value="4101">4101</Option>
                    <Option value="5101">5101</Option>
                    <Option value="6222">6222</Option>
                </Select>
            )
        },
        {
            label: "证件类型",
            name: "identetifyType",
            type: (
                <Select>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
            )
        },
        {
            label: "交易流水号",
            name: "systemNo",
            type: (
                <Input/>
            )
        },
        {
            label: "状态",
            name: "status",
            type: (
                <Select>
                    <Option value="10">10-NEW</Option>
                    <Option value="20">20-成功</Option>
                    <Option value="30">30-失败</Option>
                </Select>
            )
        }],[
        {
            label: "开始时间2",
            name: "fromTime",
            type: (<DatePicker/>)
        },
        {
            label: "结束时间2",
            name: "endTime",
            type: (<DatePicker/>)
        },
        {
            label: "交易类型2",
            name: "type",
            type: (
                <Select
                    showSearch
                    placeholder="Select a person"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value="4101">4101</Option>
                    <Option value="5101">5101</Option>
                    <Option value="6222">6222</Option>
                </Select>
            )
        },
        {
            label: "证件类型2",
            name: "identetifyType",
            type: (
                <Select>
                    <Option value="identity">身份证</Option>
                    <Option value="hukouben">户口本</Option>
                </Select>
            )
        }
    ]
    ]
};
export const searchUrl = () =>{
    return [
        "/api/aggregatequickbinding.json",
        "/api/aggregatequickbinding2.json"
    ]
};
export const searchList = () =>{

};