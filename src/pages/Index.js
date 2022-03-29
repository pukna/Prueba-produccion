import React from 'react';
import ArticleList from '../components/ArticleList';
import { useArticleList } from '../data/useArticleList';
import ShowError from '../components/ShowError';

const HomePage = () => {
  const articles = useArticleList();

  return (
    <>
      <h1 className='page-title'>
        <a href='https://es.reactjs.org/'>Sistema Contable Tectotal</a>

      </h1>

      <p>Este es el contenido de la página principal.</p>

      <h2>Menu home</h2>
      {
        articles.isLoading
          ? 'Cargando...'
          : articles.isError
          ? <ShowError error={ articles.isError } />
          : <ArticleList articles={ articles.articles } />
      }
    </>
  );
};


export default HomePage;
