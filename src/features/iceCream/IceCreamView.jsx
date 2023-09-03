import { useDispatch, useSelector } from "react-redux";
import { ordered, reStocked } from "./iceCreamSlice";
import { useState } from "react";

const IceCreamView = () => {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();

  const [value, setValue] = useState(1);

  return (
    <div>
      <h1>Number of IceCream: {numOfIceCream}</h1>
      <button onClick={() => dispatch(ordered(1))}>Order IceCream</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(reStocked(value))}>
        Restock IceCream
      </button>
    </div>
  );
};

export default IceCreamView;
