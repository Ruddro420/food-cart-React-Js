import { Card } from "flowbite-react";
import { BsGoogle } from "react-icons/bs";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import './Login.css'
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/productSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    // dispatch
    const dispatch = useDispatch();
    // const navigate
    const navigate = useNavigate();
    const loginHandler = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                dispatch(addUser({
                    id: user.uid,
                    name: user.displayName,
                    email: user.email,
                    image: user.photoURL
                }));
                toast.success('Login Successfully!')
                setTimeout(() => {
                    navigate('/')
                }, 1500)
            }).catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage)

            });
    }

    return (
        <div className="login-container">
            <Card className="card-container">
                <h5 className="mb-2 text-5xl font-bold text-gray-900 dark:text-white">
                    Login Here
                </h5>
                <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, vel.
                    </p>
                </p>
                <div className="items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                    <button
                        onClick={loginHandler}
                        className="inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto login-button"
                        href="#"
                    >
                        <BsGoogle />
                        <div className="text-left ml-5 py-4">
                            <div className="-mt-1 font-sans text-sm font-semibold">
                                Login With Google
                            </div>
                        </div>
                    </button>
                </div>
            </Card>
        </div>
    );
};

export default Login;