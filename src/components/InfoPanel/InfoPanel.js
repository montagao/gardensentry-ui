import React from 'react';
import './InfoPanel.scss';
import Logo from '../../assets/logo.png'

export class InfoPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  };

  componentDidMount() {
  } 


  render() {
    return (
      <div>
        {/*
        <div className='logo'>
          <img alt='Garden Sentry ' src={Logo} width="100em" height="100em"/>
        </div>*/}
        <div className='analytics'>
          <div className='title'> <h3>Garden Sentry<br/> Dashboard</h3></div>
          <div className='stats'>
            <b>Current Status: </b> Monitoring... <br/>
            <b>Defense Incidents</b> <br/>
            Today: {this.props.dayCount} <br/>
            Past Month: {this.props.monthCount} <br/>
            Past Year: {this.props.yearCount} <br/>
            All Time: {this.props.totalCount} <br/>
          </div>
        </div>
      </div>
    );
  }
}
