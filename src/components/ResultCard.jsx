import { useDispatch } from 'react-redux'
import { addCollection, addedToast } from '../redux/features/collectionSlice'

const ResultCard = ({ item }) => {

    const dispatch = useDispatch()

    const addToCollection = (item) => {
        dispatch(addCollection(item))
        dispatch(addedToast())
        
    }
  return (
    <div className="w-[18vw] min-w-50 relative h-60 bg-white rounded-xl overflow-hidden">
      <a href={item.url}>
        {item.type == "photo" ? (
          <img
            src={item.src}
            className="h-full w-full object-cover object-center"
            alt=""
          />
        ) : (
          ""
        )}
        {item.type == "video" ? (
          <video
            src={item.src}
            className="h-full w-full object-cover object-center"
            autoPlay
            muted
            loop
          ></video>
        ) : (
          ""
        )}
        {item.type == "gif" ? (
          <img
            src={item.src}
            className="h-full w-full object-cover object-center"
          ></img>
        ) : (
          ""
        )}
      </a>
      <div
        id="bottom"
        className="flex justify-between gap-3 items-center w-full px-4 py-4 absolute bottom-0 text-white"
      >
        <h2 className="text-lg font-semibold capitalize h-14 overflow-hidden">
          {item.title}
        </h2>
        <button
          onClick={() => {
            addToCollection(item);
          }}
          className=" cursor-pointer bg-indigo-600 text-white rounded px-3 py-2 font-medium"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
