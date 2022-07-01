import { useEffect, useState } from "react";

export const Articles = () => {

    const url = 'https://api.spaceflightnewsapi.net/v3/articles';
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setArticles(data))
       
        
    }, []);
   
    return (
        <>
        <h2>Articles</h2>
       <ul>
        {articles.map((article) => (
            <li key={article.id}>{article.title}</li>
        ))}
            </ul>
        </>
    );
};