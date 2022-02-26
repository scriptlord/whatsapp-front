import React from "react";
import profile from "./image/1.png";

const Groups: React.FC<{ groups: any[] }> = (props) => {
  return (
    <React.Fragment>
      
      {props.groups.length>0?(
        props.groups.map((data: any) => {
        return (
          <div key={data._id} className="messagetBox">
            <div className="messageContainer">
              <div className="message">
                <img
                  className="propic"
                  src={profile}
                  alt="propic"
                  width="48"
                  height="48"
                />
              </div>
              <div className="messagebody">
                <span className="displayName"> {data.group_name}</span>
                <p className="messageText"> </p>
              </div>
              <div className="textfine">
                <span className="messageTime"> 1:23</span>
                <p className="others"> ✅ </p>
              </div>
            </div>
          </div>
        );
      })): (
        <div className="NotFound">No Group Found</div>
      )}
    </React.Fragment>
  );
};

export default Groups;
