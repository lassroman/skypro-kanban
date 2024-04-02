import Card from "../Card/Card";
import * as S from "./Column.styled"

export default function Column({ title, cardList }) {
    return (
        <S.ColumnMain>
            <S.ColumnTitle>
                <S.ColumnTitleText>{title}</S.ColumnTitleText>
            </S.ColumnTitle>
            <S.ColumnCards>
                {cardList.map((card) => <Card topic={card.theme} title={card.title} date={card.date} key={card.id} id={card.id} />)}

            </S.ColumnCards>
        </S.ColumnMain>
    )
}