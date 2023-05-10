import {useEffect} from "react";
import ValidarLogin from "../../src/Util/ValidarLogin";
import {useRouter} from "next/router";

export default function ValidarLoginPage({children}){

    const router = useRouter();

    useEffect(() => {
        if(ValidarLogin.validarLogin()){
            router.push("/")
        }
    }, [])

    return (
        <>
            {children}
        </>
    )

}