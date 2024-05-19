import styled from "styled-components";


export const PopNewCard = styled.div`
/* display: none; */
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
  `;

export const PopNewCardContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  `;

export const PopNewCardBlock = styled.div`
display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  position: relative;
  `;

export const PopNewCardContent = styled.div`
display: block;
text-align: left;
`;

export const CardTitleTask = styled.h3`
color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
  `;

export const CardClose = styled.div`
position: absolute;
  top: 20px;
  right: 30px;
  color: #94A6BE;
  cursor: pointer;
  :hover {
    color: #000000;
  }
  `;

export const PopNewCardWrap = styled.div`
display: flex;
align-items: flex-start;
justify-content: space-between;
`;

export const PopNewCardForm = styled.form`
max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
  `;

export const FormNewBlock = styled.div`
display: flex;
flex-direction: column;
`;

export const FormNewInput = styled.input`
width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin: 20px 0;

  ::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  `;

export const FormNewArea = styled.textarea`
width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  max-width: 370px;
  margin-top: 14px;
  height: 200px;

  ::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }`

export const PopNewCardCategories = styled.div`
margin-bottom: 20px;
`;

export const CategoriesPar = styled.p`
margin-bottom: 14px;
color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;


export const CategoriesThemes = styled.div`
font-size: 14px;
    color: #333;
    display: inline-block;
    margin-right: 10px;
    letter-spacing: 0.5px;
  `;


export const RadioTool = styled.div`
margin-top:15px;
`;

export const CategoriesThemeInput = styled.input`
display: none;

&:checked + label {
opacity: 100%;
}
`;

export const RadioToolbarLabel1 = styled.label`
  display: inline-block;
  padding: 8px 20px 8px 20px;
  border-radius: 24px;
  color: #ff6d00;
  background: #ffe4c2;
  cursor: pointer;
  margin-right: 7px;
  opacity: 50%;

  &:hover {
    opacity: 100%;
  }
`;

export const RadioToolbarLabel2 = styled.label`
  display: inline-block;
  padding: 8px 20px 8px 20px;
  border-radius: 24px;
  color: #06b16e;
  background: #b4fdd1;
  cursor: pointer;
  margin-right: 7px;
  opacity: 50%;

  &:hover {
    opacity: 100%;
  }
`;

export const RadioToolbarLabel3 = styled.label`
  display: inline-block;
  padding: 8px 20px 8px 20px;
  border-radius: 24px;
  color: #9a48f1;
  background: #e9d4ff;
  cursor: pointer;
  margin-right: 7px;
  opacity: 50%;

  &:hover {
    opacity: 100%;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 8px;
`;

export const CreateButton = styled.button`
  width: 132px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  float: right;
  &:hover {
    background-color: #33399b;
  }
`;


