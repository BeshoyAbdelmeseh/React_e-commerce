import styled from "styled-components";

export const CenteredItem = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h1{
        color: ${({h1_color}) => h1_color || "rgb(0,0,0)"};
    }
`