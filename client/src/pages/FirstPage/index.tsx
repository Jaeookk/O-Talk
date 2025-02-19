import Logo from "./headerLogo.svg"
import styled from "styled-components";
import { TextField } from "../../Components/TextField";
import { media } from "../../styles/theme";
import theme from "../../styles/theme";
export const FirstPage = () => {
  const click=()=>{

  };
  return(
    <Wrapper>
      <img src={Logo}></img>
      <TextField title="초대링크가 있습니까?" value="" onChange={click}></TextField>
      <LoginButton>로그인하고 시작하기</LoginButton>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width : 100%;
  display : flex;
  flex-direction : column;
  align-items: center;
  justify-content: space-around;
  margin-top : 15%;
  .img{
    width: 50%;
  }
`

const LoginButton = styled.button`
  width : 512px;
  height: 60px;
  border-radius : 5px;
  background-color: ${theme.palette.primary};
  font-size :25px;
  font-weight : 900;
  border: 0;
  color: ${theme.palette.complementary};
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
`