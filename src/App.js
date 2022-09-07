import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import Card from "./components/practiceComponents/Card";
import contact from "./contact";
import notes from "./notes";
import Login from "./components/Login";
import Hooks from "./components/practiceComponents/Hooks";
import GetTimeByHooks from "./components/practiceComponents/GetTimeByHooks";

function App() {
  return (
    <div>
      {/* <Header />
      {notes.map((noteItems) => (
        <Note
          key={noteItems.id}
          title={noteItems.title}
          content={noteItems.content}
        />
      ))}
      <Footer /> */}
      {/* <Login /> */}
      {/* <Hooks /> */}
      <GetTimeByHooks />
      {/* <Cardgit 
        name={contact[0].name}
        tel={contact[0].phone}
        email={contact[0].email}
        img={contact[0].imgURL}
      />
      <Card
        name={contact[1].name}
        tel={contact[1].phone}
        email={contact[1].email}
        img={contact[1].imgURL}
      /> */}
      {/* {contact.map((contacts) => {
        return (
          <Card
            key={contacts.id}
            name={contacts.name}
            tel={contacts.phone}
            email={contacts.email}
            img={contacts.imgURL}
          />
        );
      })} */}
    </div>
  );
}

export default App;
