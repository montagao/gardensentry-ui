import React from 'react';
import {VideoGrid} from '../../components/VideoGrid/VideoGrid'
import './Home.scss';

export class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className='home'>
          <div className="responsive-video-grid-container">
            <VideoGrid title='Trending'/>
            <VideoGrid title='Autos & Vehicles' hideDivider={true}/>
          </div>
        </div>
      </React.Fragment>
    )
  }
}