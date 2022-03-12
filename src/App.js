import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import BirthdateForm from './BirthdateForm';
import Results from './Results';
import logo from './assets/nasa-logo.png';



// ** App Component **
function App() {

  // Create state items to hold data coming in from the user input and third-party NASA API
  //  - userBirthdate, setUserBirthdate 
  const [userBirthdate, setUserBirthdate] = useState('');

  //  - birthdateResultPhoto, setBirthdateResultPhoto
  const [ birthdateResultPhoto, setBirthdateResultPhoto ] = useState ('');


  // Once the component has rendered, fetch data from the NASA api, default results is todays photo.
  // - date: userBirthdate (this value will be passed to the param value via the state variable from the date picker.)
  useEffect(() => {

  axios({
    url: 'https://api.nasa.gov/planetary/apod',
    params: {
      date: userBirthdate,
      api_key: '8FQFwbqE2ww9Aq89F6NtscMUn1J9Pjk0B19Z2NI6'
    }
  }).then((apiData) => {
    // console.log(apiData.data);
    setBirthdateResultPhoto(apiData.data)
  })
}, [userBirthdate])


// A function that will be passed as props to the BirthdateForm component (eg. selectBirthdayDate)
//  when this function is called it will update the userBirthdate
// - first argument will be the event to not refresh the page
// - second will be the birthday date that the user is chosen (eg. chosenBirthdate)
  // within this function setUserBirthdate will be called to update state using the chosenBirthdate
  const selectBirthdayDate = function (event, chosenBirthdate) {
    event.preventDefault();
    console.log('form submitted');
    setUserBirthdate(chosenBirthdate);
  }

  // Render the application
  return (
    <div className="App">
      <header>
        <div className="wrapper">
          <div className="birthdate-input-section">
            
          <img src={logo} alt="" className="logo"/>
            <h1>Photo of the Day</h1>
            <h2>Find the NASA photo of the day taken on the date you were born!</h2>

            {/* call the BirthdateForm component and pass it the above function(selectBirthdayDate) as handleSubmit */}
            <BirthdateForm handleSubmit={selectBirthdayDate} />
          </div>
          <div className="results-section">
            {/* call the Results component and pass it the value that lives within the state of birthdayResultPhoto */}
            <Results birthdatePhoto={birthdateResultPhoto} />
          </div>
        </div>
      </header>
    </div>
  );
}

// export App.
export default App;





