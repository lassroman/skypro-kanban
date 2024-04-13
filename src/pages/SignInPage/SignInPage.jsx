import { useState } from "react"
import "./signin.css"
import * as S from "./SignInPage.styled"
import { signIn } from "../../Api";
import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";



export default function SignInPage({ login }) {
    const [loginData, setLoginData] = useState({ login: "", password: "" })
    const handleInputChange = (e) => {
        const { name, value } = e.target; // Извлекаем имя поля и его значение

        setLoginData({
            ...loginData, // Копируем текущие данные из состояния
            [name]: value, // Обновляем нужное поле
        });
    };

    const handleSignIn = async () => {

        await signIn(loginData).then((data) => {
            login(data.user)
        }).catch((error) => {
            alert(error.message)
        });
    }
    return (
        <S.Wrapper>
            <S.Container>
                <S.Modal>
                    <S.ModalBlock>
                        <S.ModalTitle>
                            <h2>Вход</h2>
                        </S.ModalTitle>
                        <S.ModalFormLogin id="formLogIn" action="#">
                            <S.ModalInput
                                value={loginData.login}
                                onChange={handleInputChange}
                                type="text"
                                name="login"
                                id="formlogin"
                                placeholder="Эл. почта"
                            />
                            <S.ModalInput
                                value={loginData.password}
                                onChange={handleInputChange}
                                type="password"
                                name="password"
                                id="formpassword"
                                placeholder="Пароль"
                            />
                            <S.SignInBtn >
                                <S.SignInBtnText onClick={handleSignIn}>Войти</S.SignInBtnText>
                            </S.SignInBtn>
                            <S.ModalFormGroup>
                                <S.ModalFormGroupPar>Нужно зарегистрироваться?</S.ModalFormGroupPar>
                                <Link to={appRoutes.SIGNUP}>
                                    <S.ModalFormGroupSpan>Регистрируйтесь здесь</S.ModalFormGroupSpan>
                                </Link>
                            </S.ModalFormGroup>
                        </S.ModalFormLogin>
                    </S.ModalBlock>
                </S.Modal>
            </S.Container>
        </S.Wrapper >

    )
}