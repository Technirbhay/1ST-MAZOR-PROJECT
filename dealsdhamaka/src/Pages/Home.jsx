import React, { useEffect, useState } from "react";
import { fetchDeals } from "../services/api";
import DealCard from "../Components/DealsCard";
import Loader from "../Components/Loader";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";



import "./Home.css";


const CATEGORIES = [
  { label: "All", value: "" },
  { label: "Electronics", value: "Electronics" },
  { label: "Fashion", value: "Fashion" },
];



const Home = () => {
const { user } = useContext(AuthContext);


  const [deals, setDeals] = useState([]);
 const [loading, setLoading] = useState(true);

 const [page, setPage] = useState(1);
const [pages, setPages] = useState(1);
const [category, setCategory] = useState("");

const [search, setSearch] = useState("");
 useEffect(() => {
  setLoading(true);


  fetchDeals({ page, category, search })
    .then((res) => {
      setDeals(res.data.deals);
      setPages(res.data.pages);
      setLoading(false);
    })
    .catch(() => setLoading(false));
}, [page, category, search]);

  


  return (<>
{user ? <p>Welcome {user.user.name}</p> : <p>Please login</p>}
  <div className="home">
    <select
  value={category}
  onChange={(e) => {
    setPage(1);
    setCategory(e.target.value);
  }}
>
  <option value="">All Categories</option>
  <option value="Electronics">Electronics</option>
  <option value="Fashion">Fashion</option>
  <option value="Mobiles">Mobiles</option>
</select>
     
<input
  type="text"
  placeholder="Search deals..."
  value={search}
  onChange={(e) => {
    setPage(1);
    setSearch(e.target.value);
  }}
  className="search-input"
/>


<div className="category-bar">
  {CATEGORIES.map((cat) => (
    <button
      key={cat.value}
      className={
        category === cat.value
          ? "category-btn active"
          : "category-btn"
      }
      onClick={() => {
        setPage(1);
        setCategory(cat.value);
      }}
    >
      {cat.label}
    </button>
  ))}
</div>


    <h2 className="home-title">🔥 Best Deals</h2>

    {loading && <Loader />}

    {!loading && deals.length === 0 && (
      <p>No deals found</p>
    )}

    {!loading && deals.length > 0 && (
      <div className="deals-container">
        {deals.map((deal) => (
          <DealCard key={deal._id} deal={deal} />
        ))}
        {!loading && pages > 1 && (
  <div style={{ marginTop: "30px", textAlign: "center" }}>
    <button
      disabled={page === 1}
      onClick={() => setPage(page - 1)}
      style={{ marginRight: "10px" }}
    >
      Prev
    </button>

    <span>
      Page {page} of {pages}
    </span>

    <button
      disabled={page === pages}
      onClick={() => setPage(page + 1)}
      style={{ marginLeft: "10px" }}
    >
      Next
    </button>
  </div>
)}

      </div>
    )}
  </div>
</>


  );
};

export default Home;
