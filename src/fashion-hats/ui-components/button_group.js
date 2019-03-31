import React, { Component } from 'react';
import { AppContext }  from '../../app-context';

export default class ButtonGroup extends React.Component{
	render(){
		return <AppContext.Consumer>
			{(context) => <div> { 
				this.props.buttonList.map((button, i) => 
					<button 
						className={'btn ' + ( button.class || '' )} 
						key={`${i}-{button.text}`} 
						onClick={ () => context[button.callBack]() }>{button.text}</button>
				)} 
			</div> }
		</AppContext.Consumer>
	}
};