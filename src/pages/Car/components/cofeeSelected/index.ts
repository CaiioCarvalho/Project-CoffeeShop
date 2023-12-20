import styled from "styled-components";

export const CafeSelected = styled.section`
    display: flex;
    flex-direction: column;

    .check__kart {
        display: grid;
        align-items: center;
        justify-content: space-between;
        grid-template-columns: repeat(2, auto);
        gap: 0.75rem;

        label {
            color: ${props => props.theme["base-text"]};
            font-size: 0.875rem;
            font-weight: 400;
            line-height: 130%;
        }

        strong {
            color: ${props => props.theme["base-subtitle"]};
            font-size: 1.25rem;
            font-weight: 700;
            line-height: 130%;
        }

        span{
            color: ${props => props.theme["base-text"]};
            font-size: 1rem;
            font-weight: 400;
            line-height: 130%;
            text-align: end;
        }

    }

    .btn__final {
        color: ${props => props.theme["white"]};
        margin-top: 1.5rem;
        width: 100%;
        padding: 0.75rem 0.5rem;
        border: none;
        border-radius: 6px;
        font-size: 0.875rem;
        font-weight: 700;
        line-height: 160%; /* 1.4rem */
        text-transform: uppercase;
        transition: 0.1s;

        background-color: ${props => props.theme["yellow"]};
        }

        .btn__final:hover {
            background-color: ${props => props.theme["yellow-dark"]};
            cursor: pointer;
        }
`