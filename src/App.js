const App = () => {
  const zoomLevel = 0;
  return (
    <div>
      <h2>Zoom Level App</h2>

      <button>Zoom In</button>
      <button>Zoom Out</button>
      <button>Reset Zoom</button>
      <p>Zoom Level: {zoomLevel}</p>
    </div>
  );
};

export default App;
