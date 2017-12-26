import React from 'react';
import { List, WhiteSpace, Button} from 'antd-mobile';
import axios from 'axios';
import './salary.css';
const querystring = require('query-string');
const Item = List.Item;
const Brief = Item.Brief;
const month = (new Date()).getMonth();
const salarycontents = [
	{
	  "id": "5a1ab8e44c1e651d20b01172",
	  "userId": null,
	  "employeeCode": "123456",
	  "date": "2017-12-01",
	  "employeeName": "shixx@vipsdb.com",
	  "joblevel": "string",
	  "departmentName": "002",
	  "baseSalary": 6500,
	  "foodSubsidy": 350,
	  "educationSubsidy": 100,
	  "jobtitleSubsidy": 8500,
	  "otherSubsidy": 0,
	  "overtimePay": 1450,
	  "attendanceDeduction": 200,
	  "otherDeduction": 0,
	  "insuranceDeduction": 100,
	  "providentFundDeduction": 0,
	  "tax": 300,
	  "totalSalary": 9800,
	  "workingState": "01",
	  "salaryState": null,
	  "dr": 0
	}
  ]
class Salary extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			baseSalay: '',
			foodSubsidy: '',
			jobtitleSubsidy: '',
			educationSubsidy: '',

			pretaxSalary: '',
			afttaxSalary: '',
			totalSalary: '',
			overtimePay: '',
			attendanceDeduction: '',
			outlineDeduction: '',
			insuranceDeduction: '',
			houseFundDeduction: '',
			tax: '',
			historyPay: ''

		}
	}
	componentWillMount() {
		this.queryById();
	}
	queryById() {
		let params = {id: "5a1ab8e44c1e651d20b01172"};
		let ppp = '5a1ab8e44c1e651d20b01172';
		axios.post('/server0/salarySheet/queryById',ppp)
		.then((resp) => {
			console.log(resp);
			resp = salarycontents;
			this.setState({
				baseSalay: resp[0].baseSalary,
				foodSubsidy: resp[0].foodSubsidy,
				jobtitleSubsidy: resp[0].jobtitleSubsidy,
				educationSubsidy: resp[0].educationSubsidy,
	
				pretaxSalary: resp[0].pretaxSalary,
				afttaxSalary: resp[0].jobtitleSubsidy,
				totalSalary: resp[0].totalSalary,
				overtimePay: resp[0].overtimePay,
				attendanceDeduction: resp[0].attendanceDeduction,
				outlineDeduction: resp[0].outlineDeduction,
				insuranceDeduction: resp[0].insuranceDeduction,
				providentFundDeduction: resp[0].providentFundDeduction,
				tax: resp[0].tax,
				historyPay: resp[0].historyPay
			});

		})
		.catch((error) => {
			console.log(error);
		})
	}
	// 确认
	onSubmit() {
		console.log('确认');
	}
	// 申诉
	onAppeal() {
		console.log('申诉');
	}
	render() {
		return (
			<div className="single-page" >
				<List className="salary-list">
					<Item wrap>
						<ul>
							<li>基本薪资：{this.state.baseSalay}</li>
							<li>饭补：{this.state.foodSubsidy}</li>
							<li>职称补助：{this.state.jobtitleSubsidy}</li>
							<li>学历补助：{this.state.educationSubsidy}</li>
						</ul>
					</Item>
					<Item wrap>
						<ul>
							<li>{month}月发放工资信息</li>
							<li>税前总薪资：{this.state.pretaxSalary}</li>
							<li>税后总薪资：{this.state.afttaxSalary}</li>
							<li>薪资获得：{this.state.totalSalary}</li>
							<li>加班所得：{this.state.overtimePay}</li>
							<li>考勤扣除：{this.state.attendanceDeduction}</li>
							<li>违规扣除：{this.state.outlineDeduction}</li>
							<li>五险扣除：{this.state.insuranceDeduction}</li>
							<li>公积金扣除：{this.state.providentFundDeduction}</li>
							<li>历史补偿：{this.state.historyPay}</li>
						</ul>
					</Item>
					<Item className="btn-group" >
						<Button type="primary" size="small" inline onClick={this.onSubmit} className="btn-sal">确认</Button>
						<Button size="small" inline style={{ marginLeft: '2.5px' }} onClick={this.onAppeal} className="btn-sal">薪资申诉</Button>
					</Item>
				</List>
			</div>
			
		)
	}
}

export default Salary;