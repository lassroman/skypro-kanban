import { useState } from "react";
import * as S from "./PopNewCard.styled"
import Calendar from "../../Calendar/Calendar";
import { useUser } from "../../../hooks/useUser";
import { Link, useNavigate } from "react-router-dom";
import { useTasks } from "../../../hooks/useTasks";
import { postTodos } from "../../../Api";
import { appRoutes } from "../../../lib/appRoutes";
import { FormLabel } from "../PopBrowse/PopBrowse.styled";

export default function PopNewCard() {

    const { user } = useUser();
    const navigate = useNavigate();
    const { setCards } = useTasks();

    const [selectedDate, setSelectedDate] = useState(null);

    const [newTask, setNewTask] = useState({
        title: "",
        description: "",
        topic: "",
    })
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const taskData = {
            ...newTask, date: selectedDate,
        }
        console.log(taskData);

        postTodos({ taskData, token: user.token })
            .then((data) => {
                console.log(data);
                if (data.error) {
                    alert(data.error)

                }
                else {
                    setCards(data.tasks)
                    navigate(appRoutes.MAIN)
                }
            }).catch((error) => {
                alert(error)
            })
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setNewTask({
            ...newTask,
            [name]: value,
        });
    };
    return (
        <S.PopNewCard id="popNewCard">
            <S.PopNewCardContainer>
                <S.PopNewCardBlock>
                    <S.PopNewCardContent>
                        <S.CardTitleTask>Создание задачи</S.CardTitleTask>
                        <Link to={appRoutes.MAIN}>
                            <S.CardClose>✖</S.CardClose>
                        </Link>
                        <S.PopNewCardWrap>
                            <S.PopNewCardForm
                                id="formNewCard"
                                action="#"
                            >
                                <S.FormNewBlock>
                                    <FormLabel htmlFor="formTitle" >
                                        Название задачи
                                    </FormLabel>
                                    <S.FormNewInput
                                        type="text"
                                        name="title"
                                        value={newTask.title}
                                        onChange={handleInputChange}
                                        id="formTitle"
                                        placeholder="Введите название задачи..."
                                        autoFocus=""
                                    />
                                </S.FormNewBlock>
                                <S.FormNewBlock>
                                    <FormLabel htmlFor="textArea" >
                                        Описание задачи
                                    </FormLabel>
                                    <S.FormNewArea
                                        name="description"
                                        value={newTask.description}
                                        onChange={handleInputChange}
                                        id="textArea"
                                        placeholder="Введите описание задачи..."

                                    />
                                </S.FormNewBlock>
                            </S.PopNewCardForm>
                            <Calendar
                                selectedDate={selectedDate}
                                setSelectedDate={setSelectedDate} />
                        </S.PopNewCardWrap>
                        <S.PopNewCardCategories>
                            <S.CategoriesPar>Категория</S.CategoriesPar>

                        </S.PopNewCardCategories>

                        <S.RadioTool>
                            <S.CategoriesThemeInput
                                type="radio"
                                id="radio1"
                                name="topic"
                                value="Web Design"
                                onChange={handleInputChange}
                            />
                            <S.RadioToolbarLabel1 htmlFor="radio1">Web Design</S.RadioToolbarLabel1>

                            <S.CategoriesThemeInput
                                type="radio"
                                id="radio2"
                                name="topic"
                                value="Research"
                                onChange={handleInputChange}

                            />
                            <S.RadioToolbarLabel2 htmlFor="radio2">Research</S.RadioToolbarLabel2>

                            <S.CategoriesThemeInput
                                type="radio"
                                id="radio3"
                                name="topic"
                                value="Copywriting"
                                onChange={handleInputChange}

                            />
                            <S.RadioToolbarLabel3 htmlFor="radio3">Copywriting</S.RadioToolbarLabel3>
                        </S.RadioTool>
                        <S.ButtonDiv>
                            <S.CreateButton onClick={handleFormSubmit} id="btnCreate">
                                Создать задачу
                            </S.CreateButton>
                        </S.ButtonDiv>
                    </S.PopNewCardContent>
                </S.PopNewCardBlock>
            </S.PopNewCardContainer>
        </S.PopNewCard >
    )
}