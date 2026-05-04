import { useState } from 'react'
import articlesArray from './data/articlesArray'
import Article from './components/Article';
import Form from './components/Form';




function App() {

  const emptyArticle = {
    title : '', 
    content : ''
}

  const [articles, setArticles] = useState(articlesArray);
  const [article, setArticle] = useState(emptyArticle);

  const changeHandler = (event) => {
    const target = event.target;
    const targetValue = target.value;
    const targetName = target.name;

    const newArticle = { ...article, [targetName]: targetValue };
    console.log(newArticle);
    
    setArticle(newArticle);
  }


  const submitHandler = (event) => {
    event.preventDefault();
    if (article.id) {
      const editedArticles = articles.map(articleEL => articleEL.id === article.id ? article : articleEL);
      setArticles(editedArticles);
    }else { 
      const articleSubmitted = { ...article, id: crypto.randomUUID() };
      const updatedArticlesList = [ ...articles, articleSubmitted ];
      setArticles(updatedArticlesList);
    }
    setArticle(emptyArticle);
  }


  const removeArticle = (id) => {
    const updatedArticlesList = articles.filter(article => article.id !== id);
    setArticles(updatedArticlesList);
  }

  const editArticle = (id) => {
    const articleToEdit = articles.find(article => article.id === id);
    setArticle(articleToEdit);
  }


  return (
    <>
      <div className ='container'>
        <ul className ='row'>
          {articles.map(articleEl => {
            const { id, title, content } = articleEl;
            return (
              <li className ='col-4' key = {id}>
                <Article
                  id = {id}
                  title = {title}
                  content = {content}
                  remove = {removeArticle}
                  edit = {editArticle}
                />
              </li>
            )
          })}
        </ul>
      </div>
      <div className ='container'>
        <Form
          article = {article}
          submit = {submitHandler}
          change = {changeHandler}
          isEditing = {article.id ? true : false}
        />
      </div>
    </>
  )
}

export default App
