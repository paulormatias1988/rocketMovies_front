import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 105px auto;

    grid-template-areas: 
    "header header"
    "content content";

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
`;

export const Content = styled.div`
    grid-area: content;
    padding: 0 125px;
    
    width: 100%;
    height: auto;
    
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    
    margin-top: 47px;
    
    overflow-y: auto;
    scrollbar-color: ${({theme}) => theme.COLORS.PINK}  ${({theme}) => theme.COLORS.WHITE};

    > div {
        display: flex;
        justify-content: space-between;

        h2 {
            font-size: 32px;
            font-weight: 300;
        }
    }
`;

export const NewMovie = styled(Link)`    
    background-color: ${({theme}) => theme.COLORS.PINK};
    color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    padding: 0 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 5px;

    font-size: 16px;
    font-weight: 300;

    > svg {
        font-size: 20px;
        margin-right: 8px;
    }
`;