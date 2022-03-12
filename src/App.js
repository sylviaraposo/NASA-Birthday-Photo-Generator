import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';



// ** App Component **
function App() {

  // Create state items to hold data coming in from the user input and third-party NASA API
  //  - userBirthdate, setUserBirthdate 
  const [userBirthdate, setUserBirthdate] = useState(null);

  //  - birthdateResultPhoto, setBirthdateResultPhoto
  const [ birthdateResultPhoto, setBirthdateResultPhoto ] = useState (null);


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
      console.log(apiData);
    })
  }, userBirthdate);

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
  //  - header
  //  - logo
  //  - h1
  //  - h2
  return (
    <div className="App">
      <header>
        <img src="" alt="" className="logo"/>
        <h1>Photo of the Day</h1>
        <h2>Find the NASA photo of the day taken on the date you were born!</h2>

        {/* call the BirthdateForm component and pass it the above function(selectBirthdayDate) as handleSubmit */}
        

        {/* call the Results component and pass it the value that lives within the state of birthdayResultPhoto */}
      </header>
    </div>
  );
}

// export App.
export default App;





