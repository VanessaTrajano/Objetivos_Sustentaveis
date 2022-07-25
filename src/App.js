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
      <S.Title>Objetivos Sustentáveis</S.Title>
      <S.SelectContainer>
        <S.GlobalStyle />
        <S.EducaBox onClick={() => { handleClick1() }}>
          <div>
            <S.TituloNum>1</S.TituloNum>
            <S.TituloTexto>Educação de Qualidade</S.TituloTexto>
          </div>
          <S.Img src={Livro} />
        </S.EducaBox>
        <S.GeneroBox onClick={() => { handleClick2() }}>
          <div>
            <S.TituloNum>2</S.TituloNum>
            <S.TituloTexto>Igualdade de Gênero</S.TituloTexto>
          </div>
          <S.Img src={IgualdadeGenero} />
        </S.GeneroBox>
        <S.ConsumoBox onClick={() => { handleClick3() }}>
          <div>
            <S.TituloNum>3</S.TituloNum>
            <S.TituloTexto>Consumo e Produção Responsáveis</S.TituloTexto>
          </div>
          <S.Img src={Recicle} />
        </S.ConsumoBox>
        <S.VidaBox onClick={() => { handleClick4() }}>
          <div>
            <S.TituloNum>4</S.TituloNum>
            <S.TituloTexto>Vida Terrestre</S.TituloTexto>
          </div>
          <S.Img src={Terra} />
        </S.VidaBox>
        <S.EnergiaBox onClick={() => { handleClick5() }}>
          <div>
            <S.TituloNum>5</S.TituloNum>
            <S.TituloTexto>Energia Limpa e Acessível</S.TituloTexto>
          </div>
          <S.Img src={EnergiaImage} />
        </S.EnergiaBox>
      </S.SelectContainer>
      
      <S.Intro>
        <p>Aqui você poderá ver alguns objetivos sustentáveis escritos com base nos objetivos da ONU.</p>
      </S.Intro>

      {modal1 && <Educa />}
      {modal2 && <Genero />}
      {modal3 && <Consumo />}
      {modal4 && <VidaTerrestre />}
      {modal5 && <Energia />}
    </S.SiteContainer>
  )
}