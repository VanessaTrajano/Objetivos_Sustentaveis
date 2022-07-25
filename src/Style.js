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
    max-height: 300vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SelectContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items:center;
    width: 100%;
    height: 30vh;
    font-size: 2vh;

    @media(max-width:430px){
        height: 55vh;
        flex-direction: column;
        margin-bottom: 2vh;
    }

    @media(max-width:350px){
        height: 60vh;
    }
`

export const Title = styled.h1`
    height: 10vh;
    width: 100%;
    font-size: 7vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: overline;

    @media(max-width: 360px){
        font-size: 5.2vh;
    }
`

export const EducaBox = styled.div`
    width: 16%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items:center;
    text-align: center;
    background-color: #c5192d;
    border-radius: 3vh;
    cursor: pointer;

    div{
        display: flex;
        justify-content: space-evenly;


        @media(max-width: 350px){
            height: 100%;
            width:80%;
        }
    }

    @media(max-width:430px){
        height: 15%;
        flex-direction: row;
        width: 90%;
    }
`

export const TituloNum = styled.h2`
    font-size: 7vh;
    width: 30%;

    @media(max-width:430px){
        font-size: 6vh;
    }

    @media(max-width:350px){
        width:20%;
    }
`

export const TituloTexto = styled.h2`
    font-size: 3vh;
    width: 70%;

    @media(max-width: 430px){
        width: 60%;
    }

    @media(max-width: 350px){
        width: 80%;
        display:flex;
        align-items:center;
        justify-content:center;
    }
`

export const GeneroBox = styled.div`
    width: 16%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items:center;
    text-align: center;
    background-color: #ff3a21;
    border-radius: 3vh;
    cursor: pointer;
    
    div{
        display: flex;
        justify-content: space-evenly;


        @media(max-width: 350px){
            height: 100%;
            width:80%;
        }
    }

    @media(max-width:430px){
        height: 15%;
        flex-direction: row;
        width: 90%;
    }
`

export const ConsumoBox = styled.div`
    width: 16%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items:center;
    text-align: center;
    background-color: #bf8b2e;
    border-radius: 3vh;
    cursor: pointer;

    div{
        display: flex;
        justify-content: space-evenly;


        @media(max-width: 350px){
            height: 100%;
            width:80%;
        }
    }

    @media(max-width:430px){
        height: 15%;
        flex-direction: row;
        width: 90%;
    }
`

export const VidaBox = styled.div`
    width: 16%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items:center;
    text-align: center;
    background-color: #56c02b;
    border-radius: 3vh;
    cursor: pointer;

    div{
        display: flex;
        justify-content: space-evenly;


        @media(max-width: 350px){
            height: 100%;
            width:80%;
        }
    }

    @media(max-width:430px){
        height: 15%;
        flex-direction: row;
        width: 90%;
    }
`

export const EnergiaBox = styled.div`
    width: 16%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items:center;
    text-align: center;
    background-color: #fcc30b;
    border-radius: 3vh;
    cursor: pointer;

    div{
        display: flex;
        justify-content: space-evenly;


        @media(max-width: 350px){
            height: 100%;
            width:80%;
        }
    }

    @media(max-width:430px){
        height: 15%;
        flex-direction: row;
        width: 90%;
    }
`

export const Img = styled.img`
    width: 25%;

    @media(max-width:430px){
        width: 8%;
    }
`

export const EducaContainer = styled.div`
    width: 100%;
    height: 59vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #fff;

    h2{
        width: 35%;
        height: 70%;
        font-size: 4vh;
        padding-right: 10%;
        border-top: 1vh solid  #c5192d;

        @media(max-width:430px){
            width: 90%;
            height: fit-content;
            margin-bottom: 2vh;
        }
    }

    @media(max-width: 430px){
        height: fit-content;
        flex-direction: column;
    }
`

export const EducaText = styled.div`
    width: 50%;
    height: 75%;
    font-size: 3vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: justify;

    @media(max-width:430px){
        width: 80%;
        margin-bottom: 2vh;
        height: fit-content;
        font-size: 3.3vh;
    }
`

export const GeneroContainer = styled.div`
    width: 100%;
    height: 59vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #fff;

    h2{
        width: 35%;
        height: 70%;
        font-size: 4vh;
        padding-right: 10%;
        border-top: 1vh solid  #ff3a21;
        
        @media(max-width:430px){
            width: 90%;
            height: fit-content;
            margin-bottom: 2vh;
        }
    }

    @media(max-width: 430px){
        height: fit-content;
        flex-direction: column;
    }
`

export const GeneroText = styled.div`
    width: 50%;
    height: 70%;
    font-size: 3vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: justify;
    
    @media(max-width:430px){
        width: 80%;
        height: fit-content;
        font-size: 3.3vh;
        margin-bottom: 2vh;
    }
`

export const ConsumoContainer = styled.div`
    width: 100%;
    height: 59vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #fff;

    h2{
        width: 35%;
        height: 70%;
        font-size: 4vh;
        padding-right: 10%;
        border-top: 1vh solid  #bf8b2e;

        @media(max-width:430px){
            width: 90%;
            height: fit-content;
            margin-bottom: 2vh;
        }
    }

    @media(max-width: 430px){
        height: fit-content;
        flex-direction: column;
    }
`

export const ConsumoText = styled.div`
    width: 50%;
    height: 65%;
    font-size: 3vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: justify;
    
    @media(max-width:430px){
        width: 80%;
        height: fit-content;
        font-size: 3.3vh;
        margin-bottom: 2vh;
    }
`

export const VidaContainer = styled.div`
    width: 100%;
    height: 59vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #fff;

    h2{
        width: 35%;
        height: 70%;
        font-size: 4vh;
        padding-right: 10%;
        border-top: 1vh solid  #56c02b;

        @media(max-width:430px){
            width: 90%;
            height: fit-content;
            margin-bottom: 2vh;
        }
    }

    @media(max-width: 430px){
        height: fit-content;
        flex-direction: column;
    }
`

export const VidaText = styled.div`
    width: 50%;
    height: 95%;
    font-size: 3vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: justify;
    
    @media(max-width:430px){
        width: 80%;
        height: fit-content;
        font-size: 3.3vh;
        margin-bottom: 2vh;
    }
`

export const EnergiaContainer = styled.div`
    width: 100%;
    height: 59vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #fff;

    h2{
        width: 35%;
        height: 70%;
        font-size: 4vh;
        padding-right: 10%;
        border-top: 1vh solid  #fcc30b;

        @media(max-width:430px){
            width: 90%;
            height: fit-content;
            margin-bottom: 2vh;
        }
    }

    @media(max-width: 430px){
        height: fit-content;
        flex-direction: column;
    }
`

export const EnergiaText = styled.div`
    width: 50%;
    height: 80%;
    font-size: 3vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: justify;
    
    @media(max-width:430px){
        width: 80%;
        height: fit-content;
        font-size: 3.3vh;
        margin-bottom: 2vh;
    }
`

export const Intro = styled.div`
    position: absolute;
    top: 55vh;
    z-index: -1;
    border-bottom: 1vh solid black;
    border-left: 0.5vh solid black;
    padding-left: 0.5vh;
    font-size: 4vh;
    width: 40%;
    height: fit-content;


    @media(max-width:430px){
        top: 70vh;
    }

    @media(max-width:350px){
        top: 75vh;
        margin-bottom: 2vh;
    }
`
