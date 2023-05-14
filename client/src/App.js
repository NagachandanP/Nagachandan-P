import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import  { FaSearch } from 'react-icons/fa'

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setLoading(false)
   }, 2000)
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:5000?q=${query}`);
      setData(res.data);
      console.log(res.data);
    };
    // if (query.length === 0 || query.length > 2)
    fetchData();


    // setLoading(false)
  }, [query]);

  return (
    <>
<Header/>

    {loading ? (
        <Loader />
      ) : (
        
        <div className="templateContainer ">
        <div className="searchInput_Container container">
          <FaSearch/>
          
          <input
          
            id="searchInput"
            type="text"
            placeholder="Search Brand name or Primary Text or Headline or Description"
            onChange={(event) => {
              setQuery(event.target.value);
            }}
          />
        </div>

        <div className="template_Container " >

          {data.length > 0 &&
            data.map((item, index) => (
              <div className="template " key={index}>
                <img
                  src={item.imageURL}
                  alt=""
                  width={250}
                  height={250}
                  style={{ borderRadius: "10px" }}
                />
                <h2 className="text-warning my-2 text-center"> {item.name}</h2>
                <h4>{item.headline}</h4>
                <p className="text-quote">{item.headline}</p>
                {/* <a target="_blank" href={item.url}> <button >Visit now</button></a> */}
              </div>
            ))}
        </div>
      </div>
      )}
      <Footer/>
    </>
  );
}

export default App;
