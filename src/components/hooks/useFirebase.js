import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signOut,
  onAuthStateChanged
} from "firebase/auth"
import { useEffect, useState } from "react"
import initializeAuthentication from "../firebase/firebase.init"

initializeAuthentication()

const useFirebase = () => {
  const [user, setUsers] = useState({})
  const auth = getAuth()
  const googleProvider = new GoogleAuthProvider()
  const [isLoading, setisLoading] = useState(true)

  // // //  Google SignIn // // //
  const singInUsingGoogle = () => {
    setisLoading(true)
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUsers(result.user)
      })
      .finally(() => setisLoading(false))
  }

  // // //  user's State change observer's function // //
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user)
      } else {
        setUsers({})
      }
      setisLoading(false)
    })
    return () => unsubscribe
  }, [])

  // // // Sign Out // // //
  const logOut = () => {
    setisLoading(true)
    signOut(auth)
      .then(() => {})
      .finally(() => setisLoading(false))
  }

  return {
    user,
    singInUsingGoogle,
    logOut,
    isLoading
  }
}

export default useFirebase
