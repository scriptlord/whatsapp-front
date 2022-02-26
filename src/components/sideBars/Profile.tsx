import React, {createContext} from 'react';
import Ellipse from './profilepic/Ellipse.png'
import profile from "./profilepic/profile.png";
import Select from 'react-select'
import CurrentUserContext, { UserType } from "../../contextAPI/userContext";


const Profile = (props:any) => {
   
  
  const { currentUser, authIsLoading, handleLogout } = React.useContext(CurrentUserContext);
    return (
      <React.Fragment>
        <div className="profileInfo">
          <div className="profileImage">
            <img className="profileImage" src={currentUser.profilePic} alt="profile" />
          </div>
          <span className="eclipse">
            <img className="status" src={Ellipse} alt="elipse" />
          </span>
          <span className="select">
            ^
            <div className="col-md-4"></div>
          </span>
        </div>
      </React.Fragment>
    );
};

export default Profile;
