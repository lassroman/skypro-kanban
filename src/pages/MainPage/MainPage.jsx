import { useEffect, useState } from 'react'
import { cardList } from '../../data';
import Header from '../../components/Header/Header';
import MainContent from '../../components/MainContent/MainContent';
import Column from '../../components/Column/Column';
import { Outlet } from 'react-router-dom';
import { Wrapper } from '../../styled/common/Common.styled';
import { GlobalStyle } from '../../styled/common/Global.styled';



const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
];

export default function MainPage() {
    const [cards, setCards] = useState(cardList);

    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2 секунды задержки
    }, []);

    function onCardAdd() {
        // Логика добавления карточки
        const newCard = {
            id: cards.length + 1,
            theme: "Web Design",
            title: "Название задачи",
            date: "30.10.23",
            status: "Без статуса",
        };
        setCards([...cards, newCard]);
    }
    return (
        <>
            {/* <GlobalStyle /> */}
            <Wrapper>
                <Outlet />

                <Header onCardAdd={onCardAdd} />
                {isLoading ? "Данные загружаются..." : (
                    <MainContent>
                        {statusList.map((status) => <Column
                            title={status}
                            key={status}
                            cardList={cards.filter((card) => card.status === status)} />)}
                    </MainContent>
                )}
            </Wrapper>
        </>
    )
}