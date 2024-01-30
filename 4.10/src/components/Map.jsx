import { useEffect, useRef } from "react";
import mapImage from "../assets/map.jpg";

export default function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    console.log("zooming...");
    mapRef.current.setZoomLevel(1);
  }, []);

  return (
    <div>
      <div>
        <img ref={mapRef} src={mapImage} alt="World Map" width={400} />
      </div>
    </div>
  );
}
