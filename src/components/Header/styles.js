import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;

    padding: 0 100px;
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 10px;
`;

export const Brand = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;

    > h1 {
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;

export const Search = styled.div`
    width: 70%;
    padding: 40px 64px 30px 64px;
`;

export const Perfil = styled.div`
    display: flex;
    justify-content: end;
    
    > div {
        width: 200px;
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        line-height: 24px;
        
        justify-content: center;
        
        text-align: right;
        margin-right: 15px;
        
        span {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
        
        strong {
            font-size: 20px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`;

export const Botao = styled(Link)`
    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }
    
`;