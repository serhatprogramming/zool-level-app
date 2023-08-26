import { useSelector, useDispatch } from "react-redux";
import { zoomIn, zoomOut, resetZoom } from "./actions/zoomLevelActions";

const App = () => {
  const zoomLevel = useSelector((state) => state.zoomLevel);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Zoom Level App</h2>
      <button onClick={() => dispatch(zoomIn())}>Zoom In</button>
      <button onClick={() => dispatch(zoomOut())}>Zoom Out</button>
      <button onClick={() => dispatch(resetZoom())}>Reset Zoom</button>
      <p>Zoom Level: {zoomLevel}</p>
    </div>
  );
};

export default App;
