import { useState } from "react";
import * as S from "../SignInPage/SignInPage.styled";
import { ModalFormLogin, SignUpBtn } from "./SignUpPage.styled";
import { signUp } from "../../Api";
import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import { useUser } from "../../hooks/useUser";

export default function SingUpPage() {
    const { login } = useUser();
    const navigate = useNavigate();
    const [regData, setRegData] = useState({ name: "", login: "", password: "" })


    const handleInputChange = (e) => {
        const { name, value } = e.target; // Извлекаем имя поля и его значение

        setRegData({
            ...regData, // Копируем текущие данные из состояния
            [name]: value, // Обновляем нужное поле
        });
    };


    const handleReg = async (e) => {
        e.preventDefault();
        console.log(regData)
        await signUp(regData).then((data) => {
            console.log(data)
            login(data.user);
            navigate(appRoutes.MAIN);
        }).catch((error) => {
            alert(error.message);
        });
    }
    return (
        <S.Wrapper>
            <S.Container>
                <S.Modal>
                    <S.ModalBlock>
                        <S.ModalTitle>
                            <h2>Регистрация</h2>
                        </S.ModalTitle>
                        <ModalFormLogin >
                            <S.ModalInput
                                value={regData.name}
                                onChange={handleInputChange}
                                type="text"
                                name="name"
                                id="first-name"
                                placeholder="Имя"
                            />
                            <S.ModalInput
                                value={regData.login}
                                onChange={handleInputChange}
                                type="text"
                                name="login"
                                id="loginReg"
                                placeholder="Эл. почта"
                            />
                            <S.ModalInput
                                value={regData.password}
                                onChange={handleInputChange}
                                type="password"
                                name="password"
                                id="passwordFirst"
                                placeholder="Пароль"
                            />
                            <SignUpBtn >
                                <Link to={appRoutes.MAIN}>
                                    <S.SignInBtnText onClick={handleReg}>Зарегистрироваться</S.SignInBtnText>{" "}
                                </Link>
                            </SignUpBtn>
                            <S.ModalFormGroup>
                                <S.ModalFormGroupPar>
                                    Уже есть аккаунт?
                                    <Link to={appRoutes.SIGNIN}>
                                        <S.ModalFormGroupSpan>Войдите здесь</S.ModalFormGroupSpan>
                                    </Link>
                                </S.ModalFormGroupPar>
                            </S.ModalFormGroup>
                        </ModalFormLogin>
                    </S.ModalBlock>
                </S.Modal>
            </S.Container>
        </S.Wrapper >

    )
}