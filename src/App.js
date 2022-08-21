import logo from './logo.svg';
import './App.css';
import Car from './Car';

function App() {
  const headerStyle = {
    textTransform: "uppercase"
  };

  const myElement = (
    <div className='container-fluid shadow p-3 text-center bg-dark text-light'>
      <h1 style={headerStyle}>login page</h1>
      {/* <Car color="red" /> */}
    </div>
  )

  return (
    myElement
  );
}

export default App;
