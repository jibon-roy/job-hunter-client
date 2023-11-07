import { PropTypes } from "prop-types";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/Auth";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import axios from "axios";

export const AuthContext = createContext({})

const AuthProvider = ({ children }) => {

    const googleUser = new GoogleAuthProvider();
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);

    const createUserEmailPassword = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const profileUpdate = (name, photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl
        })
            .then((res) => {
                if (res) {
                    setLoading(true);
                }
            })
            .catch(err => console.log(err))
    }

    const logInWithEmailPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleUser)
            .then(result => {
                const data = result.user;
                const name = data.displayName;
                const email = data.email;
                if (result) {
                    const userData = { name, email }
                    axios.post('/users', userData)
                        .then(res => console.log(res))
                        .catch(err => console.log(err))
                    setLoading(true);
                    location.reload();
                }
            })
            .catch(error => console.error(error))

    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false);
            setUser(currentUser);
        })
        return () => unSubscribe();
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(Swal.fire({
                title: 'Thank you!',
                text: 'Logout Successful',
                icon: 'success',
                confirmButtonText: 'Done',
                confirmButtonColor: "#007efe"
            }))
    }

    const data = { loading, createUserEmailPassword, profileUpdate, loginWithGoogle, user, logInWithEmailPassword, logOut }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;