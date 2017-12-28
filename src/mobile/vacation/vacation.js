import React from 'react';
import ReactDOM from 'react-dom';
import { Card, List, Picker, DatePicker, TextareaItem, ImagePicker, Button } from 'antd-mobile';
import { Icon} from 'antd';
import { createForm } from 'rc-form';
import axios from 'axios';
import './vacation.css';

const Item = List.Item;
// 提示
const message = '亲爱的***同学：您的可用调休时长为***小时，您的可用年假时长***小时，温馨提醒：事假需提前一个工作日申请，每月事假时长原则不允许超3*8.5小时，如果满足调休根据项目需要进行假期安排。'
// 表单
// 请假类型
const typeList = [
	{
		label: '事假',
		value: '事假',
	},
	{
		label: '年假',
		value: '年假',
	},
	{
		label: '病假',
		value: '病假',
	},
]
// 开始结束时间（min-max）
const nowTimeStamp = Date.now();

const start = new Date(nowTimeStamp);
const end = new Date(start.getFullYear(), start.getMonth(), start.getDate(), start.getHours(), start.getMinutes()+30);

//图片
const data = [];
//备岗人员
const reserveList=[
	{
		label: 'hx',
		value: 'hx',
	},
	{
		label: 'wsr',
		value: '2',
	},
	{
		label: 'fr',
		value: '3',
	},
]
const approverList=[
	{
		label: 'hx',
		value: '1',
	},
	{
		label: 'wsr',
		value: '2',
	},
	{
		label: 'fr',
		value: '3',
	},
]
//审批人员

class Vacation extends React.Component{
	
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		var id = '5a43360e2e196109f457a509' 
		axios.post('/server0/personalHolidayInfo/',{id})
		.then((resp) => {
			console.log(resp)
		})
	}

	state = {
		type:'',
		startDate:start,
		endDate:end,
		cause:'',
		img:{
			files:data
		},
		reserve:'',
		approver:'',
	}

	//更改图片
	onChangeImg = (files, type, index) => {
		console.log(files, type, index);
		if(type==='add'){
			this.setState({
				files:this.state.img.files.push(files[files.length-1])
			});
		}else if(type==='remove'){
			console.log('删除'+index)
			this.setState({
				files:this.state.img.files.splice(index,1)
			});
		}
	}

	onSubmit = () => {
		console.log(this.state)
	}

	onReset = () => {
		
	}

	render() {
		// 图片
		const { files } = this.state.img;
		return (
			<div id="vacation">
				{/* 提示 */}
				<Card full>
					<Card.Header
						title="提示"
						extra={<Icon type="reload" />}
					/>
					<Card.Body>
        				<div>{message}</div>
      				</Card.Body>
				</Card>
				{/* 表单 */}
				<form>
					<List>
						<Picker 
							data={typeList} 
							cols={1} 
							extra="无"
							value={this.state.type} 
							onChange={type => this.setState({ type })}
							// onChange={vacationType => this.setState({vacationType})}
							>
                            <List.Item arrow="horizontal" >请假类型</List.Item>
                        </Picker>
						<DatePicker
							maxDate={this.state.endDate}
							value={this.state.startDate}
							onChange={startDate => this.setState({ startDate })}
							>
							<List.Item arrow="horizontal">开始时间</List.Item>
						</DatePicker>
						<DatePicker
							minDate={this.state.startDate}
							value={this.state.endDate}
							onChange={endDate => this.setState({ endDate })}
							>
							<List.Item arrow="horizontal">结束时间</List.Item>
						</DatePicker>
						<Item>休假事由</Item>
						<TextareaItem
							rows={3}
							placeholder="填写休假事由"
							defaultValue=""
						/>
						<Picker 
							data={reserveList} 
							cols={1} 
							value={this.state.reserve} 
							onChange={reserve => this.setState({reserve})}
							extra="无"
							title="备岗人员">
							<List.Item arrow="horizontal">备岗人员</List.Item>
						</Picker>
						<Item extra={'上传医院病假条等'}>图片</Item>
						<ImagePicker
							files={files}
							onChange={this.onChangeImg}
							onImageClick={(index, fs) => console.log(index, fs)}
							multiple={true}
							// onAddImageClick={this.onAddImageClick}
						/>
						<Picker
							data={approverList} 
							cols={1} 
							value={this.state.approver} 
							onChange={approver => this.setState({approver})}
							extra="无"
							title="审批人员">
							<List.Item arrow="horizontal">审批人员</List.Item>
						</Picker>
						<Item className="btnGroup">
							<Button type="primary" size="small" inline onClick={this.onSubmit}>提交</Button>
							<Button size="small" inline style={{ marginLeft: '2.5px' }} onClick={this.onReset}>取消</Button>
						</Item>
					</List>
				</form>
			</div>
		)
	}
}

export default Vacation;
