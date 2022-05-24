import React from 'react'
import Sidebaroptions from './Sidebaroptions'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./css/sidebar.css"
import { useStateValue } from './StateProvider';

function Sidebar() {

  const [{user}, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <Sidebaroptions src={user.photoURL} title={user.displayName}/>
      <Sidebaroptions src="https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/tInzwsw2pVX.png" title="Covid 19 Information Centre"/>
      <Sidebaroptions src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png" title="Friends"/>
      <Sidebaroptions src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png" title="Marketplace"/>
      <Sidebaroptions src="http://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png" title="Watch"/>
      <Sidebaroptions src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/AYj2837MmgX.png" title="Memories"/>
      <Sidebaroptions src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/2uPlV4oORjU.png" title="Saved"/>
      <Sidebaroptions src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/9-o1e6LN_TX.png" title="Events"/>
      <Sidebaroptions src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/i7hepQ2OeZg.png" title="Pages"/>
      <Sidebaroptions src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/FGO-FBo3R2E.png" title="Most Recent"/>
      <Sidebaroptions src="https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/Zy9sJGThmCS.png" title="Favorites"/>
      <Sidebaroptions Icon={ExpandMoreIcon} title="See More"/>
    </div>
  )
}

export default Sidebar
