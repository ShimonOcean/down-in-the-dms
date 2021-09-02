import '../styles/globals.css'
import { useAuthState } from "react-firebase-hooks/auth";

function MyApp({ Component, pageProps }) {
  const [user] = useAuthState(auth);

  if (!user) return <Login />

  return <Component {...pageProps} />
}

export default MyApp
