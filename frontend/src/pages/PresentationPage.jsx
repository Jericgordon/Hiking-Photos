import TrailNavbar from "../components/NavBar";
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import ServerConnector from "../modules/ServerConnector.js"
import Map from "../components/Map.jsx"

export default function PresentationPage() {
  const [openPic, setOpenPic] = useState(() => -1);
  const [percent, setCurrentPercent] = useState(() => -1);
  const location = useLocation();
  const url = ServerConnector.getURLforMap(location.state.user,location.state.Percent1,location.state.Percent2); //format the query appropriately
  console.log(url)
  return (
    <>
      <TrailNavbar />
      <h1>Presentation Page</h1>
      <Map url={url} percent={percent} setCurrentPercent={setCurrentPercent} openPic={openPic} setOpenPic={setOpenPic}/>

      <div className="contentContainer"></div>
    </>
  );
}
