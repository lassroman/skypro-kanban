import { useState } from "react";
import * as S from "../SignInPage/SignInPage.styled";
import { ModalFormLogin, SignUpBtn } from "./SignUpPage.styled";
import { signUp } from "../../Api";

export default function SingUpPage({ login }) {
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
        await signUp(regData).then((data) => {
            login(data.newUser)
        })
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
                                name="first-name"
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
                                <S.SignInBtnText onClick={handleReg}>Зарегистрироваться</S.SignInBtnText>{" "}
                            </SignUpBtn>
                            <S.ModalFormGroup>
                                <S.ModalFormGroupPar>
                                    Уже есть аккаунт?
                                    <S.ModalFormGroupSpan>Войдите здесь</S.ModalFormGroupSpan>
                                </S.ModalFormGroupPar>
                            </S.ModalFormGroup>
                        </ModalFormLogin>
                    </S.ModalBlock>
                </S.Modal>
            </S.Container>
        </S.Wrapper >

    )
}