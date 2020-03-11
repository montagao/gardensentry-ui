import React from 'react';
import './VideoGrid.scss';
import {VideoGridHeader} from "./VideoGridHeader/VideoGridHeader";
import {Divider} from "semantic-ui-react";
import {VideoPreview} from '../VideoPreview/VideoPreview';

export class VideoGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  };

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


        var eventVids = []
        for (var i = 0; i < data.length; i++) {
            var event = data[i];
            event.timestamp = (new Date(event.timestamp)).toUTCString();
            if ( i === data.length - 1){
              this.props.onVideoClick(event.vidUrl)
            }
            eventVids.push(
              <VideoPreview date={event.timestamp}
                  duration="0:05"
                  description={event.description}
                  url={event.vidUrl}
                  onVideoClick={this.props.onVideoClick}
                  id={i}
                  type={event.type.startsWith('http') ? event.type : 'http://via.placeholder.com/210x118'}
               />
            )
        }
        this.setState({ data: eventVids });}
       );
  } 


  render() {
    const divider = this.props.hideDivider ? null : <Divider/>;
    return (
      <React.Fragment>
        <VideoGridHeader title={this.props.title}></VideoGridHeader>
        <div className='video-grid'>
          {this.state.data == null ? "loading" : this.state.data.map(
            (vidPreview, index) => <div key={index}> {vidPreview} </div>)} 
        </div>
        {divider}
      </React.Fragment>
    );
  }
}
