import styled from "styled-components";
import { FiSearch } from 'react-icons/fi';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 719px;
  margin: 0 auto;

  @media (min-width: 1024px){
    margin: 0;
  }
`;

export const StyledInput = styled.input`
  padding-left: 30px;
  width: 100%;
  height: 30px;
  border: none;
  background: none;
  color: hsl(0, 0%, 50%);
  outline: none;
  font: var(--font-BodyMedium);
`;

export const SearchIcon = styled(FiSearch)`
  font-size: 1.5rem;
  color: var(--clr-White);
`;

