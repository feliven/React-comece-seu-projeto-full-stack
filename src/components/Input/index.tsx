import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 12px 16px;
  border: 4px solid #e0e0e0;
  border-radius: 8px;
  font-size: 2rem;
  font-family: inherit;
  transition: all 0.3s ease;

  &::placeholder {
    color: #999;
  }

  &:hover {
    border-color: darkcyan;
  }

  &:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
  }
`;

export default Input;
