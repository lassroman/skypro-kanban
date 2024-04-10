import Card from "../Card/Card";
import * as S from "./Column.styled"

export default function Column({ title, cardList }) {
    return (
        <S.ColumnMain>
            <S.ColumnTitle>
                <S.ColumnTitleText>{title}</S.ColumnTitleText>
            </S.ColumnTitle>
            <S.ColumnCards>
                {cardList.map((card) => <Card topic={card.topic} title={card.title} date={card.date} key={card._id} id={card._id} />)}

            </S.ColumnCards>
        </S.ColumnMain>
    )
}