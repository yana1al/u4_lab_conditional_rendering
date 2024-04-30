import './styles/App.css';
import { useState } from 'react';
import Home from './components/Home';
import Landing from './components/Landing'; // Import the Landing component
import Form from './components/Form';
import Thanks from './components/Thanks';
import Error from './components/Error';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [formValues, setFormValues] = useState({ name: '', age: '', email: '' });

  const goToPage = (pageName) => {
    setCurrentPage(pageName);
  };

  const resetState = () => {
    setCurrentPage('home');
    setFormValues({ name: '', email: '', age: '' });
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      {currentPage === 'home' && <Home goToPage={goToPage} />}
      {currentPage === 'landing' && <Landing goToPage={goToPage} />} {/* Render Landing component */}
      {currentPage === 'form' && (
        <Form
          formValues={formValues}
          handleInputChange={handleChange}
          goToPage={goToPage}
        />
      )}
      {currentPage === 'thanks' && <Thanks resetState={resetState} />}
      {currentPage === 'error' && <Error resetState={resetState} />}
    </div>
  );
};

export default App;
