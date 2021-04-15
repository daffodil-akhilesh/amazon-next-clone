import "../styles/globalStyles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Provider } from "react-redux";
import { useStore } from "../redux/store";

export default function MyApp({ Component, pageProps }) {
  let store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
