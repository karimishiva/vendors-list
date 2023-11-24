import { RouterProvider } from "react-router-dom";
import { mainRouter } from "src/routes/main.route";
import "src/assets/styles/global.scss";
import { Toast } from "src/components/toast/Toast";
function App() {
  return (
    <div className='app'>
      <RouterProvider router={mainRouter} />
      <Toast />
    </div>
  );
}

export default App;
