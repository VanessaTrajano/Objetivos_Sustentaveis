import React, { useState } from 'react'
import * as S from './Style'

import Consumo from './objSustentaveis/Consumo'
import Educa from './objSustentaveis/Educa'
import Energia from './objSustentaveis/Energia'
import Genero from './objSustentaveis/Genero'
import VidaTerrestre from './objSustentaveis/VidaTerrestre'

import Livro from './images/livros.png'
import IgualdadeGenero from './images/igualdade-de-genero.png'
import Recicle from './images/recicle.png'
import Terra from './images/planeta-terra.png'
import EnergiaImage from './images/energia-renovavel.png'

export default function App() {

  const [modal1, setModal1] = useState(false)
  const [modal2, setModal2] = useState(false)
  const [modal3, setModal3] = useState(false)
  const [modal4, setModal4] = useState(false)
  const [modal5, setModal5] = useState(false)

  const handleClick1 = () => {
    setModal1(prevState => !prevState)
    setModal2(false)
    setModal3(false)
    setModal4(false)
    setModal5(false)
  }

  const handleClick2 = () => {
    setModal1(false)
    setModal2(prevState => !prevState)
    setModal3(false)
    setModal4(false)
    setModal5(false)
  }

  const handleClick3 = () => {
    setModal1(false)
    setModal2(false)
    setModal3(prevState => !prevState)
    setModal4(false)
    setModal5(false)
  }

  const handleClick4 = () => {
    setModal1(false)
    setModal2(false)
    setModal3(false)
    setModal4(prevState => !prevState)
    setModal5(false)
  }

  const handleClick5 = () => {
    setModal1(false)
    setModal2(false)
    setModal3(false)
    setModal4(false)
    setModal5(prevState => !prevState)
  }

  return (
    <S.SiteContainer>
      <S.SelectContainer>
        <S.GlobalStyle />
        <S.Test onClick={() => { handleClick1() }}>
          <div>
            <h1>1</h1>
            <h2>Educação de Qualidade</h2>
          </div>
          <S.Img src={Livro} />
        </S.Test>
        <S.Test onClick={() => { handleClick2() }}>
          <div>
            <h1>2</h1>
            <h2>Igualdade de Gênero</h2>
          </div>
          <S.Img src={IgualdadeGenero} />
        </S.Test>
        <S.Test onClick={() => { handleClick3() }}>
          <div>
            <h1>3</h1>
            <h2>Consumo e Produção Responsáveis</h2>
          </div>
          <S.Img src={Recicle} />
        </S.Test>
        <S.Test onClick={() => { handleClick4() }}>
          <div>
            <h1>4</h1>
            <h2>Vida Terrestre</h2>
          </div>
          <S.Img src={Terra} />
        </S.Test>
        <S.Test onClick={() => { handleClick5() }}>
          <div>
            <h1>5</h1>
            <h2>Energia Limpa e Acessível</h2>
          </div>
          <S.Img src={EnergiaImage} />
        </S.Test>
      </S.SelectContainer>

      {modal1 && <Educa />}
      {modal2 && <Genero />}
      {modal3 && <Consumo />}
      {modal4 && <VidaTerrestre />}
      {modal5 && <Energia />}
    </S.SiteContainer>
  )
}