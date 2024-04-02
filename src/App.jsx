import "./App.css";
import contactsJSON from "./contacts.json";
import { useState } from "react";


function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0, 5));
  const [remainingContacts, setRemainingContacts] = useState(
    contactsJSON.slice(5, contactsJSON.length)
  );

  const addRandomContact = () => {
    const updateRemaining = [...remainingContacts];
    let randomNumber = Math.floor(Math.random() * remainingContacts.length);
    let randomContact = updateRemaining.splice(randomNumber, 1)[0];

    const updateContacts = [...contacts, randomContact];
    setContacts(updateContacts);
    setRemainingContacts(updateRemaining);
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={() => addRandomContact()}>Add random contact</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th className="head name">Name</th>
            <th>Popularity</th>
            <th className="head">Won an Oscar</th>
            <th className="head">Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((eachContact, i) => {
            return (
              <tr key={i}>
                <td>
                  <img className="image" src={eachContact.pictureUrl}/>
                </td>
                <td>{eachContact.name}</td>
                <td>{eachContact.popularity.toFixed(2)}</td>
                {eachContact.wonOscar ? <td><i className="fa-solid fa-trophy"></i></td> : <td></td>}
                {eachContact.wonEmmy ? <td><i className="fa-solid fa-star"></i></td> : <td></td>}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
