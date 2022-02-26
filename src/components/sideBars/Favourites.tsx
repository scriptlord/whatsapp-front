import React, { useEffect, useState } from "react";
import profile from "./image/1.png";

const Favourites: React.FC<{ favourites: any[] }> = (props) => {
  return (
    <React.Fragment>
      {props.favourites?.length > 0 ? (
        props.favourites.map((data: any, key: any) => {
          return (
            <div key={key} className="messagetBox">
              <div className="messageContainer">
                <div className="message">
                  <img
                    className="propic"
                    src={data.profile ? data.profilePic : profile}
                    alt="propic"
                    width="48"
                    height="48"
                  />
                </div>
                <div className="messagebody">
                  <span className="displayName"> {data}</span>
                  <p className="messageText"> still working on the profile</p>
                </div>
                <div className="textfine">
                  <span className="messageTime"> 1:23</span>
                  <p className="others"> ✅ </p>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="NotFound">No Favourite Found</div>
      )}
    </React.Fragment>
  );
};

export default Favourites;
