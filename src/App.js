import { Route, Routes } from 'react-router-dom';
import { Container } from './App.styled';
import Add from './router/add/add.component';
import Edit from './router/edit/edit.component';
import Home from './router/home/home.component';
import View from './router/view/view.component';

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/view" element={<View />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </Container>
  );
}

export default App;
