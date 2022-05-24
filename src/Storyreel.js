import { Avatar } from '@material-ui/core'
import userEvent from '@testing-library/user-event'
import React from 'react'
import "./css/story.css"
import { useStateValue } from './StateProvider';
function Storyreel() {

  const [{user}, dispatch] = useStateValue();
  return (
      <div className="storyReel">
          <div className="story" style={{backgroundImage:`url(https://barbarashdwallpapers.com/wp-content/uploads/2013/11/manchester-united-wallpaper-1.jpg)`}}>
              <Avatar src={user.photoURL}/>
              <h4>{user.displayName}</h4>
            </div>
        
            <div className="story" style={{backgroundImage:`url(https://cdn.wallpapersafari.com/7/34/kcxs95.jpg)`}}>
              <Avatar src="https://cdn.statusqueen.com/dpimages/thumbnail/Attitude_boy_dp_-2261.jpg"/>
              <h4>Asutosh Padhiary</h4>
            </div>

            <div className="story" style={{backgroundImage:`url(https://cdn.wallpapersafari.com/63/67/4BsGqt.jpg)`}}>
              <Avatar src="https://media.istockphoto.com/photos/man-holding-camera-take-photo-picture-id1126039311?k=20&m=1126039311&s=612x612&w=0&h=p3i9QULa1xNL9ww5XkCrJhoTZ3fwpCGyUZAO4-3HIGQ="/>
              <h4>Asish Mohanty</h4>
            </div>

            <div className="story" style={{backgroundImage:`url(https://browsecat.net/sites/default/files/psg-hd-wallpapers-117768-739667-5097344.png)`}}>
              <Avatar src="https://w0.peakpx.com/wallpaper/75/243/HD-wallpaper-whatsapp-dp-black-cap-boy-cool-boy-cool-cowboy-flash-humor-negative-sunset.jpg"/>
              <h4>Debangshu Dikpati</h4>
            </div>

            <div className="story" style={{backgroundImage:`url(https://images5.alphacoders.com/770/thumb-1920-770521.jpg)`}}>
              <Avatar src="https://blogger.googleusercontent.com/img/a/AVvXsEjd4St6OIcN-Os85GHsJ7UnloqRKIkD_oANaTb224QIFJSTPm0vx9bDGaEiBJqxcVn9G3rX8cSGNe2oIpmw-Jo-ysGbkfUAV9IClkVsr1gh8JueKWk25H7O6yEgo9gVHBHYglGgOGyASR--4g8Cotyu6lscX1C2uXvrLYrNtvqUa155eQ_mT6Zofhg_=w360-h640"/>
              <h4>Subra Mohanty</h4>
            </div>
      </div>
  )
}

export default Storyreel
        
 

