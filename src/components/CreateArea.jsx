import { useState } from "react";
const CreateArea = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((preNote) => {
      return { ...preNote, [name]: value };
    });
  };

  const submitNote = (event) => {
    props.onAdd(note);
    event.preventDefault();
    setNote({
      title: "",
      content: "",
    });
  };
  return (
    <div className="note">
      <input
        style={{ border: "none", margin: "5px", padding: "5px" }}
        name="title"
        placeholder="Title"
        value={note.title}
        onChange={handleChange}
      />
      <textarea
        style={{ border: "none", margin: "5px", padding: "5px" }}
        name="content"
        placeholder="Contant"
        value={note.content}
        onChange={handleChange}
        rows={3}
      />
      <button onClick={submitNote}>+Add</button>
    </div>
  );
};

export default CreateArea;
