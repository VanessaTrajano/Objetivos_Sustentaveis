import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
`

export const SiteContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    height: 100vh;
`

export const Test = styled.div`
    width: 15%;
    border: 1px solid red;
    height: 25%;
    display: flex;
    justify-content: center;
    align-items:center;
    text-align: center;
`