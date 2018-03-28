import React from "react";
import ReactDOM from "react-dom";


  const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hand of a computer',
    options: []
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option) {
      app.options.push(option);
      e.target.elements.option.value = '';
    }
    render();
  };
  
  const onRemoveAll = () => {
    app.options = [];
    render();
  };

  const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
  };
  

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No option'}</p>      
      <ol>
        {
          app.options.map((option) => <li key={option}>{option}</li>)
        }
      </ol>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
      <button onClick={onRemoveAll}>Remove All</button>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

ReactDOM.render(template, document.getElementById("index"));
};

render();