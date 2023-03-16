import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "../redux/store";
// for persist
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { useRouter } from "next/router";
import { useEffect } from "react";




const App = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const isAuth = store.getState();
    return () => {
      if (!isAuth.userDetail.user.status) {
        router.push("auth/login");
      }
    };
  }, []);
  const theme = createTheme();
  let persistor = persistStore(store);
  return (
    <div>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ToastContainer />
            <Component {...pageProps} />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </div>
  );
};

export default (App);

