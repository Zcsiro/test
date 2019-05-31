import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper =styled.div`
    height:56px;
    position:relative;
    border-bottom:1px soild #f0f0f0
`;
export const Logo =styled.a.attrs({
    href:   '/'
})`

    position:absolute;
    top:0;
    left:0;
    diplay:block;
    width:100px;
    height:56px;
    background: url(${logoPic});
    background-size:  contain;
`;

export const Nav = styled.div`
    width:960px;
    height:100%;
    margin:0 auto;
   padding-right:70px;
   boxsizing:border-box;

`;
export const NavItem = styled.div`
    line-height:56px;
    font-size:17px;
    padding:0 15px;
    color:#333;
    float:left;
    &.left{
        float:left;
        color:#969696;
    }
    &.right{
        float:right;
       
    }
    &.active{
        color:#ea6f5a;
    }
`;
export const SearchWrapper = styled.div`
   float:left;
   overflow:hidden;

`;
export const NavSearch =styled.input.attrs({
    placeholder:'搜索'
})`
    width:160px;
    height:38px;
    margin-top:9px;
    padding:0 20px;
    margin-left:20px;
    box-sizing:border-box;
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee;
    font-size:14px;
    &::placeholder{
        color:#999;
    }
`;
export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`
export const Button = styled.div`
    float:right;
    margin-top:9px;
    margin-right:20px;
    padding:0 20px;
    border-radius:19px;
    line-height:38px;
    border-radius:19px;
    border:1px solid #ec6149;
&.reg{
    color:#ec6149;
}
&.writtig{
    color:#fff;
    background:#ec6149;
}
`