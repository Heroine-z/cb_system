import React, {PureComponent,Fragment} from 'react';
import { Tabs } from 'antd';
import TabComponent from "../../../content/common/tab";

const { TabPane } = Tabs;
class AggregatePayment extends PureComponent{

    render(){
        return(
          <Fragment>
              <TabComponent />
          </Fragment>
        )
    }
}
export default AggregatePayment;