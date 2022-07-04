import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../store/articles/slice";

export const Articles = () => {

    const url = 'https://api.spaceflightnewsapi.net/v3/articles';
    const [articles, setArticles] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setArticles(data))
       
        
    }, []);

    useEffect(() => {
        dispatch(fetchData());
    })
   
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