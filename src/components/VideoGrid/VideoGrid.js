import React from 'react';
import './VideoGrid.scss';
import {VideoGridHeader} from "./VideoGridHeader/VideoGridHeader";
import {Divider} from "semantic-ui-react";
import {VideoPreview} from '../VideoPreview/VideoPreview';

export function VideoGrid(props) {
  const divider = props.hideDivider ? null : <Divider/>;
  return (
    <React.Fragment>
      <VideoGridHeader title={props.title}></VideoGridHeader>
      <div className='video-grid'>
        <VideoPreview date="2020-02-14 5:00PM" duration="0:30" description="defence incident"/>
        <VideoPreview date="2020-03-14 12:00PM" duration="0:30" description="defence incident"/>
        <VideoPreview date="2020-02-14 8:00AM" duration="0:30" description="defence incident"/>
        <VideoPreview date="2020-02-14 7:00AM" duration="0:30" description="defence incident"/>
        <VideoPreview date="2020-02-14 10:00AM" duration="0:30" description="defence incident"/>
        <VideoPreview date="2020-02-14 2:00PM" duration="0:30" description="defence incident"/>
      </div>
      {divider}
    </React.Fragment>
  );
}
