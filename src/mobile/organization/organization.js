import React from 'react';
import {Tree} from 'antd';
import './organization.css';

const TreeNode = Tree.TreeNode;

const posts = [{
				id: 1,
				title: '藜麦信息', 
				content:[{
					id: 11, 
					title: '总经办', 
					content:[{
						id: 111, 
						title: '杨总'
					}]
				},{
					id: 12, 
					title: '技术部', 
					content: [{
						id: 121, 
						title: '张总'
					},{
						id: 122, 
						title: '韩总'
					}]
				},{
					id: 13, 
					title: '人力资源部', 
					content: [{
						id: 131, 
						title: '杨总'
					},{
						id: 132, 
						title: '路总'
					}]
				}]
			}];
class Organization extends React.Component{

	constructor(props) {
		super(props);
	}

	onSelect = (selectedKeys, info) => {
	    console.log('selected', selectedKeys, info);
	}

	render() {
		return (
			<div>
			    <Tree onSelect={this.onSelect} className="fontsize">
			    	{posts.map((one)=>{
			    		return (
							<TreeNode title={one.title} key={one.id}>
								{one.content.map((two)=>{
									return (
										<TreeNode title={two.title} key={two.id}>
											{two.content.map((three)=>{
												return (
													<TreeNode title={three.title} key={three.id} />
												)
											})}
										</TreeNode>
									)
								})}
							</TreeNode>
			    		)
			    	})}
			    </Tree>
			</div>
		)
	}
}

export default Organization;
