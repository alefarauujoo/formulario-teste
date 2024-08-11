import React, { useState } from 'react';
import './App.css';


function App() {
  const [formData, setFormData] = useState({
    nome: '',             
    email: '',
    senha: '',            
    confirmacaoSenha: ''  
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.senha !== formData.confirmacaoSenha) {
      setError('As senhas não coincidem');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        'x-api-key': 'ECA1AB4CE8583613A2C759B445E98',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess(result.message || 'Cadastro realizado com sucesso');
        setError('');
      } else {
        setError(result.message || 'Erro no cadastro');
        setSuccess('');
      }
    } catch (error) {
      setError('Erro na conexão com o servidor');
      setSuccess('');
    }
  };

  return (
    <div className='main-container'>

    <div className='flex-row-c'>
        <div className='frame'>
          <div className='buttons'>
            <span className='price'>Preço</span>
          </div>
          <div className='frame-1'>
            <span className='resale'>Revenda</span>
          </div>
          <div className='frame-2'>
            <span className='agencies'>Agências</span>
          </div>
          <div className='frame-3'>
            <span className='contato'>Contato</span>
          </div>
        </div>
        <button className='button-frame'>
          <span className='login'>Login</span>
        </button>
        <div className='menu'>
          <div className='vector' />
        </div>
        <div className='image' />
      </div>

      <div className='flex-row-ecf'>
        <div className='d-casual-life-smiling-young-man-with-laptop-sitting-on-floor' />
        <div className='caixa-de-login'>
        <div className='tittle'>
            <span className='comece-agora'>Comece agora</span>
          </div>
          <div className='subtittle'>
            <span className='cadastro-rapido'>
              Se cadastre em poucos segundos e comece a usar o NitroNews hoje
              mesmo!
            </span>
          </div>
          
      

          <div className='frame-4'>
          <form className="form" onSubmit={handleSubmit}>
        <h1>Formulário de cadastro</h1>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <input
          type="text"
          name="nome"
          placeholder="Nome Completo"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="senha" 
          placeholder="Senha"
          value={formData.senha} 
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmacaoSenha"
          placeholder="Confirme senha"
          value={formData.confirmacaoSenha}
          onChange={handleChange}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
          </div>

    </div>

    </div>
      </div>

  );
}

export default App;
