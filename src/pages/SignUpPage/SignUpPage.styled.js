import { styled } from "styled-components";

export const SignUpBtn = styled.button`
width: 100%;
  height: 30px;
  background-color: #565EEF;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #FFFFFF;
  &:hover {
    background-color: #33399b;
};
@media screen and (max-width: 375px) {
       
    height: 40px;
}`;