import { useEffect, useState } from "react"
import firebase from "firebase/compat/app"
import { auth } from "../fireauth";

export const AuthProvider: React.FC = ({}) => {

    const [user, setUser] = useState<firebase.User | null>(null);

    

    useEffect(() => {
        const unsubscribe = auth
    })
    return <></>
}