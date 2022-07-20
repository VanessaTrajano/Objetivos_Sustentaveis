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

export const Test = styled.div`
    width: 18%;
    border: 1px solid red;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    text-align: center;
`

export const Img = styled.img`
    width: 30%;
`