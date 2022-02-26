import React from 'react'

const Tabs: React.FC<any> = ({ setTab, tab, setFilteredData }) => {
  const changeTab = (value: string) => {
    setTab(value)
    setFilteredData([])
  }
    return (
      <React.Fragment>
        <div className="contactBox">
          <div className="contactContainer">
            <button
              className={`contact favourite ${tab === "favourites" ? "active" : ""}`}
              onClick={() => changeTab("favourites")}
            >
              {" "}
              Favourites
            </button>
            <button
              className={`contact friends ${tab === "friends" ? "active" : ""}`}
              onClick={() => changeTab("friends")}
            >
              Friends
            </button>
            <button
              className={`contact groups ${tab === "groups" ? "active" : ""}`}
              onClick={() => changeTab("groups")}
            >
              Groups
            </button>
          </div>
        </div>
    </React.Fragment>
  )
}

export default Tabs
