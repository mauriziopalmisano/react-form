import { useState } from 'react'
import articles from './data/articles'
import Article from './components/Article';



function App() {


  return (
    <div className='container'>
      <ul className='row'>
        {articles.map(article => {
          const { id, title, content } = article;
          return (
            <li className='col-4' key={id}>
              <Article
                id={id}
                title={title}
                content={content}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
