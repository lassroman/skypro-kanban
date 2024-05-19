import { Link, Navigate, useNavigate, useParams } from "react-router-dom"
import { appRoutes } from "../../../lib/appRoutes";
import Calendar from "../../Calendar/Calendar";
import { useState } from "react";
import { delTodo } from "../../../Api";
import { useTasks } from "../../../hooks/useTasks";
import { useUser } from "../../../hooks/useUser";

export default function PopBrowse() {
    const { id } = useParams();
    const { user } = useUser();
    const { cards, updateTask } = useTasks();
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
                console.log(data)
                updateTask(data.tasks)
                navigate(appRoutes.MAIN)
            })
            .catch((error) => {
                console.error(error)
            })
    }
    return (
        <div className="pop-browse" id="popBrowse">
            <div className="pop-browse__container">
                <div className="pop-browse__block">
                    <div className="pop-browse__content">
                        <div className="pop-browse__top-block">
                            <h3 className="pop-browse__ttl">Название задачи:{currentTask.title}</h3>
                            <div className="categories__theme theme-top _orange _active-category">
                                <p className="_orange">Web Design</p>
                            </div>
                        </div>
                        {isEdit && (
                            < div className="pop-browse__status status">
                                <p className="status__p subttl">Статус</p>
                                <div className="status__themes">
                                    <div className="status__theme _hide">
                                        <p>Без статуса</p>
                                    </div>
                                    <div className="status__theme _gray">
                                        <p className="_gray">Нужно сделать</p>
                                    </div>
                                    <div className="status__theme _hide">
                                        <p>В работе</p>
                                    </div>
                                    <div className="status__theme _hide">
                                        <p>Тестирование</p>
                                    </div>
                                    <div className="status__theme _hide">
                                        <p>Готово</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="pop-browse__wrap">
                            <form
                                className="pop-browse__form form-browse"
                                id="formBrowseCard"
                                action="#"
                            >
                                <div className="form-browse__block">
                                    <label htmlFor="textArea01" className="subttl">
                                        Описание задачи
                                    </label>
                                    <textarea
                                        className="form-browse__area"
                                        name="description"
                                        id="textArea01"
                                        readOnly=""
                                        placeholder="Введите описание задачи..."

                                    />
                                </div>
                            </form>
                            <Calendar
                                selectedDate={selectedDate}
                                setSelectedDate={setSelectedDate} />
                        </div>
                        <div className="theme-down__categories theme-down">
                            <p className="categories__p subttl">Категория</p>
                            <div className="categories__theme _orange _active-category">
                                <p className="_orange">Web Design</p>
                            </div>
                        </div>
                        <div className="pop-browse__btn-browse ">
                            <div className="btn-group">
                                <button onClick={() => setIsedit(true)}
                                    className="btn-browse__edit _btn-bor _hover03">
                                    <a href="#">Редактировать задачу</a>
                                </button>
                                <button onClick={handleTaskDelete}
                                    className="btn-browse__delete _btn-bor _hover03">
                                    <a href="#">Удалить задачу</a>
                                </button>
                            </div>
                            <Link to={appRoutes.MAIN}>
                                <span className="btn-browse__close _btn-bg _hover01">
                                    Закрыть
                                </span>
                            </Link>
                        </div>
                        <div className="pop-browse__btn-edit _hide">
                            <div className="btn-group">
                                <button className="btn-edit__edit _btn-bg _hover01">
                                    <a href="#">Сохранить</a>
                                </button>
                                <button className="btn-edit__edit _btn-bor _hover03">
                                    <a href="#">Отменить</a>
                                </button>
                                <button
                                    className="btn-edit__delete _btn-bor _hover03"
                                    id="btnDelete"
                                >
                                    <a href="#">Удалить задачу</a>
                                </button>
                            </div>
                            <button className="btn-edit__close _btn-bg _hover01">
                                <a href="#">Закрыть</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}