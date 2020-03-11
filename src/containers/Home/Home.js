import React from 'react';
import {VideoGrid} from '../../components/VideoGrid/VideoGrid'
import './Home.scss';
import ReactPlayer from 'react-player'
import {InfoPanel} from '../../components/InfoPanel/InfoPanel'

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    }
  }

  componentDidMount() {
    this.setState({
      mainVid: "https://storage.googleapis.com/waterscarecrow_test_bucket1/2020/03/09/67438056",
    });

  }

  onVideoClick = (url) => {
    this.setState({
      mainVid: url,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className='home'>
          <div className='featured'>
            <InfoPanel dayIncidents={4}
            pastWeekIncidents={4}
            pastMonthIncidents={4}
            totalIncidents={4}/>
            <div className="MainPlayer">
              <ReactPlayer url={this.state.mainVid} controls/>
            </div>
          </div>
          <div className="responsive-video-grid-container">
            <VideoGrid title='Defense Incidents'
              events={this.props.events}
              onVideoClick={this.onVideoClick}/>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
