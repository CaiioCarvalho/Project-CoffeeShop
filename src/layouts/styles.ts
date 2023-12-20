import styled from "styled-components";

export const BaseLayout = styled.div`
    max-width: 90rem;
    padding: 0 10rem;
    height: 1vh;
    margin: 0 auto ;
    background-color: ${props => props.theme.background}
`