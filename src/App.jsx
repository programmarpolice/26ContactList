import ContactList from "./components/ContactList";
import { useState } from "react";
import SelectedContact from "./components/SelectedContact";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  return (
    <>
      {selectedContactId ? (
        <SelectedContact
          setSelectedContactId={setSelectedContactId}
          selectedContactId={selectedContactId}
        />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}
