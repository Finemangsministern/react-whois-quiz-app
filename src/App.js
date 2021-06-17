import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>Hej hej hej!</h1>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <form>
        <label>First Name :</label>
        <input type="text" id="fName"/>
        <label>Last Name :</label>
        <input type="text" id="lName"/>
        <button type="button" onclick="callAPI(document.getElementById('fName').value,document.getElementById('lName').value)">Call API</button>
    </form>
    </div>
  );
}

// define the callAPI function that takes a first name and last name as parameters
var callAPI = (firstName,lastName)=>{
  // instantiate a headers object
  var myHeaders = new Headers();
  // add content type header to object
  myHeaders.append("Content-Type", "application/json");
  // using built in JSON utility package turn object to string and store in a variable
  var raw = JSON.stringify({"firstName":firstName,"lastName":lastName});
  // create a JSON object with parameters for API call and store in a variable
  var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
  };
  // make API call with parameters and use promises to get response
  fetch("https://fuzb5skoof.execute-api.eu-north-1.amazonaws.com/dev", requestOptions)
  .then(response => response.text())
  .then(result => alert(JSON.parse(result).body))
  .catch(error => console.log('error', error));
}

export default App;
