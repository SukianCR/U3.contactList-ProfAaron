import "./App.css";
import ContactList from "./Components/ContactList";
import SelectedContact from "./Components/SelectedContact";
import { useState } from "react";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? 
        // <div className="message">Selected Contact View</div>
        <SelectedContact setSelectedContactId={setSelectedContactId} selectedContactId={selectedContactId} />
       : 
        <ContactList setSelectedContactId={setSelectedContactId} />
      }
    </>
  );
}

export default App;
