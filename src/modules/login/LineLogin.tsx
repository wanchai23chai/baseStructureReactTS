import React, { Component } from 'react'
import logo from '../../asset/Line_Base.png';
import './lineLogin.css';
import LIFF from '../../common/LineLoginBase';
export default class LineLogin extends Component<any> {
	liff = LIFF
	constructor(props: any) {
		super(props)
		this.onClickLogin = this.onClickLogin.bind(this)
	}
	async onClickLogin() {
		await this.liff.initialize()
		if (this.props.onClick) {
			this.props.onClick(this.liff)
		}
	};
	render() {
		return (
			<React.Fragment>
				<button className='button-no-default button-expand-90 line-button' onClick={this.onClickLogin}>
					<img src={logo} alt='line'></img>
					<label>Log in with LINE @chai</label>
				</button>
			</React.Fragment>
		)
	}
}
