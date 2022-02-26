import React, { useState } from "react";
import dummyImage from "../HomeNav/assets/images/image1/img14.png";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import MinimizeRoundedIcon from "@mui/icons-material/MinimizeRounded";
import FullscreenRoundedIcon from "@mui/icons-material/FullscreenRounded";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

function FriendProfile({ data }: any) {
    console.log(data);
    
  return (
    <div className="profile__leftSection">
      {/* <!-- beginning of fullscreen minimize and close icons --> */}
      <div className="profile__leftSectionIcons">
        <CancelOutlinedIcon className="profile__leftSectionIcon close" />
        <MinimizeRoundedIcon className="profile__leftSectionIcon minimize" />
        <FullscreenRoundedIcon className="profile__leftSectionIcon fullscreen" />
      </div>
      {/* <!-- end of fullscreen minimize and close icons -->

    

     <!-- upload image begins --> */}

      <div className="profile__upload">
        <div className="profile__btnImage friend__profilePic">
          <div className="profile__uploadImage">
            <img src={data.Image} alt="img" />
          </div>
          <div className="profile__uploadIcon">
            {/* <PhotoCameraOutlinedIcon className="camera" /> */}
          </div>

          <div className="profile__uploadText Name__text"></div>
        </div>
      </div>

      {/* <!-- upload image ends -->

     <!-- text sections begin --> */}
      <div className="profile__detailsName">
        <div className="profile__details flex">
          <div className="profile__text">
            <h3>{data.Phone}</h3>
          </div>
          <div className="profile__textIcon"></div>
        </div>

        <div className="profile__textName">
          <h2>{data.Name}</h2>
        </div>
        <div className="profile__textDesc">
          <div className="profile__text">About </div>
          <p>{data.About ? data.About : "I am using Cloned whatsApp"}</p>
        </div>
      </div>
      <div className="profile__detailsAbout">
        <div className="profile__details flex">
          <div className="profile__textIcon">
            <button className="profile__btn">
              <img className="profile__btnImage" alt="" />
            </button>
          </div>
        </div>
              <div className="profile__textAbout"> Email: <span>{ data.Email}</span> </div>
      </div>
      {/* <!-- text sections end --> */}
    </div>
  );
}

export default FriendProfile;
