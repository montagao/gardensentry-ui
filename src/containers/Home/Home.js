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
      dayCount: 0,
      monthCount: 0,
      yearCount: 0,
      totalCount: 0,
    }
  }

  componentDidMount() {
    fetch('http://gardensentry.systems/api/v1/events')
      .then(response => response.json())
      .then(data => {

        data.sort(function(a,b){
           var aTime = Date.parse(a.timestamp);
           var bTime = Date.parse(b.timestamp);
           if (aTime > bTime) {
             return -1;
           }
           if (bTime > aTime){
             return 1;
           }
           return 0;
        });
        let dayCount = 0;
        let monthCount = 0;
        let yearCount = 0;
        let totalCount = data.length;
        let now = new Date();

        var incrementCount = (date) =>  {
          if (date.getDay() === now.getDay()) dayCount++;
          if (date.getMonth() === now.getMonth()) monthCount++;
          if (date.getYear() === now.getYear()) yearCount++;
        };
        for (var i = 0; i < data.length; i++) {
            var event = data[i];
            var eventDate = new Date(event.timestamp)
            incrementCount(eventDate);
        }
        this.setState({ dayCount: dayCount, 
          monthCount: monthCount,
          yearCount: yearCount,
          totalCount: totalCount });
          
        }
       );
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
            <InfoPanel dayCount={this.state.dayCount}
            monthCount={this.state.monthCount}
            yearCount={this.state.yearCount}
            totalCount={this.state.totalCount}/>
            <div className="MainPlayer">
              <ReactPlayer url={this.state.mainVid} controls width="480px" height="360px"/>
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
