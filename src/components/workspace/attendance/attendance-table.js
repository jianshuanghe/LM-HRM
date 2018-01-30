import React from 'react';
import { Table, Input, Popconfirm } from 'antd';

class EditableCell extends React.Component {
  state = {
    value: this.props.value,
    editable: this.props.editable || false,
  }
  componentWillReceiveProps(nextProps) {
  	// console.log('componentWillReceiveProps');
  	// console.log(this.props.data);
    if (nextProps.editable !== this.state.editable) {
      this.setState({ editable: nextProps.editable });
      if (nextProps.editable) {
        this.cacheValue = this.state.value;
      }
    }
    if (nextProps.status && nextProps.status !== this.props.status) {
      if (nextProps.status === 'save') {
        this.props.onChange(this.state.value);
      } else if (nextProps.status === 'cancel') {
        this.setState({ value: this.cacheValue });
        this.props.onChange(this.cacheValue);
      }
    }
    // console.log(this.props.table);
  }
  shouldComponentUpdate(nextProps, nextState) {
           // console.log('shouldComponentUpdate');
           // console.log(this.props);
    return nextProps.editable !== this.state.editable ||
           nextState.value !== this.state.value;
  }
  // componentDidMount() {
  //   console.log('componentDidMount');
  //   console.log(this.props.table);
  // }
  handleChange(e) {
    const value = e.target.value;
    this.setState({ value });
  }
  render() {
    const { value, editable } = this.state;
    return (
      <div>
        {
          editable ?
            <div>
              <Input
                value={value}
                onChange={e => this.handleChange(e)}
              />
            </div>
            :
            <div className="editable-row-text">
              {value.toString() || ' '}
            </div>
        }
      </div>
    );
  }
}

