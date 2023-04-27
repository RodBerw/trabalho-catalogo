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
  const filmeEscolhido = filmes.filter((f) => f.titulo === filme);
  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/marycamila184/moviedetails/moviedetails/${filmeEscolhido[0].id}`
    )
      .then((response) => response.json())
      .then((data) => setDetalhes(data))
      .catch((err) => console.error(err));
  }, []);

  console.log(detalhes);

  return (
    <div>
      <Title title={"Detalhes"} text="" />
      <div className="container text-center">
        <p>Filme: {detalhes.titulo}</p>
        <div>
          <p>{detalhes.sinopse}</p>
        </div>
        {/*<Comments filme={filmeEscolhido[0].nome} />*/}
      </div>
    </div>
  );
}

export default Detalhes;
