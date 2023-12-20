import styled from "styled-components";

export const CarContainer = styled.div`
    display: grid;
    grid-template-columns: 40rem 28rem;
    gap: 2rem;
    /* display: flex;
    gap: 2rem; */

`

export const CarTitles = styled.div`
    width: 72rem;
    display: grid;
    grid-template-columns: 40rem 28rem;
    gap: 2rem;

    h1 {
        font-family: 'Baloo 2', sans-serif;
        color: ${props => props.theme["base-title"]};
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 130%; /* 1.4625rem */
        margin-bottom: 0.94rem;
    }

`

export const CompletePedido = styled.section`

    .soback-ground {
        background-color: ${props => props.theme["base-card"]};
        padding: 2.5rem;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 2rem;
        border-radius: 6px;
    }

    .pedido__primeiro {
        display: flex;
        gap: 0.5rem;
        align-items: flex-start;
        justify-content: flex-start;
        height: 2.75rem;

        svg {
            line-height: 0;
            color: ${props => props.theme["yellow-dark"]};
        }
    }

    strong {
        color: ${props => props.theme["base-subtitle"]};
        font-size: 1rem;
        font-weight: 400;
        line-height: 130%; /* 1.3rem */
    }

    p {
        color: ${props => props.theme["base-text"]};
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 130%;
    }

    form {
        display: grid;
        width: 35rem;
        gap: 1rem;

        input {
            padding: 0.75rem;
            border: none;
            border-radius: 4px;
            border: 1px solid transparent;
            background: ${props => props.theme["base-input"]};
            color: ${props => props.theme["base-text"]};
            font-size: 0.875rem;
            font-weight: 400;
            line-height: 130%;

            &:focus {
                border: 1px solid ${props => props.theme["yellow-dark"]};
            }

            &:active {
                border: 1px solid ${props => props.theme["yellow-dark"]};
            }
        }

        div {
            display: flex;
            gap: 0.75rem;
        }

        .form__rua input{
            width: 100%;
        }

        .form__numeroComple{
            display: grid;
            grid-template-columns: 12.5rem 1fr;
        }

        .form__bcu {
            display: grid;
            grid-template-columns: 12.5rem 17.25rem 3.75rem;
        }
        .Cep {
            display: grid;
            grid-template-columns: 12.5rem;
        }
    }
`

export const CarPagamentos = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: flex-start;
    justify-content: flex-start;
    height: 2.75rem;
    flex-direction: column;
    margin-top: 0.75rem;
    padding: 2.5rem;
    background-color: ${props => props.theme["base-card"]};
    border-radius: 6px;
    height: 12.9375rem;

    .carpagamento__primeiro {
        display: flex;
        gap: 0.5rem;
        align-items: flex-start;
        justify-content: flex-start;
    }

    svg {
        line-height: 0;
        color: ${props => props.theme["purple-dark"]};
    }

    strong {
        color: ${props => props.theme["base-subtitle"]};
        font-size: 1rem;
        font-weight: 400;
        line-height: 130%; /* 1.3rem */
    }

    p {
        color: ${props => props.theme["base-text"]};
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 130%;
    }

    .car__pagamentos {
        margin-top: 1.5rem;
        display: grid;
        gap: 0.75rem;
        width: 100%;
        grid-template-columns: repeat(3, 1fr);
    }

    label {
        padding: 1rem;
        background-color: ${props => props.theme["base-button"]};
        border-radius: 6px;
        border: none;
        align-items: center;
        display: flex;
        gap: 0.75rem;
        align-items: center;
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 160%; /* 1.2rem */
        text-transform: uppercase;
        border: 1px solid transparent;
        transition: 0.1s;
        cursor: pointer;
        input {
            display: none;
        }
        &:hover {
            background-color: ${props => props.theme["base-hover"]};
        }
    }
    .creditCard {
        background-color: ${props => props.theme["purple-light"]};
        border: 1px solid ${props => props.theme["purple"]};
    }

`

export const CafesSelecionados = styled.section`
    padding: 2.5rem;
    height: fit-content;
    background-color: ${props => props.theme["base-card"]};
    border-radius: 0.375rem 2.75rem;
`