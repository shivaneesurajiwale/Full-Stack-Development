import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [form, setForm] = useState({
    name: "",
    subject: "",
    rating: "",
    comment: ""
  });

  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    await axios.post("http://localhost:5000/add", form);
    alert("Feedback submitted");
  };

  const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/all");
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Feedback Form</h2>

      <input name="name" placeholder="Name" onChange={handleChange} /><br/>
      <input name="subject" placeholder="Subject" onChange={handleChange} /><br/>
      <input name="rating" placeholder="Rating (1-5)" onChange={handleChange} /><br/>
      <textarea name="comment" placeholder="Comment" onChange={handleChange}></textarea><br/>

      <button onClick={submit}>Submit</button>

      <h2>All Feedback</h2>

      {data.map((item, index) => (
        <div key={index}>
          <h4>{item.name} - {item.subject}</h4>
          <p>Rating: {item.rating}</p>
          <p>{item.comment}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;