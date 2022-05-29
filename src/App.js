import './App.css';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Quiznödig</h1>
  
          <form>
            <div class="group">
              <label>Ditt namn</label>
              <input type="text" id="name"/>
            </div>
            <div class="group">
              <label>Vem där #</label>
              <select id="quiz-number">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div class="group">
              <label>Svar</label>
              <input type="text" id="answer"/>
            </div>
            <div class="center">
              <button type="button" 
                onClick={() => this.callAPI(document.getElementById('name').value,document.getElementById('quiz-number').value,document.getElementById('answer').value)} 
              >
                Skicka svar
              </button>
            </div>
          </form>
        </header>    
      </div>
    );
  }

  // define the callAPI function that takes a first name and last name as parameters
  callAPI(name,quizNumber,answer) {
    // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable
    var raw = JSON.stringify({"name":name,"quizNumber":quizNumber,"answer":answer});
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
    .then(result => {
      alert(JSON.parse(result).body);
      document.getElementById('answer').value = "";
    })
    .catch(error => console.log('error', error));
  }

}

  



export default App;
