import styled from 'styled-components';

export const LoginWrapper = styled.div`
    width:500px;
    height:400px;
    margin:16vh auto 10vh;
    background:#f3f3f3;
    border-radius:30px;
    text-align:center;
    box-shadow:0 0 8px rgba(0,0,0,0.1);
    .logoPic{
        margin:30px auto;
    }
    .username{
        width:350px;
    }
    .password{
        width:350px;
    }
    .login-form-button{
        margin-top:20px;
        width:350px;
        background:#d82128;
        border-color: #d82128;
    }
    .login-form-button:hover{
        border-color: #d82128;
        background:#b7282d;
        font-weight:bold;
    }
    .f-right{
        cursor: pointer;
    }
    .checkCodeImg{
        cursor: pointer;
    }
`;

export const ErrorMessge = styled.div`
    color: #d82128;
    font-size:14px;
`;
