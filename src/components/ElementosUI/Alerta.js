import {Alert} from "reactstrap";

export default function Alerta({texto,type,visible, toggle}){

    setTimeout(function () {
        toggle()
    }, 5000)

    return (
        <>
            <Alert color={type} isOpen={visible} toggle={toggle}>
                {texto}
            </Alert>
        </>
    )
}