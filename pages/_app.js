import FullLayout from "../src/layouts/FullLayout";
import Head from "next/head";
import "../src/styles/style.scss";
import {useEffect} from "react";
import ValidarLogin from "../src/Util/ValidarLogin";
import {useRouter} from "next/router";
import {AuthProvider} from "/src/Context/AuthContext";
import {parseCookies} from "nookies";

function MyApp({ Component, pageProps }) {

  const router = useRouter();
  const { 'gerenciamentoSalas.token': token } = parseCookies()

  useEffect(() => {
    if(!ValidarLogin.validarLogin()){
      router.push("/painel")
    }
  }, [])

  return (
      <>
        <Head>
          <title></title>
          <meta
              name="description"
              content=""
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <AuthProvider>
          {!token ?
              <Component {...pageProps} />
              :
              <FullLayout>
                <Component {...pageProps} />
              </FullLayout>
          }
        </AuthProvider>

      </>
  );
}

export default MyApp;
