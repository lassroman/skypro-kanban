import { useState } from "react"
import * as S from "./Header.styled";
import { Container } from "../../styled/common/Common.styled";
import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import { useUser } from "../../hooks/useUser";

export default function Header() {
    const [isOpened, setIsOpened] = useState(false);
    const { user } = useUser()
    function togglePopup() {
        setIsOpened((prev) => !prev)
    }
    return (
        <S.StyledHeader>
            <Container>
                <S.HeaderBlock>

                    <S.HeaderLogo>
                        <img src="images/logo.png" alt="logo" />
                    </S.HeaderLogo>


                    <S.HeaderNav>
                        <Link to={appRoutes.NEW_TASK}>
                            <S.HeaderMainNewBtn id="btnMainNew">
                                <S.HeaderMainNewBtnLink>
                                    Создать новую задачу
                                </S.HeaderMainNewBtnLink>
                            </S.HeaderMainNewBtn>
                        </Link>
                        <S.HeaderUser onClick={togglePopup} >
                            {user.name}
                        </S.HeaderUser>
                        {isOpened && (<S.HeaderPopUserSet
                            id="user-set-target"
                        >
                            <S.HeaderUserName>{user.name}</S.HeaderUserName>
                            <S.HeaderUserMail>{user.login}</S.HeaderUserMail>
                            {/* <S.HeaderUserTheme>
                                <S.HeaderUserThemeText>Темная тема</S.HeaderUserThemeText>
                                <S.HeaderUserSetThemeInp
                                    type="checkbox" name="checkbox" />
                            </S.HeaderUserTheme> */}
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