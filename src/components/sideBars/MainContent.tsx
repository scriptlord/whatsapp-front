import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HomeNav from "../HomeNav/HomeNav";
import HomeBody from "../HomeBody/HomeBody";
import HomeFooter from "../HomeFooter/HomeFooter";
import axios from "axios";
import CurrentUserContext, { UserType } from "../../contextAPI/userContext";
import ConversationComponents from "../Chat/ConversationComponents";


function MainContent({ userId, messages }: { userId: string, messages: any }) {
  
  const { currentUser, authIsLoading, handleLogout } = React.useContext(CurrentUserContext);
  let token = currentUser.key;
  const [selectedChat, setChat] = useState();
  
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const getUserProfile = async () => {
      const response = await axios.get(
        `http://localhost:5000/users/otheruserinfo/${userId}`,
        {
          headers: { withCredentials: true, Authorization: `Bearer ${token}` },
        }
      );
      setUserData(response.data);
    };
    getUserProfile()
  }, [userId]);

  return (
    <Wrapper>
      <HomeNav userData={userData} />
      {/* <HomeBody messages={messages} /> */}
      <ConversationComponents
        userData={userData}
        messages={messages}
        selectedChat={selectedChat}
      />
      <HomeFooter userData={userData} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: #fafafa;
  flex: 0.85;
  padding-left: 2em;
  margin: 0;
`;

export default MainContent;
