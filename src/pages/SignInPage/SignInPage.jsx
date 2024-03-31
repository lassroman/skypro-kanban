import "./signin.css"
import * as S from "./SignInPage.styled"


export default function SingInPage({ login }) {
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

                                type="text"
                                name="login"
                                id="formlogin"
                                placeholder="Эл. почта"
                            />
                            <S.ModalInput
                                type="password"
                                name="password"
                                id="formpassword"
                                placeholder="Пароль"
                            />
                            <S.SignInBtn onClick={login}>
                                <S.SignInBtnText>Войти</S.SignInBtnText>
                            </S.SignInBtn>
                            <S.ModalFormGroup>
                                <S.ModalFormGroupPar>Нужно зарегистрироваться?</S.ModalFormGroupPar>
                                <S.ModalFormGroupSpan>Регистрируйтесь здесь</S.ModalFormGroupSpan>
                            </S.ModalFormGroup>
                        </S.ModalFormLogin>
                    </S.ModalBlock>
                </S.Modal>
            </S.Container>
        </S.Wrapper >

    )
}