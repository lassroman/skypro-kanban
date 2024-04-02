import { useState } from "react"
import * as S from "./Header.styled";
import { Container } from "../../styled/common/Common.styled";
import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";

export default function Header({ onCardAdd }) {
    const [isOpened, setIsOpened] = useState(false);
    function togglePopup() {
        setIsOpened((prev) => !prev)
    }
    return (
        <S.StyledHeader>
            <Container>
                <S.HeaderBlock>
                    <S.HeaderLogo className="_show _light">
                        <a href="" target="_self">
                            <img src="images/logo.png" alt="logo" />
                        </a>
                    </S.HeaderLogo>
                    <S.HeaderLogo className="_dark">
                        <a href="" target="_self">
                            <img src="images/logo_dark.png" alt="logo" />
                        </a>
                    </S.HeaderLogo>
                    <S.HeaderNav>
                        <S.HeaderMainNewBtn onClick={onCardAdd} id="btnMainNew">
                            <S.HeaderMainNewBtnLink>
                                Создать новую задачу
                            </S.HeaderMainNewBtnLink>
                        </S.HeaderMainNewBtn>
                        <S.HeaderUser onClick={togglePopup} >
                            Ivan Ivanov
                        </S.HeaderUser>
                        {isOpened && (<S.HeaderPopUserSet
                            id="user-set-target"
                        >
                            {/* <a href="">x</a> */}
                            <S.HeaderUserName>Ivan Ivanov</S.HeaderUserName>
                            <S.HeaderUserMail>ivan.ivanov@gmail.com</S.HeaderUserMail>
                            <S.HeaderUserTheme>
                                <S.HeaderUserThemeText>Темная тема</S.HeaderUserThemeText>
                                <S.HeaderUserSetThemeInp type="checkbox" name="checkbox" />
                            </S.HeaderUserTheme>
                            <Link to={appRoutes.EXIT}>
                                <S.HeaderUserSetBtn >Выйти</S.HeaderUserSetBtn>
                            </Link>
                        </S.HeaderPopUserSet>)}

                    </S.HeaderNav>
                </S.HeaderBlock>
            </Container>
        </S.StyledHeader>
    )
}