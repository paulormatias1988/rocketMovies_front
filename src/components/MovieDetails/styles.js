
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    border: none;
    border-radius: 10px;

    margin-bottom: 16px;

    .head {
        width: 100%;
        display: flex;
        text-align: left;
        align-items: center;
        
        > h1 {
            font-weight: 500;
            font-size: 36px;
            padding-right: 20px;
            color: ${({ theme }) => theme.COLORS.WHITE};
            cursor: pointer;
        }

        > h1:hover {
            opacity: 40%;
        }
            
        > div {
            margin-top: 8px;
            color: ${({ theme }) => theme.COLORS.PINK};

            svg {
                height: 20px;
                width: 20px;
                margin-right: 10px;
            }
            
            .full {
                fill: ${({ theme }) => theme.COLORS.PINK};
            }

            .line {
                fill: none;
            }

        }

    }

    .dataStatus{
        width: 100%;
        display: flex;
        margin-top: 20px;
        color: ${({ theme }) => theme.COLORS.WHITE};

        .imgMovie {
            > img {
                width: 16px;
                height: 16px;
                border-radius: 50%;
            }
        }

        div {
            padding-right: 10px;
        }

        svg {
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }

    .tags {
        margin-top: 40px;
        margin-bottom: 40px;
        > footer {
            width: 100%;
            display: flex;
            margin-top: 24px;
        }
    }

    > p {
        margin-top: 20px;
        margin-bottom: 15px;
        text-align: justify;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
`;