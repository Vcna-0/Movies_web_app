import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

export const StyledForm = styled.form`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   width: 90%;
   max-width: 768px;
   margin-left: 20px;

   @media screen and (min-width: 768px) {
      margin-left: 0;
   }

   @media screen and (min-width: 1024px) {
      margin: 0;
   }
`;

export const StyledInput = styled.input`
   width: 100%;
   height: 30px;
   border: none;
   background: none;
   color: hsl(0, 0%, 50%);
   outline: none;
   font: var(--font-BodyMedium);

   &:focus {
      border-bottom: 1px solid var(--clr-GreyishBlue);
   }
`;

export const SearchIcon = styled(FiSearch)`
   font-size: 1.5rem;
   color: var(--clr-White);
   margin-right: 20px;
`;
