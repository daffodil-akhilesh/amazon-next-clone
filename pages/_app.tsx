import "../styles/globalStyles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Provider } from "react-redux";
import { useStore } from "../redux/store";
import { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }:AppProps) {
  let store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
