import { useContext } from "react";
import { Context } from "./context";

export default function Popup(props) {
  let { state, dispatch } = useContext(Context)
  let { picture, title, durationText, author, publishedText, links } = state.popupData;

  const closeFunc = () => {
    dispatch({ type: 'SET_POPUP_DATA', payload: null })
  }
  return (
    <>
      <div className=" fixed inset-0 bg-black/50 backdrop-blur-2xl flex items-center p-5">
        <div className="card bg-white p-5 max-w-md rounded-xl mx-auto">
          <img className=" w-full" src={picture} alt="" />
          <h1 className=" md:text-xl text-lg font-bold">
            {title.length > 35 ? title.slice(0, 35) + "..." : title}
          </h1>
          <ul className=" text-zinc-500 text-sm">
            <li>
              Duration: <span className=" font-medium">{durationText}</span>
            </li>
            <li>
              Published: <span className=" font-medium"> {publishedText}</span>
            </li>
            <li>
              Author: <span className=" font-medium">{author}</span>
            </li>
          </ul>
          <div className="flex justify-between gap-2 my-2">
            {
              links.map(downloadBtn => {
                let { quality, link } = downloadBtn
                return <a href={link} onClick={closeFunc} className=" py-3 px-6 rounded bg-amber-500 grow text-center text-lg font-bold text-white" ><i class="fa-solid fa-download"></i> download {quality}</a>
              })
            }
          </div>
          <button onClick={closeFunc} className=" py-3 px-6 rounded bg-red-500 grow text-center text-lg font-bold text-white w-full">Close</button>
          {/* <a href={links[0]}></a>
          <a href={links[1]}></a> */}
        </div>
      </div>
    </>
  );
}
