import { RouterProvider } from "react-router-dom";
import { mainRouter } from "src/routes/main.route";
import "src/assets/styles/global.scss";
import { Toast } from "src/components/toast/Toast";
import { Provider } from "react-redux";
import { store } from "src/store";
function App() {
  return (
    <div className='app'>
      <Provider store={store}>
        <RouterProvider router={mainRouter} />
        <Toast />
      </Provider>
    </div>
  );
}

export default App;
