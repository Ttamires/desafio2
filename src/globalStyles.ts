import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    padding:0;
    margin:0;
    background: pink;

    section{ 
        height: 100vh;
        width: 100%;
        background: #e2e2;
        display: flex;

        .product-content{
            display: grid;
            text-align: center;
            height: 300px;
            background: #fff;
            border-radius: 12px;
            padding: 12px;
        }
    }
}
`