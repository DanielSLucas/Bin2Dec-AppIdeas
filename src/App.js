import React from 'react';
import './styles.css'
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      binario: '',
      decimal: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const { binario } = this.state;
    const binLength = binario.length;
    let deci = 0

    let i = binLength -1;
    let n = 0;

    while (i !== -1) {

      deci += (Number(binario[i]) * (2 ** n))

      i--;
      n++;
    }

    this.setState({decimal: deci})

  }

  render () {
    return(
      <div className='main-container'>
        <div className='retangulo'>
          
          <header>
            <strong>Bin2Dec</strong>
          </header>

          <form onSubmit={this.handleSubmit}>
            {/* Input para entrada do número binário */}
            <input 
              type="text"
              onChange={ e => this.setState({binario: e.target.value})}
              maxLength={8}
            />

            <button type="submit" >Converter</button>

          </form>

          {/* <p> {this.state.binario} -> {this.state.decimal}</p> */}

          {this.state.decimal && (
            <p>{this.state.decimal}</p>
          )}

        </div>
      </div>
    );
  };
}

export default App;
