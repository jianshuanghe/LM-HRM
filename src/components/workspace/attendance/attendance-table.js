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
    // console.log('handleChange 111111');
    const value = e.target.value;
    this.setState({ value });
  }
  render() {
    // console.log('render 11111');
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
      title: '职级',
      dataIndex: 'rank',
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'rank', text),
    }, {
      title: '部门',
      dataIndex: 'department',
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'department', text),
    }, {
      title: '日期',
      dataIndex: 'date',
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'date', text),
    }, {
      title: '上班时间',
      dataIndex: 'arrive',
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'arrive', text),
    }, {
      title: '下班时间',
      dataIndex: 'leave',
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'leave', text),
    }, {
      title: '正常工时',
      dataIndex: 'common',
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'common', text),
    }, {
      title: '常规加班工时',
      dataIndex: 'overtime',
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'overtime', text),
    }, {
      title: '996加班工时',
      dataIndex: 'overtimenns',
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'overtimenns', text),
    }, {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record, index) => {
        const { editable } = this.state.data[index].name;
        return (
          <div className="editable-row-operations">
            {
              editable ?
                <span>
                  <a onClick={() => this.editDone(index, 'save')}>保存</a>
                  <Popconfirm title="确定取消?" onConfirm={() => this.editDone(index, 'cancel')}>
                    <a>取消</a>
                  </Popconfirm>
                </span>
                :
                <span>
                  <a onClick={() => this.edit(index)}>编辑</a>
                </span>
            }
          </div>
        );
      },
    }];
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
        rank: {
          editable: false,
          value: '32',
        },
        department: {
          editable: false,
          value: '32',
        },
        date: {
          editable: false,
          value: '32',
        },
        arrive: {
          editable: false,
          value: '32',
        },
        leave: {
          editable: false,
          value: '32',
        },
        common: {
          editable: false,
          value: '32',
        },
        overtime: {
          editable: false,
          value: '32',
        },
        overtimenns: {
          editable: false,
          value: '32',
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
        rank: {
          editable: false,
          value: '32',
        },
        department: {
          editable: false,
          value: '32',
        },
        date: {
          editable: false,
          value: '32',
        },
        arrive: {
          editable: false,
          value: '32',
        },
        leave: {
          editable: false,
          value: '32',
        },
        common: {
          editable: false,
          value: '32',
        },
        overtime: {
          editable: false,
          value: '32',
        },
        overtimenns: {
          editable: false,
          value: '322',
        },
      }],
    };
  }
  getDataFromFather() {
    console.log('getDataFromFather');
    const { data } = this.props;
    console.log(data);
    let dataTemp = [];
    for (let i = 0; i < data.length; i++) {
      debugger;
      let temp = JSON.parse(JSON.stringify(this.state.dataEg[0]));
      // alert(i);
      console.log('temp');
      console.log(temp);
      console.log(this.state.dataEg[0]);
      Object.keys(temp).forEach((item) => {
        // console.log(item);
        if (item === 'key') {
          // console.log('key &&&&&&&data[i].identifier');
          // console.log(data[i].identifier);
          temp[item] = data[i].identifier;
        }
        // console.log(data[i][item]);
        if (data[i][item] !== undefined) {
          // console.log(data[i][item]);
          temp[item].value = data[i][item];
        }
      });
      console.log(temp);
      dataTemp[i] = temp;
    }
    console.log('dataTemp B');
    console.log(dataTemp);
    console.log('dataTemp A');
    this.setState({ data: dataTemp });
    console.log(this.state);
  }
  renderColumns(data, index, key, text) {
    // console.log('renderColumns');
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
    // console.log('render 22222');
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
