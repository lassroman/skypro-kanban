import { Link, useNavigate } from "react-router-dom"
import { appRoutes } from "../../../lib/appRoutes"
import { useUser } from "../../../hooks/useUser"
import * as S from "./PopExit.styled"

export default function PopExit() {
    const { logout } = useUser()
    const navigate = useNavigate()
    return (
        <S.PopExit id="popExit">
            <S.PopExitContainer>
                <S.PopExitBlock>
                    <S.PopExitTitle>
                        Выйти из аккаунта?
                    </S.PopExitTitle>
                    <S.PopExitFormGroup>
                        <S.PopExitYes onClick={() => {
                            logout();
                            navigate(appRoutes.SIGNIN);
                        }} id="exitYes">
                            Да, выйти
                        </S.PopExitYes>

                        <Link to={appRoutes.MAIN}>
                            <S.PopExitNo id="exitNo">
                                Нет, остаться
                            </S.PopExitNo>
                        </Link>
                    </S.PopExitFormGroup>
                </S.PopExitBlock>
            </S.PopExitContainer>
        </S.PopExit>
    )
}

