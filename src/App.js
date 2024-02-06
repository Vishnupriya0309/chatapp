import Chat from '../src/component/Chat';
import SignIn from '../src/component/SignIn';
import { auth } from '../src/component/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

function App() {
  const [user] = useAuthState(auth)
  return (
    <>
      {user ? <Chat /> : <SignIn />}
    </>
  );
}

export default App;