class EditableTable extends React.Component {
  // componentWillReceiveProps(nextProps){
  //   console.log('componentWillReceiveProps EditableTable###');
  //   console.log(this.props);
  //   console.log(nextProps);
  //   console.log(this.state);
  //   // this.setState(data: nextProps);
  //   // this.getDataFromFather();
  // }
  // componentDidMount() {
  //   console.log('componentDidMount EditableTable');
  //   console.log(this.props);
  // }
  // componentDidUpdate() {
  //   console.log('componentDidUpdate EditableTable');
  //   console.log(this.props);
  //   // this.getDataFromFather();
  // }
  constructor(props) {
    super(props);
    this.columns = [{
      title: '员工编号',
      dataIndex: 'identifier',
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'identifier', text),
    }, {
      title: '姓名',
      dataIndex: 'name',
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'name', text),
    }, {
      title: '额定工时',
      dataIndex: 'ratedWorkingHours',
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'ratedWorkingHours', text),
    }, {
      title: '实际工时',
      dataIndex: 'actualWorkingHours',
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'actualWorkingHours', text),
    }, {
      title: '加班工时',
      dataIndex: 'overtimeWorkingHours',
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'overtimeWorkingHours', text),
    }, {
      title: '迟到时长',
      dataIndex: 'lateHours',
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'lateHours', text),
    }, {
      title: '早退时长',
      dataIndex: 'earlyHours',
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'earlyHours', text),
    }, {
      title: '请假时长',
      dataIndex: 'leaveHours',
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'leaveHours', text),
    }, {
      title: '旷工时长',
      dataIndex: 'absentHours',
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'absentHours', text),
    }, {
      title: '是否打卡',
      dataIndex: 'isPunchCard',
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'isPunchCard', text),
    },  {
      title: '迟到次数',
      dataIndex: 'latetimes',
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'latetimes', text),
    }
    // , {
    //   title: '操作',
    //   dataIndex: 'operation',
    //   render: (text, record, index) => {
    //     const { editable } = this.state.data[index].name;
    //     return (
    //       <div className="editable-row-operations">
    //         {
    //           editable ?
    //             <span>
    //               <a onClick={() => this.editDone(index, 'save')}>保存</a>
    //               <Popconfirm title="确定取消?" onConfirm={() => this.editDone(index, 'cancel')}>
    //                 <a>取消</a>
    //               </Popconfirm>
    //             </span>
    //             :
    //             <span>
    //               <a onClick={() => this.edit(index)}>编辑</a>
    //             </span>
    //         }
    //       </div>
    //     );
    //   },
    // }
    ];
    this.state = {
      dataEg: [{
        key: '0',
        identifier: {
          editable: false,
          value: '32',
        },
        name: {
          editable: false,
          value: '32',
        },
        ratedWorkingHours: {
          editable: false,
          value: '32',
        },
        actualWorkingHours: {
          editable: false,
          value: '32',
        },
        overtimeWorkingHours: {
          editable: false,
          value: '32',
        },
        lateHours: {
          editable: false,
          value: '32',
        },
        earlyHours: {
          editable: false,
          value: '32',
        },
        leaveHours: {
          editable: false,
          value: '32',
        },
        absentHours: {
          editable: false,
          value: '32',
        },
        isPunchCard: {
          editable: false,
          value: '32',
        },
        latetimes: {
          editable: false,
          value: '0',
        },
      }],
      data: [{
        key: '0',
        identifier: {
          editable: false,
          value: '32',
        },
        name: {
          editable: false,
          value: '32',
        },
        ratedWorkingHours: {
          editable: false,
          value: '32',
        },
        actualWorkingHours: {
          editable: false,
          value: '32',
        },
        overtimeWorkingHours: {
          editable: false,
          value: '32',
        },
        lateHours: {
          editable: false,
          value: '32',
        },
        earlyHours: {
          editable: false,
          value: '32',
        },
        leaveHours: {
          editable: false,
          value: '32',
        },
        absentHours: {
          editable: false,
          value: '32',
        },
        isPunchCard: {
          editable: false,
          value: '322',
        },
        latetimes: {
          editable: false,
          value: '322',
        },
      }],
    };
  }
  getDataFromFather() {
    console.log('getDataFromFather');
    const { data } = this.props;
    let dataTemp = [];
    for (let i = 0; i < data.length; i++) {
      let temp = JSON.parse(JSON.stringify(this.state.dataEg[0]));
      Object.keys(temp).forEach((item) => {
        if (item === 'key') {
          temp[item] = Math.random();
        }
        if (data[i][item] !== undefined) {
          temp[item].value = data[i][item];
        }
      });
      dataTemp[i] = temp;
    }
    this.setState({ data: dataTemp });
  }
  renderColumns(data, index, key, text) {
    const { editable, status } = data[index][key];
    if (typeof editable === 'undefined') {
      return text;
    }
    return (<EditableCell
      editable={editable}
      value={text}
      onChange={value => this.handleChange(key, index, value)}
      status={status}
    />);
  }
  handleChange(key, index, value) {
    console.log('handleChange 22222');
    const { data } = this.state;
    data[index][key].value = value;
    this.setState({ data });
  }
  edit(index) {
    console.log('edit');
    const { data } = this.state;
    Object.keys(data[index]).forEach((item) => {
      if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
        data[index][item].editable = true;
      }
    });
    this.setState({ data });
  }
  editDone(index, type) {
    console.log('editDone');
    const { data } = this.state;
    Object.keys(data[index]).forEach((item) => {
      if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
        data[index][item].editable = false;
        data[index][item].status = type;
      }
    });
    this.setState({ data }, () => {
      Object.keys(data[index]).forEach((item) => {
        if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
          delete data[index][item].status;
        }
      });
    });
  }
  render() {
    // const rowSelection = {
    //   onChange: (selectedRowKeys, selectedRows) => {
    //     console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    //   },
    //   onSelect: (record, selected, selectedRows) => {
    //     console.log(record, selected, selectedRows);
    //   },
    //   onSelectAll: (selected, selectedRows, changeRows) => {
    //     console.log(selected, selectedRows, changeRows);
    //   },
    //   getCheckboxProps: record => ({
    //     disabled: record.name === 'Disabled User',    // Column configuration not to be checked
    //   }),
    // };
    const { data } = this.state;
    const dataSource = data.map((item) => {
      const obj = {};
      Object.keys(item).forEach((key) => {
        obj[key] = key === 'key' ? item[key] : item[key].value;
      });
      return obj;
    });
    const columns = this.columns;
    return <Table bordered dataSource={dataSource} columns={columns} />;
  }
}

export default EditableTable;
