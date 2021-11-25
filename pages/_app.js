import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { store, persistor } from "stores/store";
import { PersistGate } from "redux-persist/integration/react";
PersistGate;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
