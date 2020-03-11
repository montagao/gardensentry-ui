import React from 'react';
import {Image} from 'semantic-ui-react';
import './VideoPreview.scss';

export class VideoPreview extends React.Component {
  constructor(props){
    super(props);
    this.onVideoClick = this.props.onVideoClick.bind(this);
  }

  render() {

    return (
      <div onClick={() => this.onVideoClick(this.props.url)} className='video-preview'>
        <div className='image-container'>
          <Image alt={this.props.description} src={this.props.type} width="210px" height="118px"/>
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
