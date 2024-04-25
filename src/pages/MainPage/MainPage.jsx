import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header';
import MainContent from '../../components/MainContent/MainContent';
import Column from '../../components/Column/Column';
import { Outlet } from 'react-router-dom';
import { Wrapper } from '../../styled/common/Common.styled';
import { GlobalStyle } from '../../styled/common/Global.styled';
import { getTodos } from '../../Api';
import { useUser } from '../../hooks/useUser';
import { useTasks } from '../../hooks/useTasks';



const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
];

export default function MainPage() {
    const { user } = useUser();
    const { cards, setCards } = useTasks();
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getTodos({ token: user.token }).then((cardList) => {
            console.log(cardList);
            setCards(cardList.tasks);
            setIsLoading(false)
        }).catch((error) => {
            alert(error)
        })
    }, [user, setCards])

    // function onCardAdd() {
    //     // Логика добавления карточки
    //     const newCard = {
    //         id: cards.length + 1,
    //         theme: "Web Design",
    //         title: "Название задачи",
    //         date: "30.10.23",
    //         status: "Без статуса",
    //     };
    //     setCards([...cards, newCard]);
    // }
    return (
        <>
            {/* <GlobalStyle /> */}
            <Wrapper>
                <Outlet />

                <Header />
                {isLoading ? "Данные загружаются..." : (
                    <MainContent>
                        {statusList.map((status) => <Column
                            title={status}
                            key={status}
                            cardList={cards?.filter((card) => card.status === status || [])} />)}
                    </MainContent>
                )}
            </Wrapper>
        </>
    )
}