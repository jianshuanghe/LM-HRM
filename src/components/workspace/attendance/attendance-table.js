import React from 'react';
import { Table, Icon } from 'antd';

class AttendanceTable extends React.Component{
	componentDidMount() {
		console.log('AttendanceTable mount');
	}
	render() {
		const columns = [{
		  title: '员工编号',
		  dataIndex: 'identifier',
		  key: 'identifier',
		}, {
		  title: '姓名',
		  dataIndex: 'name',
		  key: 'name',
		}, {
		  title: '职级',
		  dataIndex: 'rank',
		  key: 'rank',
		}, {
		  title: '部门',
		  dataIndex: 'department',
		  key: 'department',
		}, {
		  title: '日期',
		  dataIndex: 'date',
		  key: 'date',
		}, {
		  title: '上班时间',
		  dataIndex: 'arrive',
		  key: 'arrive',
		}, {
		  title: '下班时间',
		  dataIndex: 'leave',
		  key: 'leave',
		}, {
		  title: '正常工时',
		  dataIndex: 'common',
		  key: 'common',
		}, {
		  title: '常规加班工时',
		  dataIndex: 'overtime',
		  key: 'overtime',
		}, {
		  title: '996加班工时',
		  dataIndex: 'overtimenns',
		  key: 'overtimenns',
		}, {
		  title: '操作',
		  key: 'action',
		  render: (text, record) => (
		    <span>
		      <a href="#">Action</a>
		    </span>
		  ),
		}];

		const data = [{
		  key: '1',
		  identifier: '00000001',
		  name: 'John Brown',
		  age: 32,
		  address: 'New York No. 1 Lake Park',
		}, {
		  key: '2',
		  name: 'Jim Green',
		  age: 42,
		  address: 'London No. 1 Lake Park',
		}, {
		  key: '3',
		  name: 'Joe Black',
		  age: 32,
		  address: 'Sidney No. 1 Lake Park',
		}];
		return (
			<Table columns={columns} dataSource={data} />
		)
	}
}

export default AttendanceTable;
