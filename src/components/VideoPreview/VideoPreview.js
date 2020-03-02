import React from 'react';
import {Image} from 'semantic-ui-react';
import './VideoPreview.scss';

export class VideoPreview extends React.Component {
  render() {
    return (
      <div className='video-preview'>
        <div className='image-container'>
          <Image src='http://via.placeholder.com/210x118'/>
          <div className='time-label'>
            <span>{this.props.duration}</span>
          </div>
        </div>

        <div className='video-info'>
          <div className='semi-bold show-max-two-lines'>{this.props.description}</div>
          <div className='video-preview-metadata-container'>
            <div><span>{this.props.date}</span></div>
          </div>
        </div>
      </div>
    );
  }
}
