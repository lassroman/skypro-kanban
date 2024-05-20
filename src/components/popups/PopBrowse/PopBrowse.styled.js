import styled from 'styled-components';
import { topicStyles } from '../../../lib/topic';

export const PopBrowse = styled.div`
width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
  `;

export const PopBrowseContainer = styled.div`
width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);`

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  position: relative;`

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;`

export const PopBrowseTop = styled.div`
display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;`

export const PopBrowseTitle = styled.h3`
color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;`

export const TopicText = styled.p`
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
`;

export const CategoriesTheme = styled.div`
display: inline-block;
width: auto;
height: 30px;
padding: 8px 20px;
border-radius: 24px;
margin-right: 7px;
opacity: 0.4;
opacity: 1 !important;
display: block;
background-color: ${({ $themeColor }) =>
    topicStyles[$themeColor]?.backgroundColor || "#94a6be"};


  color: ${({ $themeColor }) => topicStyles[$themeColor]?.color || "#ffffff"};

`;

export const CategoriesThemeText = styled.p`
  
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
  
`;

export const PopBrowseStatus = styled.div`
  margin-bottom: 11px;
`;

export const StatusText = styled.p`
margin-bottom: 14px;
color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;`

export const RadioToolbar = styled.div`
  margin-top:15px;`

export const RadioToolbarLabel = styled.label`
    display: inline-block;
    padding: 6px 8px 6px 8px;
    border-radius: 20px;
    border: 0.7px solid var(--palette-navy-60, #94A6BE);
    background: transparent;
    cursor: pointer;
    margin-right: 7px;
    opacity: 50%;
  
    &:hover {
    //   opacity: 100%;
      background-color:#94A6BE;
      ;
      color: #FFFFFF;
    }
  `


export const InputRadio = styled.input`
    display: none;
  
  &:checked + label {
    // opacity: 100%;
    background-color:#94A6BE;
    ;
    color: #FFFFFF;
  }
  `

export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;`


export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;`

export const PopBrowseFormBlock = styled.div`
  display: flex;
  flex-direction: column;`

export const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const PopBrowseButton = styled.div`
display: flex;
//   flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  
    `

export const ButtonGroup = styled.div`
width: 100%;
 margin-right: 0px;
 display:flex;`


export const BrowseButtonEdit = styled.button`
  background-color: transparent;
  color:  #565EEF;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565EEF);

  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  
  margin-right:8px;
  padding:8px 15px;
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  
  
  &:hover{
    background-color: #33399b;
    color: #FFFFFF;
  }`

export const BrowseButtonDelete = styled.button`
  background-color: transparent;
  color:  #565EEF;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565EEF);

  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  
  margin-right:8px;
  padding:8px 15px;
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  
  
  &:hover{
    background-color: #33399b;
    color: #FFFFFF;
  }`

export const ButtonBrowseClose = styled.span`
  background-color: #565EEF;
  color: #FFFFFF;
  border-radius: 4px;
  border: none;


  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;

  margin-right:8px;
  padding:8px 15px;
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;


  &:hover{
    background-color: #33399b;
  
 }`

export const FormLabel = styled.label`
 color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;`