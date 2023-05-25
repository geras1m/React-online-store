import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {setUser} from "../../slices/userSlice";
import Form from "./Form";


const SignUp = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        }));
        history('/');
      })
      .catch(console.error)
  }

  return (
    <Form
      title='Register'
      handleClick={handleRegister}
    />
  )
}

export {SignUp}
