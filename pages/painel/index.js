
import SalesChart from "../../src/components/dashboard/SalesChart";
import Head from "next/head";
import {Col, Input, Row} from "reactstrap"
import ValidarLoginPage from "../../src/Util/ValidarLoginPage";

export default function Index(){

    return (
        <ValidarLoginPage>
            <div>
                <Head>
                    <title></title>
                    <meta
                        name="description"
                        content=""
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div>
                    {/***Sales & Feed***/}
                    <Row>
                        <Col sm="12" lg="6" xl="5" xxl="4">
                            <SalesChart />
                        </Col>
                    </Row>
                </div>
            </div>
        </ValidarLoginPage>
    )
}