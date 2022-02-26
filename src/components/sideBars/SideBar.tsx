import React, { useEffect, useState, useContext } from "react";

import Tabs from "./Tabs";
import Friends from "./Friends";
import Profile from "./Profile";
import { FriendContext } from "./context/FriendsContext";
import Groups from "./Groups";
import Favourites from "./Favourites";
import SearchTerm from "./Search";

const SideBar: React.FC<any> = (props) => {
  const [tab, setTab] = useState<string>("friends")
  const { state, getAllFriends } = useContext(FriendContext) as any;
  const [filteredData, setFilteredData] = useState<any[]>([])
  const [inputValue, setInputValue] = useState<string>("")
  const [currentUser, setCurrentUser] =  useState();


  useEffect(() => {
    getAllFriends(tab)
  }, [tab]);

  return (
    <React.Fragment>
      <div className="sidebar">
        <div className="top-sidebar">
          <Profile currentUser={currentUser} />
          <SearchTerm
            placeholder="Search or start a new chat"
            data={state[tab]}
            setFilteredData={setFilteredData}
            filteredData={filteredData}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          <Tabs setTab={setTab} tab={tab} setFilteredData={setFilteredData} />
        </div>
        <div className="bottom-sidebar">
          {tab === "friends" && (
            <Friends
              friend={inputValue ? filteredData : state.friends}
              setUserId={props.setUserId}
            />
          )}
          {tab === "groups" && (
            <Groups groups={inputValue ? filteredData : state.groups} />
          )}
          {tab === "favourites" && (
            <Favourites
              favourites={inputValue ? filteredData : state.favourites}
            />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SideBar;
