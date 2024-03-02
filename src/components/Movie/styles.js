import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};

    border: none;
    border-radius: 10px;

    padding: 22px;
    margin-bottom: 16px;

    > h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > div {
        margin-top: 8px;
        text-align: left;
        color: ${({ theme }) => theme.COLORS.PINK};
    
        .full {
            fill: ${({ theme }) => theme.COLORS.PINK};
        }

        .line {
            fill: none;
        }

        /*
        svg {
            fill: ${({ theme }) => theme.COLORS.PINK};
        }
        
        svg:nth-child(5) {
            fill: none;
        }
        */
    }

    > p {
        margin-top: 15px;
        margin-bottom: 15px;
        text-align: justify;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        display: -webkit-box;
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 24px;
    }
`;