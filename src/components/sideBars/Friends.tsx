import React from "react";
import profile from "./image/1.png";


const Menu: React.FC<{ friend: any[], setUserId: (value: string) => void }> = (props) => {
  return (
    <React.Fragment>
      {props.friend?.length > 0 ? (
        props.friend.map((data: any) => {
          return (
            <div key={data._id} className="messagetBox">
              <div className="messageContainer">
                <div className="message">
                  <img
                    className="propic"
                    src={data.profilePic}
                    alt="propic"
                    width="48"
                    height="48"
                  />
                </div>
                <div onClick={() => props.setUserId(data.userId)} className="messagebody">
                  <span className="displayName"> {data.fullName}</span>
                  <p className="messageText"> how are you doing </p>
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
        <div className="NotFound">No Friend Found</div>
      )}
    </React.Fragment>
  );
};

export default Menu;
