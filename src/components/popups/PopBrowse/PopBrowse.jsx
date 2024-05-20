import { Link, Navigate, useNavigate, useParams } from "react-router-dom"
import { appRoutes } from "../../../lib/appRoutes";
import Calendar from "../../Calendar/Calendar";
import { useState } from "react";
import { delTodo, editTodo } from "../../../Api";
import { useTasks } from "../../../hooks/useTasks";
import { useUser } from "../../../hooks/useUser";
import * as S from "./PopBrowse.styled"
import { topicHeader } from "../../../lib/topic";

export default function PopBrowse() {
    const { id } = useParams();
    const { user } = useUser();
    const { cards, setCards } = useTasks();
    const navigate = useNavigate();
    const currentTask = cards.find((card) => id === card._id)


    const [selectedDate, setSelectedDate] = useState(currentTask.date)


    const [isEdit, setIsedit] = useState(false)


    const [newTask, setNewTask] = useState({
        title: currentTask.title,
        description: currentTask.description,
        topic: currentTask.topic,
    })
    if (!currentTask) {
        return <Navigate to={appRoutes.MAIN} />
    }


    const handleInputChange = (e) => {
        const { name, value } = e.target; // Извлекаем имя поля и его значение

        setNewTask({
            ...newTask, // Копируем текущие данные из состояния
            [name]: value, // Обновляем нужное поле
        });
    };

    const handleTaskDelete = async (e) => {
        e.preventDefault()
        await delTodo({
            id,
            token: user.token,
        })
            .then((data) => {
                setCards(data.tasks)
                navigate(appRoutes.MAIN)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const handleTaskChange = async () => {
        const taskData = {
            ...newTask,
            date: selectedDate,
            token: user.token,
        }
        await editTodo({ taskData, id, token: user.token })
            .then((data) => {
                console.log(setCards)
                setCards(data.tasks)
                navigate(appRoutes.MAIN)
            })
            .catch((error) => {
                console.error(error)
            })

    }
    return (
        <S.PopBrowse id="popBrowse">
            <S.PopBrowseContainer>
                <S.PopBrowseBlock>
                    <S.PopBrowseContent>
                        <S.PopBrowseTop>
                            <S.PopBrowseTitle>Название задачи: {currentTask.title}</S.PopBrowseTitle>
                            <S.CategoriesTheme $themeColor={topicHeader[currentTask.topic]}>
                                <S.CategoriesThemeText>{currentTask.topic}</S.CategoriesThemeText>
                            </S.CategoriesTheme>
                        </S.PopBrowseTop>
                        {isEdit && (
                            <S.PopBrowseStatus>
                                <S.StatusText>Статус</S.StatusText>
                                <S.RadioToolbar>
                                    <S.InputRadio
                                        type="radio"
                                        id="radio"
                                        name="status"
                                        value="Без статуса"
                                        onChange={handleInputChange}
                                    />
                                    <S.RadioToolbarLabel htmlFor="radio">Без статуса</S.RadioToolbarLabel>

                                    <S.InputRadio
                                        type="radio"
                                        id="radio1"
                                        name="status"
                                        value="Нужно сделать"
                                        onChange={handleInputChange}
                                    />
                                    <S.RadioToolbarLabel htmlFor="radio1">Нужно сделать</S.RadioToolbarLabel>

                                    <S.InputRadio
                                        type="radio"
                                        id="radio2"
                                        name="status"
                                        value="В работе"
                                        onChange={handleInputChange} />
                                    <S.RadioToolbarLabel htmlFor="radio2">В работе</S.RadioToolbarLabel>

                                    <S.InputRadio
                                        type="radio"
                                        id="radio3"
                                        name="status"
                                        value="Тестирование"
                                        onChange={handleInputChange} />
                                    <S.RadioToolbarLabel htmlFor="radio3">Тестирование</S.RadioToolbarLabel>

                                    <S.InputRadio
                                        type="radio"
                                        id="radio4"
                                        name="status"
                                        value="Готово"
                                        onChange={handleInputChange} />
                                    <S.RadioToolbarLabel htmlFor="radio4">Готово</S.RadioToolbarLabel>



                                </S.RadioToolbar>
                            </S.PopBrowseStatus>
                        )}
                        {!isEdit && (
                            <S.PopBrowseWrap>
                                <S.PopBrowseForm
                                    id="formBrowseCard"
                                    action="#"
                                >
                                    <S.PopBrowseFormBlock>
                                        <S.FormLabel>
                                            Описание задачи
                                        </S.FormLabel>
                                        <S.FormBrowseArea
                                            name="description"
                                            id="textArea01"
                                            defaultValue={newTask.description}
                                            placeholder="Введите описание задачи..."

                                        />
                                    </S.PopBrowseFormBlock>
                                </S.PopBrowseForm>
                                <Calendar
                                    selectedDate={selectedDate}
                                />
                            </S.PopBrowseWrap>
                        )}
                        {isEdit && (
                            <S.PopBrowseWrap>
                                <S.PopBrowseForm
                                    id="formBrowseCard"
                                    action="#"
                                >
                                    <S.PopBrowseFormBlock>
                                        <S.FormLabel>
                                            Описание задачи
                                        </S.FormLabel>
                                        <S.FormBrowseArea
                                            name="description"
                                            id="textArea01"
                                            defaultValue={newTask.description}
                                            onChange={handleInputChange}
                                            placeholder="Введите описание задачи..."

                                        />
                                    </S.PopBrowseFormBlock>
                                </S.PopBrowseForm>
                                <Calendar
                                    selectedDate={selectedDate}
                                    setSelectedDate={setSelectedDate} />
                            </S.PopBrowseWrap>
                        )}
                        {!isEdit && (
                            <S.PopBrowseButton>
                                <S.ButtonGroup>
                                    <S.BrowseButtonEdit onClick={() => setIsedit(true)}>
                                        Редактировать задачу
                                    </S.BrowseButtonEdit>
                                    <S.BrowseButtonDelete onClick={handleTaskDelete}>
                                        Удалить задачу
                                    </S.BrowseButtonDelete>
                                </S.ButtonGroup>
                                <Link to={appRoutes.MAIN}>
                                    <S.ButtonBrowseClose>
                                        Закрыть
                                    </S.ButtonBrowseClose>
                                </Link>
                            </S.PopBrowseButton>
                        )}
                        {isEdit && (
                            <S.PopBrowseButton>
                                <S.ButtonGroup>
                                    <S.ButtonBrowseClose onClick={handleTaskChange}>
                                        Сохранить
                                    </S.ButtonBrowseClose>
                                    <Link to={appRoutes.MAIN}>
                                        <S.BrowseButtonEdit>
                                            Отменить
                                        </S.BrowseButtonEdit>
                                    </Link>
                                    <S.BrowseButtonEdit onClick={handleTaskDelete}
                                        id="btnDelete"
                                    >
                                        Удалить задачу
                                    </S.BrowseButtonEdit>
                                </S.ButtonGroup>
                                <Link to={appRoutes.MAIN}>
                                    <S.ButtonBrowseClose>
                                        Закрыть
                                    </S.ButtonBrowseClose>
                                </Link>
                            </S.PopBrowseButton>
                        )}
                    </S.PopBrowseContent>
                </S.PopBrowseBlock>
            </S.PopBrowseContainer>
        </S.PopBrowse>
    )
}