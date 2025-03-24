import './App.css';
import Header from './Components/Header/Header.jsx';
import BookList from './Pages/BookList/BookDataList.jsx'
import DashboardPage from './Pages/Dashboard/DashboardPage.jsx';

function App() {
  return (
    <div>
      <Header></Header>
      <DashboardPage></DashboardPage>
      <BookList></BookList>
    </div>
  );
}
export default App;
