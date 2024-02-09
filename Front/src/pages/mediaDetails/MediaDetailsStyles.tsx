import styled from 'styled-components';

export const StyledMain = styled.main`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 15px;
   padding: 20px;
`;

export const StyledTitleContainer = styled.div`
   display: flex;
   align-items: center;
   gap: 20px;
`;

export const StyledTitle = styled.h1`
   color: #fff;
   font: var(--font-HeadingMedium);
`;

export const StyledImg = styled.img`
   height: 445px;
   width: 315px;
   border-radius: 8px;
`;

export const StyledInfoContainer = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 20px;
   align-items: center;
   justify-items: end;
   padding: 20px 10px;
   font: var(--font-BodyMedium);
   color: var(--clr-White);
`;

export const StyledInfoDetails = styled.div`
   display: flex;
   flex-direction: column;
   gap: 10px;
`;

export const StyledGenres = styled.div`
   display: flex;
   flex-wrap: wrap;
`;

export const StyledRuntimeLanguage = styled.div`
   color: var(--clr-GreyishBlue);
   font: var(--font-BodyMedium);
`;

export const StyledVotes = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 100px;
   height: 100px;
   border-radius: 50%;
   background-color: var(--clr-SemiDarkBlue);
`;

export const StyledAverage = styled.div`
   font: var(--font-HeadingMedium);
`;

export const StyledVoteCount = styled.div`
   color: var(--clr-GreyishBlue);
   font: var(--font-BodySmall);
`;

export const StyledSynopsisContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 10px;
   padding: 20px;
   border-radius: 8px;
   font: var(--font-BodyMedium);
   color: var(--clr-White);
   background-color: var(--clr-SemiDarkBlue);
`;
