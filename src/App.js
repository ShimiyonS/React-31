import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';
import Book from './componenets/Books/Book';
import { UserProvider } from './componenets/Context/UserContext';
import { LoginProvider } from './componenets/Context/LoginContext';
import Login from './componenets/Login/Login';
import AddBook from './componenets/Books/AddBook';
import Portal from './componenets/dashboard/Portal';
import Dashboard from './componenets/dashboard/Dashboard';
import Member from './componenets/members/Member';
import MemberView from './componenets/members/MemberView';
import BookView from './componenets/Books/BookView';
import EditBooks from './componenets/Books/EditBooks';
import BorrowBook from './componenets/Books/BorrowBook';
import ReturnBook from './componenets/Books/ReturnBook';


function App() {
  return (
    <UserProvider>
      <LoginProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/portal' element={<Portal />} >
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='book' element={<Book />} />
            <Route path='addbook' element={<AddBook />} />
            <Route path='bookview/:id' element={<BookView />} />
            <Route path='editbook/:id' element={<EditBooks />} />
            <Route path='editbook/:id' element={<EditBooks />} />
            <Route path='borrowbook/:id' element={<BorrowBook />} />
            <Route path='returnbook/:id' element={<ReturnBook/>} />
            <Route path='member' element={<Member />} />
            <Route path='memberview/:id' element={<MemberView />} />
          </Route>
        </Routes>
      </LoginProvider>
    </UserProvider>
  );
}

export default App;
