import { useState } from "react";
import Calendar from "../../Calendar/Calendar";
import { useUser } from "../../../hooks/useUser";
import { Link, useNavigate } from "react-router-dom";
import { useTasks } from "../../../hooks/useTasks";
import { postTodos } from "../../../Api";
import { appRoutes } from "../../../lib/appRoutes";

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
                    alert('Одно из полей не заполнено!')

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
        <div className="pop-new-card" id="popNewCard">
            <div className="pop-new-card__container">
                <div className="pop-new-card__block">
                    <div className="pop-new-card__content">
                        <h3 className="pop-new-card__ttl">Создание задачи</h3>
                        <a href="#" className="pop-new-card__close">
                            ✖
                        </a>
                        <div className="pop-new-card__wrap">
                            <form
                                className="pop-new-card__form form-new"
                                id="formNewCard"
                                action="#"
                            >
                                <div className="form-new__block">
                                    <label htmlFor="formTitle" className="subttl">
                                        Название задачи
                                    </label>
                                    <input
                                        className="form-new__input"
                                        type="text"
                                        name="title"
                                        value={newTask.title}
                                        onChange={handleInputChange}
                                        id="formTitle"
                                        placeholder="Введите название задачи..."
                                        autoFocus=""
                                    />
                                </div>
                                <div className="form-new__block">
                                    <label htmlFor="textArea" className="subttl">
                                        Описание задачи
                                    </label>
                                    <textarea
                                        className="form-new__area"
                                        name="description"
                                        value={newTask.description}
                                        onChange={handleInputChange}
                                        id="textArea"
                                        placeholder="Введите описание задачи..."

                                    />
                                </div>
                            </form>
                            <Calendar
                                selectedDate={selectedDate}
                                setSelectedDate={setSelectedDate} />
                        </div>
                        {/* <div className="pop-new-card__categories categories">
                            <p className="categories__p subttl">Категория</p>
                            <div className="categories__themes">
                                <div className="categories__theme _orange _active-category">
                                    <p className="_orange">Web Design</p>
                                </div>
                                <div className="categories__theme _green">
                                    <p className="_green">Research</p>
                                </div>
                                <div className="categories__theme _purple">
                                    <p className="_purple">Copywriting</p>
                                </div>
                            </div>
                        </div> */}
                        <div className="prod_checbox">
                            <div className="radio-toolbar">
                                <input
                                    type="radio"
                                    id="radio1"
                                    name="topic"
                                    value="Web Design"
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="radio1">Web Design</label>

                                <input
                                    type="radio"
                                    id="radio2"
                                    name="topic"
                                    value="Research"
                                    onChange={handleInputChange}

                                />
                                <label htmlFor="radio2">Research</label>

                                <input type="radio"
                                    id="radio3"
                                    name="topic"
                                    value="Copywriting"
                                    onChange={handleInputChange}

                                />
                                <label htmlFor="radio3">Copywriting</label>
                            </div>
                        </div>
                        <button onClick={handleFormSubmit} className="form-new__create _hover01" id="btnCreate">
                            Создать задачу
                        </button>
                        <Link to={appRoutes.MAIN}>
                            <span className="btn-edit__close _btn-bg _hover01">Закрыть</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}