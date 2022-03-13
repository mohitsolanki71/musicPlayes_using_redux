import { useEffect, useState } from "react";
import "./playlist.css";

export const PlayList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const handleFilter = (e) => {
    let value = e.target.value;
    console.log("Filter:", value);
    let playlist = JSON.parse(localStorage.getItem("playlist"));
    let filteredData = [];
    for (let i = 0; i < playlist.length; i++) {
      if (playlist[i].artists.split(" ").includes(value)) {
        filteredData.push(playlist[i]);
      }
    }
    setData(filteredData);
  };

  const getData = () => {
    let playlist = JSON.parse(localStorage.getItem("playlist"));
    console.log("play:", playlist);
    setData(playlist);
  };
  return (
    <div id="playlist_main">
      <div id="filterDiv">
        <h2>Filter By Singer</h2>
        <div>
          <select name="" id="filter" onChange={handleFilter}>
            <option hidden>Filter By Artist</option>
            <option value="Zafar,">Ali Zafar</option>
            <option value="Amjad">Amjad Sabri</option>
            <option value="Asim">Asim Azhar</option>
            <option value="Atif">Atif Aslam</option>
            <option value="Gul">Gul Panrra</option>
            <option value="Harshadeep">Harshadeep Kaur</option>
            <option value="Kashif">Kashif Ali</option>
            <option value="Momina">Momina Mustehsan</option>
            <option value="Nabeel">Nabeel Shaukat Ali</option>
            <option value="Noori">Noori</option>
            <option value="Rachel">Rachel Viccaji</option>
            <option value="Rahat">Rahat Fateh Ali Khan</option>
            <option value="Sara">Sara Haider</option>
          </select>
        </div>
      </div>
      {data.length > 0 ? (
        <div id="playlist_data_div">
          {data.map((e, i) => (
            <div className="playlist_song_detail">
              <img className="playlist_img" src={e.cover_image} alt="" />
              <h2 className="playlist_song_name">{e.song}</h2>
              <p className="playlist_song_artist">
                {" "}
                <b>Artist:</b> {e.artists}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div id="empty_playlist">
          <img src="https://cdn.dribbble.com/users/1554526/screenshots/3399669/media/51c98501bc68499ed0220e1ba286eeaf.png?compress=1&resize=400x300"></img>
        </div>
      )}
    </div>
  );
};
