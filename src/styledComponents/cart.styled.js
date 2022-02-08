import styled from "styled-components";

export const CartStyle = styled.div`

    font-size: 25px;

    #titleDiv{
        margin-bottom: 60px;
    }

    p:first-child{
        font-weight: bold;
    }

    .itemContainer{
        display: flex;
    }

    .details{
        width: 75%;
        margin-right: 3%;
        > p{
            margin: 0 auto;
        }
    }

    .count{
        display: flex;
        flex-wrap: wrap;
        width: 4%;
        align-content: space-between;
        justify-content: center;
        margin-right: 3%;
        
        > button{
            height: 25px;
            width: 25px;
            line-height: 1;
            background-color: #FFF;
            color: #000;
            border-style: solid;
            border-width: 1px;
            border-color: #000;
            font-size: 20px;

            &: hover{
                background-color: rgb(29,31,34);
                color: #FFF;
                transition: all .2s ease-in-out;
            }
        }
    }

    .pic{
        width: 20%;

        > img {
            width: 90%;
            height: 90%;
            object-fit: contain;
            padding: 5px;
        }
    }
`