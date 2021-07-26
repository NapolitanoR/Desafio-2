import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

export const FormContainer = styled.div`
  .register-form {
    background: lightgrey;
    display: flex;
    flex-direction: column;
    width: 500px;
    margin: 50px auto;
  }

  form {
    display: flex;
    padding: 16px;
    border-radius: 12px;
    background: lightgrey;

    label {
      margin-top: 25px;
    }

    button[type="submit"] {
      margin-top: 15px;
    }
  }
`;

const Register: React.FC = () => {
  return (
    <FormContainer>
      <Link to="/">Home</Link>
      <form className="register-form">
        <label htmlFor="name">Nome Completo</label>
        <input
          id="name"
          type="text"
          aria-label="Nome Completo"
          placeholder="João da Silva"
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          aria-label="Email"
          placeholder="joao@teste.com"
        />

        <label htmlFor="email">Endereço completo</label>
        <input
          id="address"
          type="text"
          aria-label="Endereço Completo"
          placeholder="Rua Teste 123"
        />
        <input id="cep" type="text" aria-label="CEP" placeholder="CEP" />
        <button type="submit">Cadastrar</button>
      </form>
    </FormContainer>
  );
};

export default Register;
