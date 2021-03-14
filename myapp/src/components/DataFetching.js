import React, {useState, useEffect } from 'react';
import axios from 'axios' 

function DataFetching(props) {
  const[ posts ,setPosts] = useState([])
  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/accuknox/TrainingAPI/main/small.json")
    .then(res =>  {
      console.log(res)
      setPosts(res.data)
    })
    .catch(err => {
      console.log (err);
    })
  })
  return (
    <div>
      <ul>
        {
          posts.map(post => <li key={post.id}>{post.title}</li>)
        }
      </ul>
      
    </div>
  );
}

export default DataFetching;