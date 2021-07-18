import "./styles.css";
import axios from "axios";
import { useState } from "react";
export default function App() {
  const [input, setInput] = useState();
  const [result, setResult] = useState([]);

  const handleSearch = (e) => {
    setInput(e.target.value);
  };

  const hanleSubmit = () => {
    axios
      .get(`https://api.github.com/search/users?q=${input}&per_page=100`)
      .then(({ data }) => {
        return data;
      })
      .then(({ items }) => {
        setResult(items);
      });
  };
  return (
    <div className="App">
      <input
        type="text"
        onChange={handleSearch}
        placeholder="Enter Github User Name"
      />
      <button onClick={hanleSubmit}>Search</button>
      <div>
        {result.map((e) => {
          return (
            <div keys={e.id} className="card">
              <a href={e.html_url} target="_blank">
                <div>
                  <img src={e.avatar_url} height="200px" weight="250px" />
                  <p>{e.login}</p>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
