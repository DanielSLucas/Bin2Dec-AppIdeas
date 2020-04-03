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

    //10 = [1*(2^1)] + [0*(2^0)] = 2

    let i = binLength -1;
    let n = 0;

    while (i !== -1) {
      const digito = Number(binario[i])

      if(digito !== 0 && digito !== 1) {
        this.setState({
          binario: '',
          decimal: '',
        })
        
        alert("Entre apenas com 0 e 1")

        return window.location.reload();
      }

      deci += (digito * (2 ** n));

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
              value={this.state.binario}
              onChange={ e => this.setState({binario: e.target.value})}
              // maxLength={8}
            />

            <button type="submit" >Converter</button>
            
            <input 
              type="text"
              value={this.state.decimal}
              onChange={ e => this.setState({binario: e.target.value})}
              disabled
            />

          </form>

          

          {/* {this.state.decimal && (
            <p>{this.state.decimal}</p>
          )} */}

        </div>
      </div>
    );
  };
}

export default App;
