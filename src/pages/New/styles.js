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

    h1 {
        margin-top: 24px;
        font-size: 36px;
        font-weight: 300;
    }

    .tags{

        div + div {
            margin-left: 15px;
        }
        
        display: flex;
        align-items: center;
        padding: 15px 10px 10px;
        border-radius: 10px;
        flex-wrap: wrap;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_BLACK};

        svg{
            font-size: 16px;
            color: ${({theme}) => theme.COLORS.PINK};
        }
    }
`;

export const Form = styled.form`
    max-width: 100%;
    padding: 0 125px;

    > header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 15px;

        a {
            color: ${({theme}) => theme.COLORS.GRAY_100};
            font-size: 20px;
        }
    }
    
    .inputs {
        margin-top: 25px;
        display: flex;

        div + div {
            margin-left: 20px;
        }
    }

    .textArea {
        margin-top: 20px;
        margin-bottom: 20px;
    }

    h2 {
        margin: 0;
    }

    .buttonActions {
        display: flex;

        button{
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_BLACK};
            color: ${({theme}) => theme.COLORS.PINK};
        }

        button + button {
            margin-left: 20px;
            background-color: ${({theme}) => theme.COLORS.PINK};
            color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        }
    }
`;