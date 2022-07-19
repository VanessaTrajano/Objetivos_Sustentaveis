import React, { useState } from 'react'
import * as S from './Style'

import Consumo from './objSustentaveis/Consumo'
import Educa from './objSustentaveis/Educa'
import Energia from './objSustentaveis/Energia'
import Genero from './objSustentaveis/Genero'
import VidaTerrestre from './objSustentaveis/VidaTerrestre'

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
      <S.GlobalStyle/>
      <S.Test onClick={() => {handleClick1()}}>
        <h2>Educação de Qualidade</h2>
        <img />
      </S.Test>
      <S.Test onClick={() => {handleClick2()}}>
        <h2>Igualdade de Gênero</h2>
        <img />
      </S.Test>
      <S.Test onClick={() => {handleClick3()}}>
        <h2>Consumo e Produção Responsáveis</h2>
        <img />
      </S.Test>
      <S.Test onClick={() => {handleClick4()}}>
        <h2>Vida Terrestre</h2>
        <img />
      </S.Test>
      <S.Test onClick={() => {handleClick5()}}>
        <h2>Energia Limpa e Acessível</h2>
        <img />
      </S.Test>
      {/* <Educa/>
      <Genero/>
      <Energia/>
      <Consumo/>
      <VidaTerrestre/> */}
    </S.SiteContainer>
  )
}