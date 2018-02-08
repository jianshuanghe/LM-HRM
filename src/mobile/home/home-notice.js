import React from 'react';
import { NoticeBar, WhiteSpace, Icon } from 'antd-mobile';
import axios from 'axios';
class HomeNotice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notices:["多大的都好呢~", "新年快乐哦", "记得发红包啊"]
        }
    }
    componentWillMount() {
        this.getNotice();
    }
    getNotice() {
        let userInfo = JSON.parse(localStorage.getItem('userDate'));
        let userId = userInfo.userId;
        let params = {userId : userId}
        axios.get('/server0/message/getMessage',{ params : params })
        .then((resp) => {
            console.log(resp);
            let notices = resp.data.data;
            // this.setState({ notices: notices});
        })
        .catch((error) => {
            console.log(error);
        })
    }
    render() {
        return (
            <div>
                {this.state.notices.map(r => (
                        <NoticeBar key={r} mode="closable"  icon={null} marqueeProps={{ loop:false }} >
                            {r}    
                        </NoticeBar>
                    )
                )}
            </div>
            
        )
    }
}
export default HomeNotice; 