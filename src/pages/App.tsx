import { RouterProvider } from "react-router-dom";
import { mainRouter } from "src/routes/main.route";
import "src/assets/styles/global.scss";
function App() {
  return (
    <div className='app'>
      <RouterProvider router={mainRouter} />
    </div>
  );
}

export default App;
