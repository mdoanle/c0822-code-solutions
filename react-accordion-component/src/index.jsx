import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordion from './accordion';

const topics = [
  {
    title: 'Hypertext Markup Language',
    body: 'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.'
  },
  {
    title: 'Cascading Style Sheets',
    body: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML'
  },
  {
    title: 'JavaScript',
    body: 'An object-oriented computer programming language commonly used to create interactive effects within web browsers.'
  },
  {
    title: 'Drake',
    body: 'An influential figure in contemporary popular music, Drake has been credited for popularizing singing and R&B sensibilities in hip hop. He gained recognition by starring as Jimmy Brooks in the CTV teen drama series Degrassi: The Next Generation (2001–08) and subsequently pursued a career in music releasing his debut mixtape Room for Improvement in 2006. He released the mixtapes Comeback Season (2007) and So Far Gone (2009) before signing with Young Money Entertainment.'
  }
];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Accordion data={topics}/>);
