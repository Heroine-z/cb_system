import React, {PureComponent} from 'react';
import {Upload, Button, Icon} from 'antd';
import {OperaterBarWrapper} from './style';

class OperateBar extends PureComponent {

    render() {
        const {fileConfig} = this.props;
        return (
            <OperaterBarWrapper>
                <Upload {...fileConfig}>
                    <Button>
                        <Icon type="upload"/>上传
                    </Button>
                </Upload>
            </OperaterBarWrapper>
        )
    }
}

export default OperateBar;