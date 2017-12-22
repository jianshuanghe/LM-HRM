import React from 'react';
import ReactDOM from 'react-dom';
import { Card, List, Picker, DatePicker, TextareaItem, ImagePicker, Button } from 'antd-mobile';
import { Icon} from 'antd';
import { createForm } from 'rc-form';
import './vacation.css';

const Item = List.Item;
// 提示
const message = '亲爱的***同学：您的可用调休时长为***小时，您的可用年假时长***小时，温馨提醒：事假需提前一个工作日申请，每月事假时长原则不允许超3*8.5小时，如果满足调休根据项目需要进行假期安排。'
// 表单
// 请假类型
const seasons  = [
	[
	  {
		label: '2013',
		value: '2013',
	  },
	  {
		label: '2014',
		value: '2014',
	  },
	],
	[
	  {
		label: '春',
		value: '春',
	  },
	  {
		label: '夏',
		value: '夏',
	  },
	],
  ];
// 请假类型
// 时间
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);

let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);
// console.log(minDate, maxDate);
if (minDate.getDate() !== maxDate.getDate()) {
  // set the minDate to the 0 of maxDate
  minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
}
//图片
const data = [];

class Vacation extends React.Component{
	state = {
		files: data,
		multiple: false,
	}
	onChange = (files, type, index) => {
		console.log(files, type, index);
		this.setState({
			files,
		});
	}
	onSegChange = (e) => {
		const index = e.nativeEvent.selectedSegmentIndex;
		this.setState({
			multiple: index === 1,
		});
	}

	state = {
		date: now,
		sValue:['2013', '春']
	}

	constructor(props) {
		super(props);
	}

	render() {
		const { files } = this.state;
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
							data={seasons}
							extra="请选择"
							onChange={this.onChange}
							onScrollChange={this.onScrollChange}
							cascade='false'						
							value={this.state.sValue}
							title="请假类型">
							<List.Item arrow="horizontal">请假类型</List.Item>
						</Picker>
						<DatePicker
							value={this.state.date}
							onChange={date => this.setState({ date })}
							>
							<List.Item arrow="horizontal">开始时间</List.Item>
						</DatePicker>
						<DatePicker
							value={this.state.date}
							onChange={date => this.setState({ date })}
							>
							<List.Item arrow="horizontal">结束时间</List.Item>
						</DatePicker>
						<Item>休假事由</Item>
						<TextareaItem
							rows={3}
							placeholder="fixed number of lines"
						/>
						<Picker 
							extra="无"
							title="备岗人员">
							<List.Item arrow="horizontal">备岗人员</List.Item>
						</Picker>
						<Item extra={'上传医院病假条等'}>图片</Item>
						<ImagePicker
							files={files}
							onChange={this.onChange}
							onImageClick={(index, fs) => console.log(index, fs)}
							multiple={this.state.multiple}
						/>
						<Picker
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
