import "./home.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataError, getDataLoading, getDataSuccess } from "../store/action";

export const Home = () => {
  useEffect(() => {
    getData();
  }, []);

  const { loading, songs, error } = useSelector((state) => ({
    loading: state.loading,
    songs: state.songs,
    error: state.error,
  }));
  const dispatch = useDispatch();

  const getData = () => {
    try {
      dispatch(getDataLoading());
      fetch(
        `https://s3-ap-southeast-1.amazonaws.com/he-public-data/studiod9c0baf.json`
      )
        .then((d) => d.json())
        .then((res) => {
          // setData(res);
          dispatch(getDataSuccess(res));
          console.log("Music Data:", res);
        });
    } catch (err) {
      console.log("err", err);
      dispatch(getDataError(err));
    }
  };

  if (localStorage.getItem("playlist") === null) {
    localStorage.setItem("playlist", JSON.stringify([]));
  }
  const addPlaylist = (song) => {
    let playlist = JSON.parse(localStorage.getItem("playlist"));
    console.log("song", song.song);
    if (playlist.filter((e) => e.song === song.song).length > 0) {
      alert("Song is already present in playlist");
    } else {
      playlist.push(song);
      localStorage.setItem("playlist", JSON.stringify(playlist));
      alert("Song is successfully added to playlist");
    }
  };

  const playSong = (e) => {
    console.log("play", e.url);
    var audio = new Audio(`${e.url}`);
    audio.play();
  };

  const pauseSong = (e) => {
    window.location.reload();
  };

  return loading ? (
    <div className="loading_or_error">loading....</div>
  ) : error ? (
    <div className="loading_or_error">something went wrong</div>
  ) : (
    <div id="home_container">
      {songs.map((e, i) => (
        <div key={i} className="song_div">
          <img className="song_image" src={e.cover_image} alt="" />
          <div className="song_info_div">
            <b>{e.song}</b>
          </div>
          <div className="play_button">
            <p className="playfont" onClick={() => playSong(e)}>
              ▷
            </p>
            <p className="stopfont" onClick={() => pauseSong(e)}>
              □
            </p>
          </div>
          <button className="playlist_button" onClick={() => addPlaylist(e)}>
            Add to Playlist
          </button>
        </div>
      ))}
    </div>
  );
};
