import '../styles/globals.css'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import login from './login';

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      db.collection('users')
    }
  }, [user])

  if (loading) return <Loading />;

  if (!user) return <login />

  return <Component {...pageProps} />
}

export default MyApp
