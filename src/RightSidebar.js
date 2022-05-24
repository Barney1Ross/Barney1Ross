import React from 'react'
import "./css/right.css"
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Avatar } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VideocamIcon from '@material-ui/icons/Videocam';
import SearchIcon from '@material-ui/icons/Search';

function RightSidebar() {
  return (
    <div className="widget">
      <div className="widget__header">
        <div className="Widget__headerLeft">
          <h4>Your Pages</h4>
        </div>
        <MoreHorizIcon/>
      </div>
      
      <div className="widget__body">
        <div className="widget__bodyOptions">
          <Avatar src="https://yt3.ggpht.com/ytc/AKedOLTnDE24EgQ21bQDUVcT_D7fdw-ZX6I7CURhzJ5o=s900-c-k-c0x00ffffff-no-rj"/>
          <h4>One MUFC</h4>
        </div>

        <div className="widget__bodyOptions ml10">
          <NotificationsNoneIcon/>
          <p>1 Notification</p>
        </div>

        <div className="widget__bodyOptions ml10">
          <VolumeUpIcon/>
          <p>Create Promotion</p>
        </div>
      </div>

      <hr/><br/>

      <div className="widget__header">
        <div className="widget__headerLeft">
          <h4>Contacts</h4>
        </div>
        <div className="widget__headerRight">
          <VideocamIcon/>
          <SearchIcon/>
          <MoreHorizIcon/>

      

        
      </div>

      </div>
        
        <div className="widget__body">
        <div className="widget__bodyOptions">
          <Avatar src="https://cdn.statusqueen.com/dpimages/thumbnail/Attitude_boy_dp_-2261.jpg"/>
          <h4>Asutosh Padhiary</h4>
        </div>

        <div className="widget__bodyOptions">
          <Avatar src="https://media.istockphoto.com/photos/man-holding-camera-take-photo-picture-id1126039311?k=20&m=1126039311&s=612x612&w=0&h=p3i9QULa1xNL9ww5XkCrJhoTZ3fwpCGyUZAO4-3HIGQ="/>
          <h4>Asish Mohanty</h4>
        </div>
        
        <div className="widget__bodyOptions">
          <Avatar src="https://w0.peakpx.com/wallpaper/75/243/HD-wallpaper-whatsapp-dp-black-cap-boy-cool-boy-cool-cowboy-flash-humor-negative-sunset.jpg"/>
          <h4>Debangshu Dikpati</h4>
        </div>

        <div className="widget__bodyOptions">
          <Avatar src="https://blogger.googleusercontent.com/img/a/AVvXsEjd4St6OIcN-Os85GHsJ7UnloqRKIkD_oANaTb224QIFJSTPm0vx9bDGaEiBJqxcVn9G3rX8cSGNe2oIpmw-Jo-ysGbkfUAV9IClkVsr1gh8JueKWk25H7O6yEgo9gVHBHYglGgOGyASR--4g8Cotyu6lscX1C2uXvrLYrNtvqUa155eQ_mT6Zofhg_=w360-h640"/>
          <h4>Subra Mohanty</h4>
        </div>

        <div className="widget__bodyOptions">
          <Avatar src="https://statusjin.com/thumb/512//files/DP%20Images/Boys%20DP%20Images/dp-image-for-boys-1.jpg"/>
          <h4>Kunal Singh</h4>
        </div>

        <div className="widget__bodyOptions">
          <Avatar src="https://1.bp.blogspot.com/-KCac1Bc-au8/YAh44W9d2sI/AAAAAAAAksw/8RNbaaiPcUwpLph2ZboRXUW5TsQf6x4VACLcBGAsYHQ/s1254/whatsapp%2Bdp%2Bimages%2Bfor%2Bboys%2B%252835%2529.jpg"/>
          <h4>Abhishek Sharma</h4>
        </div>

        <div className="widget__bodyOptions">
          <Avatar src="https://wallpapercave.com/wp/wp7460286.jpg"/>
          <h4>Amit Das</h4>
        </div>

        <div className="widget__bodyOptions">
          <Avatar src="https://statusjin.com/thumb/512//files/DP%20Images/Boys%20DP%20Images/dp-image-for-boys-19.jpg"/>
          <h4>Suraj SIngh</h4>
        </div>
        
      </div>

    </div>
  )
}

export default RightSidebar
