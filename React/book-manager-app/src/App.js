import './App.css';
import Header from './Components/Header/Header.jsx';
import BookList from './Pages/BookList/BookDataList.jsx'
import DashboardPage from './Pages/Dashboard/DashboardPage.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route 
          path='/' 
          element={<DashboardPage />} 
        />
        <Route 
          path='/manage-book' 
          element={<BookList />} 
        />
      </Routes>
    </Router>
  );
}
export default App;
