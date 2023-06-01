import Form from "./Form";
import {useDispatch} from "react-redux";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router";
import {setUser} from "../../slices/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        }));
        history('/');
      })
      .catch(() => alert('Invalid user'))
  }

  return (
    <Form
      title='Sign in'
      handleClick={handleLogin}
    />
  )
}

export {Login}
