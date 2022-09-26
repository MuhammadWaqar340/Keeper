import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
// import Card from "./components/practiceComponents/Card";
// import contact from "./contact";
// import notes from "./notes";
// import Login from "./components/Login";
// import Hooks from "./components/practiceComponents/Hooks";
// import GetTimeByHooks from "./components/practiceComponents/GetTimeByHooks";
// import ReactForm from "./components/practiceComponents/ReactForm";
// import LoginForm from "./components/practiceComponents/LoginForm";
// import Todo from "./components/practiceComponents/Todo";
import CreateArea from "./components/CreateArea";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const addNote = (newNote) => {
    return setNotes((preValue) => {
      return [...preValue, newNote];
    });
  };

  const deleteNote = (id) => {
    setNotes((preValue) => {
      preValue.filter((noteItems, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div>
      {
        // {notes.map((noteItems) => (  */}
        // <Note
        // key={noteItems.id}
        // title={noteItems.title}
        // content={noteItems.content}
        // />
        // ))}
      }
      <Header />
      <CreateArea onAdd={addNote} />
      {notes?.map((noteItems, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItems.title}
            content={noteItems.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
      {
        // <Login />
        // <Hooks />
        // <GetTimeByHooks />
        // <ReactForm />
        // <LoginForm />
        // <Todo />
      }
      {
        // <Cardgit
        // name={contact[0].name}
        // tel={contact[0].phone}
        // email={contact[0].email}
        // img={contact[0].imgURL}
        // />
        // <Card
        // name={contact[1].name}
        // tel={contact[1].phone}
        // email={contact[1].email}
        // img={contact[1].imgURL}
        // />
        // {contact.map((contacts) => {
        // return (
        // <Card
        // key={contacts.id}
        // name={contacts.name}
        // tel={contacts.phone}
        // email={contacts.email}
        // img={contacts.imgURL}
        // />
        // );
        // })}
      }
    </div>
  );
}

export default App;
