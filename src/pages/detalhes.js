import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Title from "./../components/Title/index";
import Comments from "./../components/Comments/index";
import Card from "../components/Card";

function Detalhes() {
  const [filmes, setFilmes] = useState([]);
  const [detalhes, setDetalhes] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/marycamila184/movies/movies")
      .then((response) => response.json())
      .then((data) => setFilmes(data))
      .catch((err) => console.error(err));
  }, []);

  console.log(filmes);
  const { filme } = useParams();
  useEffect(() => {
    const filmeEscolhido = filmes?.filter((f) => f.titulo === filme);
    if(filmeEscolhido?.[0] == null || detalhes.length){
      return
    }
    fetch(
      `https://my-json-server.typicode.com/marycamila184/moviedetails/moviedetails/${filmeEscolhido[0].id}`
      )
      .then((response) => response.json())
      .then((data) => setDetalhes(data))
      .catch((err) => console.error(err));
      console.log(filmeEscolhido)
      if(!detalhes){
        console.log("Erro")
      }
  }, [filmes]);
  
  console.log(detalhes);

  return (
    <div>
      <Title title={"Detalhes"} text="" />
      <div style={{display: "grid", gridTemplateColumns: "auto auto"}}>
        <img src={detalhes.poster}
        style={{marginLeft: "50%", width: "75%", textAlign:"center"}}></img>
        <div className="container text-center" style={{width:"75%"}}>
          <h2>{detalhes.titulo}</h2>
          <h2>{detalhes.ano}</h2>
          <h5>{detalhes.sinopse}</h5>
          
          {/*<Comments filme={filmeEscolhido[0].nome} />*/}
        </div>
      </div>
    </div>
  );
}

export default Detalhes;
