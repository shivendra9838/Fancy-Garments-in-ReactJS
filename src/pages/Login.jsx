import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Define the keyframe animation for success message
const showMessage = keyframes`
  0% {
    opacity: 0;
    transform: rotateY(-90deg);
  }
  50% {
    opacity: 0.5;
    transform: rotateY(30deg);
  }
  100% {
    opacity: 1;
    transform: rotateY(0deg);
  }
`;

// Success message with animation
const SuccessMessage = styled.p`
  opacity: 0;
  transform: rotateY(-90deg);
  animation: ${showMessage} 1s forwards;
  color: green;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

// Form container
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 24rem;
  margin: auto;
  margin-top: 3rem;
  gap: 1.25rem;
  color: #333;
  padding: 2rem;
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

// Input fields and button
const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: #333;
  }
`;

const Button = styled.button`
  background-color: #333;
  color: white;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  margin-top: 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #444;
  }
`;

const AuthForm = () => {
  const [currentState, setCurrentState] = useState('Sign Up');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (currentState === 'Sign Up') {
      if (formData.email && formData.password) {
        setIsSuccess(true);
        setErrorMessage('');
      } else {
        setErrorMessage('Please fill in all fields.');
      }
    } else {
      if (formData.email && formData.password) {
        setIsSuccess(true);
        setErrorMessage('');
      } else {
        setErrorMessage('Invalid login credentials.');
      }
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <FormContainer onSubmit={onSubmitHandler}>
        <div className="inline-flex items-center gap-2 mb-6">
          <p className="text-3xl font-bold">{currentState}</p>
          <hr className="border-none h-[1.5px] w-12 bg-gray-800" />
        </div>

        {currentState === 'Sign Up' && (
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            required
          />
        )}

        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
        />

        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
          required
        />

        {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}

        {isSuccess && <SuccessMessage>{currentState === 'Sign Up' ? 'Successfully signed up! Please log in.' : 'Successfully logged in!'}</SuccessMessage>}

        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className="cursor-pointer">Forget your password</p>
          {currentState === 'Login' ? (
            <p onClick={() => setCurrentState('Sign Up')} className="cursor-pointer">
              Create account
            </p>
          ) : (
            <p onClick={() => setCurrentState('Login')} className="cursor-pointer">
              Login Here
            </p>
          )}
        </div>

        <Button>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</Button>
      </FormContainer>
    </div>
  );
};

export default AuthForm;
