import * as S from "../SignInPage/SignInPage.styled";
import { SignUpBtn } from "./SignUpPage.styled";

export default function SingUpPage() {
    return (
        <S.Wrapper>
            <S.Container>
                <S.Modal>
                    <S.ModalBlock>
                        <S.ModalTitle>
                            <h2>Регистрация</h2>
                        </S.ModalTitle>
                        <S.ModalFormLogin id="formLogUp" action="#">
                            <S.ModalInput
                                type="text"
                                name="first-name"
                                id="first-name"
                                placeholder="Имя"
                            />
                            <S.ModalInput
                                type="text"
                                name="login"
                                id="loginReg"
                                placeholder="Эл. почта"
                            />
                            <S.ModalInput
                                type="password"
                                name="password"
                                id="passwordFirst"
                                placeholder="Пароль"
                            />
                            <SignUpBtn id="SignUpEnter">
                                <S.SignInBtnText>Зарегистрироваться</S.SignInBtnText>{" "}
                            </SignUpBtn>
                            <S.ModalFormGroup>
                                <S.ModalFormGroupPar>
                                    Уже есть аккаунт?
                                    <S.ModalFormGroupSpan>Войдите здесь</S.ModalFormGroupSpan>
                                </S.ModalFormGroupPar>
                            </S.ModalFormGroup>
                        </S.ModalFormLogin>
                    </S.ModalBlock>
                </S.Modal>
            </S.Container>
        </S.Wrapper >

    )
}