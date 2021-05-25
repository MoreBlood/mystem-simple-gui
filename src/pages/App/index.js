import './styles.scss';
import React from 'react';
import axios from 'axios';


class App extends React.Component {

  state = {
    inputValue: '',
    isLoading: false,
    result: '',
  }

  submit = () => {
    this.setState({ isLoading: true });


    axios.post('http://localhost:3004/mystem', { input: this.state.inputValue })
      .then(res => res.data)
      .then(body => this.setState({ result: body.result, isLoading: false }))
  }

  textAreaOnChange = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  render() {
    const { result, inputValue, isLoading } = this.state;

    return (
      <div className="app">
        <div className="wrap">
          <h1>MYSTEM</h1>
          <p>Введите текст</p>
          <div className="blocks">
            <textarea placeholder="Введите текст" required className="input" value={inputValue} onChange={this.textAreaOnChange} />
            <textarea placeholder="Результат..." className="input" value={result} readOnly />
          </div>
          <button disabled={isLoading || !inputValue} onClick={this.submit} className="button">обработать</button>
        </div>
      </div>
    );
  }
}

export default App;
