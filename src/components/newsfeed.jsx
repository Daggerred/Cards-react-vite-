// import React,{useEffect,useState} from "react";
// import axios from 'axios';
// const API_KEY = import.meta.env.NEWS_API_KEY

// const NewsFeed=()=>{
//     const[articles,setArticles]=useState([]);

//     useEffect(()=>{
//         const fetchNews = async()=>{
//             try{
//                 const response = await axios.get('https://newsapi.org/v2/everything', {
//                     params: {
//                         q:'shailendra',
//                         apiKey : API_KEY
//                     }
//                 });
//                 setArticles(response.data.articles);
//             }catch(e){
//                 console.log('Error fething the news:',e);
//             }
          
//         }
//         fetchNews();
//     })
    


// return(
//     <div>
//         {articles.map((article)=>(
//             <article key={article.url}></article>
//             <h2>{article.title}</h2>
//           <p>{article.description}</p>
//         ))}
//     </div>
// );
// }
// export default NewsFeed;

import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const NewsFeed = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(
                    "https://newsapi.org/v2/everything",
                    {
                        params: {
                            q: "shailendra",
                            apiKey: API_KEY,
                        },
                    }
                );
                setArticles(response.data.articles);
            } catch (e) {
                console.error("Error fetching the news:", e);
            }
        };

        fetchNews();
    }, []); 

    return (
        <div>
            {articles.map((article) => (
                <article key={article.url}>
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                </article>
            ))}
        </div>
    );
};

export default NewsFeed;
