import {createContext, useEffect, useState} from "react";
import Constantes from "../../src/Constantes/Constantes";
import {useRouter} from "next/router";
import {parseCookies, setCookie} from "nookies";


export const AuthContext = createContext({} )
export function AuthProvider({ children }) {

    const router = useRouter();
    const [user, setUser] = useState(null)
    const isAuthenticated = !!user;

    async function signIn(login) {
        fetch(Constantes.url  + "login", {
            method: "POST",
            headers : {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(login)
        }).then((resp) => resp.text())
            .then((dado) => {
                if(dado){
                    setCookie(undefined, 'gerenciamentoSalas.token', dado, {
                        maxAge: 60 * 60 * 12, // 1 hour
                    })
                    setUser("Admin")
                    router.push("/painel")
                }else{
                    // setMessage("Usuario ou senha Incorreto")
                }
            })
    }

    useEffect(() => {
        const { 'gerenciamentoSalas.token': token } = parseCookies()
        if (token) {
            setUser("Admin")
        }
    }, [])

    return (
        <>
            <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
                {children}
            </AuthContext.Provider>
        </>
    )

}