import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import './App.css';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
    } else {
      setIsLoggedIn(true); // mostra que o login foi bem-sucedido
    }
  };

  return (
    <Container fluid className="login-container">
      {/* efeito de partículas subindo */}
      <div className="particles-container"></div>
      <div className="stars">
        {[...Array(100)].map((_, i) => (
          <span
            key={i}
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          ></span>
        ))}
      </div>
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col xs={12} sm={8} md={6} lg={4}>
          <div className="login-form-wrapper">
            <h2 className="text-center mb-4">Login</h2>
            
            {/* mensagem de sucesso */}
            {isLoggedIn && (
              <Alert variant="success" className="mb-3">
                Login realizado com sucesso! Bem-vindo(a) ao sistema.
              </Alert>
            )}

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Por favor, insira um e-mail válido.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  A senha é obrigatória.
                </Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mt-3 submit-btn">
                Entrar
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
