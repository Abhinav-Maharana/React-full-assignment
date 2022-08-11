import { useEffect, useState } from "react";
import axios from "axios";
import "./AxiosPagination.css";

const POSTS_PER_PAGE = 15;

let AxiosPagination = () => {
  let [posts, setPosts] = useState([]);
  let [pages, setPages] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);

  let indexOfLastPost = currentPage * POSTS_PER_PAGE;
  let indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  let currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  let handlePageChangeClick = (ev) => setCurrentPage(Number(ev.target.id));

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        setPosts(response.data);
        let arr = [];
        for (let i = 1; i <= Math.ceil(posts.length / POSTS_PER_PAGE); i++)
          arr.push(i);
        setPages(arr);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [posts]);

  return (
    <div>
      <main>
        <h3>Posts On Page {currentPage}</h3>
        <div class="posts-container">
          {currentPosts.map((item, index) => (
            <div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
        <div class="pg-number-container">
          {pages.map((item) => (
            <span onClick={handlePageChangeClick} id={item} key={item}>
              {item}
            </span>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AxiosPagination;
