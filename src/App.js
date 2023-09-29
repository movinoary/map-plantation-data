// Module
import { useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";
// Data
import GeoJson from "./Perkebunan.json";
import { dataInformasi } from "./informasi";
// Icon
import iconCengkeh from "./assets/icon-cengkeh.png";
import iconTembakau from "./assets/icon-tembakau.png";
import iconTeh from "./assets/icon-teh.png";
import iconTebu from "./assets/icon-tebu.png";
import iconKelapaSawit from "./assets/icon-kelapa-sawit.png";

// API Key
const key = "AIzaSyCMIymRGP2269UN51fSxhyO4q6uR271Qnc";

function App() {
  // Menyimpan id popup yang akan ditampilkan
  const [select, setSelect] = useState("");
  // Untuk menampilkan data
  const [isView, setIsView] = useState(false);
  // Untuk menampilkan popup berdasarkan yang di klik
  const [isSelect, setIsSelect] = useState("");
  // Untuk menampilkan informasi data
  const [isInfo, setIsInfo] = useState(false);
  // Mengakses API key dari google maps
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: key,
  });

  // Membuka Popup
  const handleOpenPopup = (item) => {
    setSelect(item);
    setIsSelect(true);
  };

  // Menutup Popup
  const handleClosePopup = () => {
    setSelect("");
    setIsSelect(false);
  };

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
      <div
        onClick={() => setIsView(!isView)}
        className={!isView ? "modal show-data" : "modal hide-data"}
      >
        {!isView ? "Show Data" : "Hide Data"}
      </div>
      {isView && (
        <>
          <button className="btn-info" onClick={() => setIsInfo(!isInfo)}>
            v
          </button>
          {isInfo && (
            <section className="menu">
              {dataInformasi.map((item, index) => (
                <div key={index} className="row-info">
                  <img src={item.icon} alt={item.name} width={20} />
                  <p>{item.name}</p>
                </div>
              ))}
            </section>
          )}
        </>
      )}
      <GoogleMap
        zoom={5}
        center={{ lng: 119.44775991988962, lat: -2.585964150398297 }}
        mapContainerClassName="map-container"
      >
        {isView &&
          GeoJson.features.map((item, index) => {
            const coordinates = {
              lng: item.geometry.coordinates[0],
              lat: item.geometry.coordinates[1],
            };
            const icon =
              item.properties.JenisPohon === "Kepala Sawit"
                ? iconKelapaSawit
                : item.properties.JenisPohon === "Tebu"
                ? iconTebu
                : item.properties.JenisPohon === "Tembakau"
                ? iconTembakau
                : item.properties.JenisPohon === "Cengkeh"
                ? iconCengkeh
                : item.properties.JenisPohon === "Teh"
                ? iconTeh
                : iconCengkeh;

            const properties = item.properties;

            return (
              <Marker
                key={index}
                position={coordinates}
                icon={icon}
                onClick={() => handleOpenPopup(item.key)}
              >
                {isSelect && item.key === select && (
                  <InfoWindow
                    position={coordinates}
                    onCloseClick={() => {
                      handleClosePopup();
                    }}
                  >
                    <div>
                      <h2>{properties.JenisPohon}</h2>
                      <h4>Lokasi : {properties.Lokasi}</h4>
                      <h4>Luas : {properties.Luas}</h4>
                      <h4>Penghasilan: {properties.Penghasilan}</h4>
                    </div>
                  </InfoWindow>
                )}
              </Marker>
            );
          })}
      </GoogleMap>
    </>
  );
}

export default App;
