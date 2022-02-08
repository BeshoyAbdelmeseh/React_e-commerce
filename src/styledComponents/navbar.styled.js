import styled from "styled-components";

export const NavbarStyle = styled.nav`
    box-shadow: 0 0 10px #888888;
    position: fixed;
    width: 100%;
    top: 0;
    background-color: #FFF;
    z-index: 2;

    ul{
        list-style-type: none;
        display: flex;
    }

    .main-a{
        text-decoration: none;
        color: #777777;
        font-weight: 400;
        &:hover{
            color: rgb(40, 40, 40);
        }
    }

    li{
        margin: auto 10px;
    }

    #main-div{
        display: flex;
        align-items: center;
        justify-content: space-between;

        ul:last-child{
            margin-right: 30px;
        }
    }

    img{
        width: 41px;
        height: auto;
    }

    .active{
        color: rgb(27, 196, 125);
    }

    #cartCounter{
        width: 25px;
        height: 25px;
        position: absolute;
        top: -10%;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        span{
            position: absolute;
            color: #FFF;
            font-size: 14px;
        }

        img{
            width: 100%;
            height: 100%;
        }
    }

    .currency-dropdown {
        position: relative;
        display: inline-block;
      }

    .currency-dropbtn {
        background-color: rgba(0,0,0,0);
        font-size: 20px;
        border: none;
    }

    .currency-dropdown-content {
        display: none;
        position: absolute;
        min-width: 100px;
        background-color: #f9f9f9;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }

    .currency-dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }

    .currency-dropdown-content a:hover {
        background-color: #f1f1f1
    }

    .currency-dropdown:hover .currency-dropdown-content {
        display: block;
    }

    .cart-dropdown {
        position: relative;
        display: inline-block;
    }

    .cart-dropbtn {
        background-color: rgba(0,0,0,0);
        border: none;
    }

    .cart-dropdown-content {
        display: none;
        position: absolute;
        right: 5%;
        background-color: #FFF;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 2;
    }

    
    .cart-dropdown:hover .cart-dropdown-content {
        display: block;
    }

    #overlay{
        background-color: rgba(128, 128, 128, 0.4);
        width: 100%;
        height: 100%;
        position: fixed;
        top: 11%;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        display: none;
    }

    .cart-dropdown:hover + #overlay {
        display: block;
    }
`

export const NavbarCartStyle = styled.div`
    width: 350px;
    min-height: 100px;
    padding: 10px 10px;
    font-size: 15px;

    > div{
        margin-bottom: 25px;
    }

    #itemsDiv{
        max-height: 300px;
        overflow: auto;
    }

    .itemContainer{
        display: flex;
        margin-bottom: 45px;

        &:last-child{
            margin-bottom: 0;
        }
    }

    .details{
        width: 55%;
        margin-right: 3%;
        > p{
            margin: 0 auto;
        }
    }

    .count{
        display: flex;
        flex-wrap: wrap;
        width: 9%;
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
        width: 40%;

        > img {
            width: 90%;
            height: 90%;
            object-fit: contain;
            padding: 5px;
        }
    }

    #total{
        font-weight: bold;
        display: flex;
        justify-content: space-between;
    }

    #buttons{
        display: flex;
        justify-content: space-between;
        
        a{
            width: 48%;

            button{
                width: 100%;
                padding: 10px 15px;
            }
        }
    }
`