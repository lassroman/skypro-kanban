import './App.css'
import Column from './components/Column/Column'
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'
import PopBrowse from './components/popups/PopBrowse/PopBrowse'
import PopExit from './components/popups/PopExit/PopExit'
import PopNewCard from './components/popups/PopNewCard/PopNewCard'

export default function App() {



  return (

    <div className="wrapper">
      <PopExit />
      <PopNewCard />
      <PopBrowse />

      <Header />
      <MainContent>
        <Column title={"Без статуса"} />
        <Column title={"Нужно сделать"} />
        <Column title={"В работе"} />
        <Column title={"Тетирование"} />
        <Column title={"Готово"} />
      </MainContent>
    </div>
  )
}