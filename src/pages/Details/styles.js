import styled from "styled-components";

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
    margin-top: 25px;
    overflow-y: auto;
    scrollbar-color: ${({theme}) => theme.COLORS.PINK}  ${({theme}) => theme.COLORS.WHITE};

    max-width: 100%;
    padding: 0 125px;

    .backLink {
        label {
            font-size: 16px;
            margin-left: 7px;
            color: ${({theme}) => theme.COLORS.PINK};
            vertical-align: 3px;
            cursor: pointer;
        }
        
        svg{
            font-size: 16px;
            color: ${({theme}) => theme.COLORS.PINK};
        }
    }

    > section {
        > h2 {
            height: 0;
            margin: 0;
            padding: 0;
            border: 0;
        }
    }
`;