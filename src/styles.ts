import styled from 'styled-components';

export const Container = styled.div `
    
    width: 80%;
    margin: auto;

    .content-header{
        display:flex;
        align-items: center;
        justify-content: space-between;
    }

    

    section {
        height: auto;
        width: 100%;
        background-color: lightgrey;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        border-radius: 15px;

        .texto {
        background: white;
        }

        

        .product-content{
            display: grid;
            text-align: center;
            justify-content: center;
            height: 300px;
            background: white;
            border-radius: 15px;
            padding: 15px;
            margin: 15px auto;
            max-width: 200px;
        }

        .product-content-button{
            margin: center;
            border-radius: 5px;
            border: black;
            background-color: grey;
            color: white;
            text-align: center;
            cursor: pointer;
        }
    }
`