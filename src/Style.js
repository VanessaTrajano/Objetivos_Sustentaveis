import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
`

export const SiteContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    max-height: 200vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid green;
`

export const SelectContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items:center;
    width: 100%;
    height: 35vh;
    border: 2px solid blue;
`

export const Title = styled.h1`
    border: 2px solid yellow;
    height: 10vh;
    width: 100%;
    font-size: 7vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const EducaBox = styled.div`
    width: 18%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    text-align: center;
    background-color: #c5192d;
`

export const GeneroBox = styled.div`
    width: 18%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    text-align: center;
    background-color: #ff3a21;
`

export const ConsumoBox = styled.div`
    width: 18%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    text-align: center;
    background-color: #bf8b2e;
`

export const VidaBox = styled.div`
    width: 18%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    text-align: center;
    background-color: #56c02b;
`

export const EnergiaBox = styled.div`
    width: 18%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    text-align: center;
    background-color: #fcc30b;
`

export const Img = styled.img`
    width: 30%;
`

export const EducaContainer = styled.div`
    border: 2px solid plum;
    width: 100%;
    height: 54vh;
    padding: 2%;
`

export const GeneroContainer = styled.div`
    border: 2px solid plum;
    width: 100%;
    height: 54vh;
    padding: 2%;
`

export const ConsumoContainer = styled.div`
    border: 2px solid plum;
    width: 100%;
    height: 54vh;
    padding: 2%;
`

export const VidaContainer = styled.div`
    border: 2px solid plum;
    width: 100%;
    height: 54vh;
    padding: 2%;
`

export const EnergiaContainer = styled.div`
    border: 2px solid plum;
    width: 100%;
    height: 54vh;
    padding: 2%;
`