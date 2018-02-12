import React from 'react';
import { List, WhiteSpace, Button, Modal, WingBlank, Toast} from 'antd-mobile';
import axios from 'axios';
import './salary.css';
const querystring = require('query-string');
const Item = List.Item;
const Brief = Item.Brief;
const month = (new Date()).getMonth();
const alert = Modal.alert;
const salarySure = '薪资显示试行开放，确认无误后薪资信息将不可查询，如有薪资问题可点击薪资申诉，取消后默认保存一周时间！';
const showAlert = () => {
  const alertInstance = alert('Delete', 'Are you sure???', [
    { text: 'Cancel', onPress: () => console.log('cancel'), style: 'default' },
    { text: 'OK', onPress: () => console.log('ok') },
  ]);
  setTimeout(() => {
    // 可以调用close方法以在外部close
    console.log('auto close');
    alertInstance.close();
  }, 500000);
};
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
		// let params = {userId: "0"};
		// let params = {userid: "5a43360e2e196109f457a509"};
		axios.get('/server0/salarySheet/queryById',{
			params:{
				userid: "5a43360e2e196109f457a509"
			}
		})
		.then((resp) => {
			console.log(resp);
			let result = (resp.data)[0];
			let pretaxSalary = (result.baseSalary+result.foodSubsidy+result.jobtitleSubsidy+result.educationSubsidy);
			let afttaxSalary = pretaxSalary - result.tax;
			this.setState({
				baseSalay: result.baseSalary,
				foodSubsidy: result.foodSubsidy,
				jobtitleSubsidy: result.jobtitleSubsidy,
				educationSubsidy: result.educationSubsidy,
	
				pretaxSalary: pretaxSalary,
				afttaxSalary: result.jobtitleSubsidy ,
				totalSalary: result.totalSalary,
				overtimePay: result.overtimePay,
				attendanceDeduction: result.attendanceDeduction,
				otherDeduction: result.otherDeduction,
				insuranceDeduction: result.insuranceDeduction,
				providentFundDeduction: result.providentFundDeduction,
				tax: result.tax,
				historyPay: result.otherSubsidy
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
							<li>{month === 0? '12' : month}月发放工资信息</li>
							<li>税前总薪资：{this.state.pretaxSalary}</li>
							<li>税后总薪资：{this.state.afttaxSalary}</li>
							<li>薪资获得：{this.state.totalSalary}</li>
							<li>加班所得：{this.state.overtimePay}</li>
							<li>考勤扣除：{this.state.attendanceDeduction}</li>
							<li>违规扣除：{this.state.otherDeduction}</li>
							<li>五险扣除：{this.state.insuranceDeduction}</li>
							<li>公积金扣除：{this.state.providentFundDeduction}</li>
							<li>历史补偿：{this.state.historyPay}</li>
						</ul>
					</Item>
					<Item className="btn-group" >
							<Button type="primary" size="small" inline className="btn-sal" onClick={() => alert('薪资确认提示', salarySure, [
								{ 	text: '确认', 
									onPress: () => new Promise((resolve) => {
										Toast.info('已确认薪资', 1);
										setTimeout(resolve, 1000);
									})
								},
								{
									text: '取消'
								},
								])}
							>确认</Button>
							<Button  size="small" inline className="btn-sal" style={{ marginLeft: '2.5px' }} onClick={() => alert('Delete', 'Are you sure???', [
								{ 	text: 'Cancel', 
									onPress: () => new Promise((resolve) => {
										Toast.info('onPress Promise', 1);
										setTimeout(resolve, 1000);
									})
								},
								{
									text: 'Ok',
									onPress: () => console.log('cancel')
								},
								])}
							>薪资申诉</Button>
					</Item>
				</List>
			</div>
			
		)
	}
}

export default Salary;