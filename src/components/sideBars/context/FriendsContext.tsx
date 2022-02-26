import React, { createContext, ReactNode, Reducer, useReducer } from "react";
import axios from "axios";
import CurrentUserContext, { UserType } from '../../../contextAPI/userContext'
 

 

interface IUrl {
  friends: string;
  favourites: string;
  groups: string;
}

type ITab = "friends" | "groups" | "favourites";

const initialState = {
  friends: [],
  groups: [],
  favourites: [],
  loading: false,
  error: "",
  status: "",
};


export const FriendContext = createContext({});
   

const FriendContextWrapper: React.FC<{ children: ReactNode; }> = ({ children }) => {
  const { currentUser, authIsLoading, handleLogout } =
    React.useContext(CurrentUserContext);
  let token = currentUser.key
  
  const reducer: Reducer<any, any> = ( state: any, action: { type: string; payload?: any } ) => {
    switch (action.type) {
      case "GET_ALL_FRIENDS":
        return {
          ...state,
          friends: action.payload.friendList,
          loading: false,
          status: action.payload.status,
        };
      case "GET_ALL_GROUPS":
        return {
          ...state,
          groups: action.payload.groups,
          loading: false,
          status: action.payload.status,
        };
      case "GET_ALL_FAVOURITES":
        return {
          ...state,
          favourites: action.payload.Favorite,
          loading: false,
          status: action.payload.Status,
        };
      case "LOADING":
        return { ...state, loading: true };
      case "ERROR":
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getAllFriends = async (tab: ITab) => {
    const url: IUrl = {
      friends: "http://localhost:5000/users/friends",
      favourites: "http://localhost:5000/users/getallfavoritefriends",
      groups: "http://localhost:5000/group/all",
    };
  
    
    try {
      dispatch({ type: "LOADING" });
      const { data } = await axios.get(url[tab], {
         headers: { withCredentials: true, 'Authorization': `Bearer ${token}` },
      }
      );
      if (tab === "friends")
        dispatch({ type: "GET_ALL_FRIENDS", payload: data });
      if (tab === "favourites")
        dispatch({ type: "GET_ALL_FAVOURITES", payload: data });
      
      if (tab === "groups") dispatch({ type: "GET_ALL_GROUPS", payload: data });
        // console.log(data);
    } catch (error: any) {
      if (error.response) {
        dispatch({ type: "ERROR", payload: error.response.data });
      } else {
        dispatch({ type: "ERROR", payload: error.message });
      }
    }
  };
  return (
    <FriendContext.Provider
      value={{ state, getAllFriends, }} >
      {children}
    </FriendContext.Provider>
  );
};

export default FriendContextWrapper;
