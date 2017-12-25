import React from 'react';
import { List, WhiteSpace, Button} from 'antd-mobile';
import './salary.css';

const Item = List.Item;
const Brief = Item.Brief;
const month = (new Date()).getMonth();

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
		console.log('componentWillMount attendance');
		// this.query();
		setTimeout(() => {
			this.setState({
				baseSalay: '120000元',
				foodSubsidy: '350元',
				jobtitleSubsidy: '300元',
				educationSubsidy: '300元',
	
				pretaxSalary: '12000元',
				afttaxSalary: '10000元',
				totalSalary: '8000元',
				overtimePay: '2000元',
				attendanceDeduction: '200元',
				outlineDeduction: '500元',
				insuranceDeduction: '800元',
				houseFundDeduction: '500元',
				tax: '300元',
				historyPay: '0元'
			});
		}, 100);
	}
	query() {
		
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
							<li>公积金扣除：{this.state.houseFundDeduction}</li>
							<li>历史补偿：{this.state.historyPay}</li>
						</ul>
					</Item>
					<Item className="btn-group" >
						<Button type="primary" size="small" inline onClick={this.onSubmit} className="btn-sal">确认</Button>
						<Button size="small" inline style={{ marginLeft: '2.5px' }} onClick={this.onReset} className="btn-sal">薪资申诉</Button>
					</Item>
				</List>
			</div>
			
		)
	}
}

export default Salary;