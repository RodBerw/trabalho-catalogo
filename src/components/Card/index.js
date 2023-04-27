import { useState } from "react";
import { useEffect } from "react";
import "./card.css";

function Assitido({ javisto }) {
  if (javisto) {
    return <p>Assistido ✔</p>;
  }
  return <p className="item">Não assistido</p>;
}

export default function Card() {
  const [filmes, setFilmes] = useState([]);
  const [filmesFixed, setFilmesFixed] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/marycamila184/movies/movies")
      .then((response) => response.json())
      .then((data) => setFilmes(data))
      .then((data) => setFilmesFixed(data))
      .catch((err) => console.error(err));
  }, []);

  if (!filmes) {
    return <p>Carregando...</p>;
  }

  function handleFiltroChange(event) {
    console.log(filmes);
    console.log(event.target.value);
    if (event.target.value == "ano") {
      filmes.sort(function (a, b) {
        return a - b;
      });
    }
    console.log(filmes);
  }

  function handleSearchChange(event) {
    setFilmesFixed(filmes);
    if (
      filmes.forEach(function (filme, index, object) {
        if (!filme.titulo.includes(event.target.value)) {
          console.log(filme);
          object.splice(index, 1);
        }
      })
    );
    console.log(filmes);
  }

  return (
    <div className="container text-center">
      <div className="search">
        <input
          type="text"
          placeholder="Pesquisar..."
          onChange={handleSearchChange}
        ></input>
      </div>
      <div className="filtrarPor">
        <label>Filtrar por:</label>
        <select name="filtro" id="filtro" onChange={handleFiltroChange}>
          <option value="titulo">Título</option>
          <option value="ano">Ano</option>
          <option value="nota">Nota</option>
        </select>
      </div>
      <div className="row">
        {filmes.map((filme, i) => (
          <div className="col" key={i}>
            <div className="card">
              <img
                src={filme.poster}
                alt={filme.titulo}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">
                  {filme.titulo} ({filme.ano}){" "}
                </h5>
                <p>Sinopse</p>
                <p className="card-text">{filme.descricao}</p>
                <p>{filme.nota}</p>
                <Assitido javisto={filme.assistido} />
                <a href={`/detalhes/${filme.titulo}`}>
                  <div className="btn btn-primary">Detalhes</div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
