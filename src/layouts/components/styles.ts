import styled from "styled-components";

export const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;

    div {
        display: flex;
        gap: 0.75rem;
        margin-right: -2rem;
    }

    span {
        background-color: ${props => props.theme["yellow-dark"]};
        border-radius: 50%;
        width: 1.25rem;
        height: 1.25rem;
        margin-top: -0.5rem;
        padding:0.17rem 0.42rem;
        color: ${props => props.theme.white};
        text-align: center;
        font-size: 0.75rem;
        font-weight: 700;
        line-height: 130%;
        position: relative;
        z-index: 1;
        left: -1.5rem;
        //left: 2100px;
        /* top: 1.5;
        left: 2100px; */

        

    }
    .hideSPAN {
        background-color: transparent;
        border-radius: 50%;
        width: 1.25rem;
        height: 1.25rem;
        margin-top: -0.5rem;
        padding:0.17rem 0.42rem;
        color: transparent;
        text-align: center;
        font-size: 0.75rem;
        font-weight: 700;
        line-height: 130%;
        position: relative;
        z-index: 1;
        left: -1.5rem;
        }
`

export const ButtonMap = styled.button`
    color: ${props => props.theme["purple-dark"]};
    font-family: 'Roboto';
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    background-color: ${props => props.theme["purple-light"]};
    border: none;
    border-radius: 6px;

`

export const ButtonCarShopping = styled.button`
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    background-color: ${props => props.theme["yellow-light"]};
    border: none;
    border-radius: 6px;
    text-decoration: none;

    a {
        color: ${props => props.theme["yellow-dark"]};
    }

    &:hover {
        cursor: pointer;
    }
`