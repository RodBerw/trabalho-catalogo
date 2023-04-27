import React, { useState } from "react";
import "./register.css";

export default function Register() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [nomeCartao, setNomeCartao] = useState("");
  const [numeroCartao, setNumeroCartao] = useState("");
  const [cvc, setCvc] = useState("");

  const [numeroCartaoPassou, setNumeroCartaoPassou] = useState(0);
  const [cvcPassou, setCvcPassou] = useState(0);

  function handleNomeChange(event) {
    setNome(event.target.value);
  }

  function handleTelefoneChange(event) {
    setTelefone(event.target.value);
  }

  function handleEnderecoChange(event) {
    setEndereco(event.target.value);
  }

  function handleNomeCartaoChange(event) {
    setNomeCartao(event.target.value);
  }

  function handleNumeroCartaoChange(event) {
    if (event.target.value.length != 20) {
      setNumeroCartaoPassou(0);
    } else {
      setNumeroCartaoPassou(1);
    }
    setNumeroCartao(event.target.value);
  }

  function handleCvcChange(event) {
    if (event.target.value.length != 3) {
      setCvcPassou(0);
    } else {
      setCvcPassou(1);
    }
    setCvc(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // enviar dados de cadastro para o servidor aqui
    console.log(`Nome: ${nome}, Telefone: ${telefone},
    Endereço: ${endereco}, Nome do Cartão: ${nomeCartao},
    Número do Cartão: ${numeroCartao}, CVC: ${cvc}`);
  }

  return (
    <div className="form-custom">
      <h1 className="cadastro">Cadastro</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="container1">
          <div className="user">
            <h4>Dados Pessoais</h4>
            <label>
              Nome:
              <input type="text" value={nome} onChange={handleNomeChange} />
            </label>
            <br />
            <label>
              Telefone:
              <input
                type="text"
                value={telefone}
                onChange={handleTelefoneChange}
              />
            </label>
            <br />
            <label>
              Endereço:
              <input
                type="text"
                value={endereco}
                onChange={handleEnderecoChange}
              />
            </label>
            <br />
          </div>
          <div className="payment">
            <h4>Dados do Cartão</h4>
            <label>
              Nome do Cartão:
              <input
                type="text"
                value={nomeCartao}
                onChange={handleNomeCartaoChange}
              />
            </label>
            <br />
            <label>
              Número do Cartão:
              <input
                type="text"
                value={numeroCartao}
                onChange={handleNumeroCartaoChange}
              />
            </label>
            {numeroCartaoPassou == 0 && (
              <p className="warning">*O número do cartão deve ter 20 dígitos</p>
            )}
            <br />
            <label>
              CVC:
              <input type="text" value={cvc} onChange={handleCvcChange} />
            </label>
            {cvcPassou == 0 && (
              <p className="warning">
                *O número do CVC deve ter apenas 3 dígitos
              </p>
            )}
            <br />
          </div>
        </div>
        <button type="submit" className="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}
