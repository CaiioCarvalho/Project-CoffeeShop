import styled from "styled-components";

export const HomeContainer = styled.section`
    display: flex;
    margin: 5.75rem 0;
    justify-content: space-between;

    img {
        width: 29.75rem;
        height: 22.5rem;
    }

`

export const InfoHomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 36rem;

    h1 {
        color: ${props => props.theme["base-title"]};
        font-family: 'Baloo 2', sans-serif;
        font-size: 3rem;
        font-weight: 800;
        line-height: 130%;
    }

    p{
        color: ${props => props.theme["base-subtitle"]};
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 130%;
    }
`

export const IconsHomeContainer = styled.div`
    display: grid;
    grid-template-columns: 18.45rem 22.375rem;
    gap: 1rem;
    margin-top: 4.13rem;
`

export const IconsChangeble = styled.span`
    display: flex;
    gap: 0.75rem;
    justify-content: flex-start;
    align-items: center;

    svg {
        display: flex;
        padding: 0.5rem;
        height: 2rem;
        width: 2rem;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        font-size: 1rem;
        color: ${props => props.theme.background};
    }
    p {
        color: ${props => props.theme["base-text"]};
        font-weight: 400;
        line-height: 130%;
        width: 100%;
    }
`

export const IconsChangebleCart = styled(IconsChangeble)`
    svg{
    background-color: ${props => props.theme["yellow-dark"]};
    }
`

export const IconsChangebleTimer = styled(IconsChangeble)`
svg{
    background-color: ${props => props.theme["yellow"]};
}
`

export const IconsChangeblePackage = styled(IconsChangeble)`
    svg{
    background-color: ${props => props.theme["base-text"]};
    }
`

export const IconsChangebleCoffee = styled(IconsChangeble)`
    svg{
    background-color: ${props => props.theme["purple"]};
    }
`

export const CaffeeContainer = styled.div`
    margin-top: 9rem;
    padding-bottom: 10rem;

    div{
        display: grid;
        grid-template-columns: repeat( 4, 1fr);
        gap: 2rem;
    }

    h1 {
        margin-bottom: 3.38rem;
        width: 100%;
        font-family: 'Baloo 2', sans-serif;
        font-size: 2rem;
        font-weight: 800;
        line-height: 130%; /* 2.6rem */
    }
`