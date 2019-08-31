import styled from 'styled-components';

export const HeaderContent = styled.div`
    width:1200px;
    position:relative;
    margin:0 auto;
    overflow:hidden;
    color:#ffffff;
    font-size:16px;
    .logoPic{
        float:left;
        margin-top:16px;
    }
    .homeBtn{
        float:right;
        width:60px;
        margin-right:20px;
        cursor: pointer;
    }
    .userName{
        float:right;
        width:100px;
        margin-right:20px;
    }
    .exit{
        float:right;
        width:110px;
        cursor: pointer;
        color:#fff;
    }
    .exit:hover{
        font-weight: bolder;
        font-size:18px;
    }
`;
