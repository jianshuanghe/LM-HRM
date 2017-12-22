import React from 'react';
import { NoticeBar, WhiteSpace, Icon } from 'antd-mobile';
class HomeNotice extends React.Component {
    render() {
        return (
            <NoticeBar mode="closable" onClick={() => alert('1')} icon={null} marqueeProps={{ loop:false }} >
                Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed during National Day.
            </NoticeBar>
        )
    }
}
export default HomeNotice; 