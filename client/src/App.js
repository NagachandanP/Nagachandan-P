import { ads } from "./ads";
import "./style.css";
import Card from "./components/card";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:5000?q=${query}`);
      setData(res.data);
      console.log(res.data)
    };
    // if (query.length === 0 || query.length > 2)
     fetchData();
  }, [query]);

  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input
            id="searchInput"
            type="text"
            placeholder="Search Brand name or Primary Text or Headline or Description"
            onChange={(event) => {
              setQuery(event.target.value);
            }}
          />
        </div>

        <div className="template_Container">
            
        {/* {ads.filter((ad) =>
          ad.name.toLowerCase().includes(query)
        ).map((ad) => (
          <div className="template" key={ad.id}>
            <Card val={ad}/>
          </div>
        ))} */}

          {
            data.length>0 &&
            data.map((item,index)=> <div className="template" key={index}>
              <img src={item.imageURL} alt="" width={300} height={200} style={{borderRadius:"10px"}} />
                  <h2> {item.name}</h2>
                  <h3>{item.headline}</h3>
                  <p>{item.headline}</p>
                  {/* <a target="_blank" href={item.url}> <button >Visit now</button></a> */}
               </div> )
          }

          
          
            
        </div>
      </div>
    </>
  );
}

export default App;
