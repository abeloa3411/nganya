import { VanState } from "../context/Context";
import Rating from "./Rating";

const Filter = () => {
  const { vanstate, vanDispatch } = VanState();

  return (
    <div>
      <h2 className="text-3xl ">Fitler vans</h2>
      <div>
        <Rating
          rating={vanstate.byRating}
          onClick={(i) =>
            vanDispatch({
              type: "FILTER_BY_RATE",
              payload: i + 1,
            })
          }
        />
        <div className="flex my-4 items-center">
          <p>Seats</p>
          <select className="p-2 mx-2 rounded bg-white">
            <select>choose no.</select>
            <option>4</option>
            <option>8</option>
            <option>12</option>
            <option>14</option>
          </select>
        </div>
        <div>
          <button
            className="btn rounded py-2 px-4 bg-white hover:bg-slate-300 ease-in-out text-black"
            onClick={() => {
              vanDispatch({
                type: "CLEAR_FILTERS",
              });
            }}
          >
            Clear filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
