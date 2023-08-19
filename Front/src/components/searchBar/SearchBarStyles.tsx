import styled from "styled-components";
import { FiSearch } from 'react-icons/fi';

export const StyledForm = styled.form`
  position: relative;
  display: flex;
  padding: 16px;
`;

export const StyledInput = styled.input`
    padding-left: 30px;
    width: 100%;
    height: 30px;
    border: none;
    background: none;
    color: #FFF;
    outline: none;
`;

export const SearchIcon = styled(FiSearch)`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
    font-size: 1.5rem;
    color: #FFF;
`;