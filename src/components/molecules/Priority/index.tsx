import { AntDesign } from '@expo/vector-icons';
import  { Container, ContainerGeral, Titulo } from "./style"
import { DropDownMenu } from "../../atoms/DropDownMenu";


export const Priority = () => {
    return(
    <ContainerGeral>
        <Container>
            <AntDesign name="flag" size={24} color="gray"/>
            <Titulo>Prioridade</Titulo>
        </Container>
    </ContainerGeral>
    )
};