import React, { useState } from 'react'
import Avatar from "@material-ui/core/Avatar";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import VideoCameraBackOutlinedIcon from '@mui/icons-material/VideoCameraBackOutlined'
import SearchIcon from '@mui/icons-material/Search'
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import activeOnline from './assets/images/active-online-elipse/Chat/Ellipse 133.png'
import FriendProfile from '../friendprofile/FriendProfile';
import './HomeNav.css'
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
function HomeNav({ userData }: any) {

 const [state, setState] = useState<any>({
   isPaneOpen: false,
   isPaneOpenLeft: false,
 });


  return (
    <div>
      <div className="homenav__container">
        <div
          className="homenav__container-left"
          style={{ cursor: "pointer" }}
        >
          <div className="homenav__container-avatar" onClick={() => setState({ isPaneOpen: true })}>
            <Avatar src={userData.Image} alt="pic"  />
          </div>
          <div className="homenav__container-status">
            <div className="homenav__container-statusName">
              <span onClick={() => setState({ isPaneOpen: true })}>{userData.Name}</span>
              <span>
                <FavoriteBorderOutlinedIcon />
              </span>
            </div>
            <div className="homenav__container-statusIcon">
              <span>
                <img src={activeOnline} alt="ellipse_active" />
              </span>
              <span >Online</span>
            </div>
          </div>
        </div>
        <div className="homenav__container-right">
          <PhoneInTalkIcon />
          <VideoCameraBackOutlinedIcon />
          <SearchIcon />
          <ArrowDropDownCircleOutlinedIcon />
        </div>
      </div>

      <SlidingPane
        className="some-custom-class friend___profile"
        overlayClassName="some-custom-overlay-class"
        isOpen={state.isPaneOpen}
        title="Contact Info"
        // subtitle="Optional subtitle."
        onRequestClose={() => {
          setState({ isPaneOpen: false });
        }}
      >
        <div>
          <FriendProfile  data={userData} />
        </div>
      </SlidingPane>
    </div>
  );
}

export default HomeNav