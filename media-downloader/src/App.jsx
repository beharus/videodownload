import { useContext, useState } from "react";
import { downloadVideo } from "./fetch";
import Popup from "./popup";
import { Context } from "./context";
export default function App() {
  let [copy, setCopy] = useState("");
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useContext(Context)
  // Assuming you are interested in the first video from the array
  let search = async () => {
    try {
      setLoading(true);
      let getVideo = await downloadVideo(copy);
      console.log(state.popupData);
      dispatch({ type: 'SET_POPUP_DATA', payload: getVideo })
    } finally {
      setLoading(false);
      setCopy('')
    }
  };


  return (
    <div className=" bg-gradient min-h-screen h-full w-full bg-cover bg-fixed bg-center flex justify-center items-center">
      <div className=" max-w-2xl w-full min-h-80 rounded-3xl bg-white/20 backdrop-blur shadow text-center p-5 m-5 flex items-center justify-center">
        <div>
          <h1 className=" text-3xl font-bold text-amber-700">Video Downloader</h1>
          <p className=" max-w-md mx-auto my-2 text-amber-900 text-sm">
            This app could download the video through Youtube, TikTok, Facebook
            and Instagram in high quality
          </p>
          <div className=" bg-white rounded-full w-full max-w-sm p-0.5 mx-auto my-4 flex justify-between items-center border border-amber-500 shadow">
            <input
              onChange={(e) => setCopy(e.target.value)}
              value={copy}
              type="text"
              placeholder="Enter the url of the video"
              className="px-6 py-3 rounded-full outline-none w-full"
            />
            <i
              onClick={() => search()}
              className={`fa-solid ${loading ? "fa-spinner animate-spin" : "fa-search hover:px-6"
                } cursor-pointer duration-200 text-white p-4 rounded-full bg-amber-500`}
            ></i>
          </div>
        </div>
      </div>
      {state.popupData && <Popup />}
    </div>
  );
}
