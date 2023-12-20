import styled from "styled-components";

export const CoffeesContainer = styled.section`
    width: 16rem;
    height: 19.375rem;
    border-radius: 0.375rem 2.25rem;
    background-color: ${props => props.theme["base-card"]};
    padding: 1.25rem;


    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    img {
        width: 7.5rem;
        height: 7.5rem;
        position: relative;
        top: -2.5rem;

    }

    div {
        display: flex;
        align-items: center;
        gap: 0.3rem;
        position: relative;
        top: -1.75rem;


    }

    strong {
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.25rem;
        font-weight: 700;
        position: relative;
        top: -1.50rem;
        }

    span {
        background-color: ${props => props.theme["yellow-light"]};
        color: ${props => props.theme["yellow"]};
        padding: 0.25rem 0.5rem;
        border-radius: 100px;

        font-size: 0.625rem;
        font-weight: 700;
        line-height: 130%;
        text-transform: uppercase;
    }

    p {
        color: ${props => props.theme["base-label"]};
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 130%;
        text-align: center;
        position: relative;
        top: -1.75rem;
    }

`

export const DivPrice = styled.article`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;

    article {
        background-color: ${props => props.theme["purple-dark"]};
        border: none;
        padding: 0.5rem;
        align-items: center;
        gap: 0.5rem;
        color: ${props => props.theme["base-card"]};
        border-radius: 6px;
        &:hover {
                background-color: ${props => props.theme["purple"]};
                cursor: pointer;
        }
    }

    h2 {
        color: ${props => props.theme["base-text"]};
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 130%;
        margin-right: -0.3rem;
        position: relative;
        top: 0.15rem;
    }

    h4 {
        font-family: 'Baloo 2', sans-serif;
        color: ${props => props.theme["base-text"]};
        font-size: 1.5rem;
        font-weight: 800;
        line-height: 130%;
    }

    h3 {
        display: flex;
        margin-left: 0.8rem;
        align-items:center;
        justify-content: space-around;
        width: 4.5rem;
        border-radius: 6px;
        height: 2.375rem;
        background-color: ${props => props.theme["base-button"]};
        padding: 0.5rem;
        gap: 0.25rem;
        color: ${props => props.theme["base-title"]};

        button {
            color: ${props => props.theme["purple"]};
            border: none;
            background: transparent;
            width: 0.875rem;
            height: 0.875rem;
            &:hover {
                color: ${props => props.theme["purple-dark"]};
                cursor: pointer;
            }
        }

    }

`

export const CoffeesContainer2 = styled.div`
    display:flex;
    padding: 0.5rem 0.25rem;
    justify-content: flex-start;
    gap: 1.25rem;
    align-items: flex-start;
    border-bottom: 1px solid ${props => props.theme["base-button"]};
    margin-bottom: 1.5rem;

    img {
        width: 4rem;

    }

    strong {
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
        color: ${props => props.theme["base-subtitle"]};
    }

    h4 {
        color: ${props => props.theme["base-text"]};
        font-size: 1rem;
        font-weight: 700;
        line-height: 130%;
        margin: 0 auto;
    }

    div{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: flex-start;
        justify-content: center;
    }
`
export const DivPrice2 = styled.article`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    margin-bottom: 1.5rem;


    article {
        background-color: ${props => props.theme["base-button"]};
        border: none;
        padding: 0.5rem;
        display: flex;
        height: 2rem;
        align-items: center;
        gap: 0.25rem;
        color: ${props => props.theme["base-text"]};
        border-radius: 6px;
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 160%; /* 1.2rem */
        text-transform: uppercase;

        svg {
            color: ${props => props.theme["purple"]};
        }

        &:hover {
                background-color: ${props => props.theme["base-hover"]};
                cursor: pointer;
        }
    }


    h3 {
        display: flex;
        font-size: 0.75rem;
        align-items:center;
        justify-content: space-around;
        height: 2rem;
        border-radius: 6px;
        background-color: ${props => props.theme["base-button"]};
        padding: 0.5rem;
        gap: 0.25rem;
        color: ${props => props.theme["base-title"]};

        button {
            color: ${props => props.theme["purple"]};
            border: none;
            background: transparent;
            width: 0.875rem;
            height: 0.875rem;
            &:hover {
                color: ${props => props.theme["purple-dark"]};
                cursor: pointer;
            }
        }

    }

`