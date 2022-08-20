import React from 'react'
import ReactDOM from 'react-dom'

const estilosBotao = {marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', color: 'white', border: 'none',width: '100%', borderRadius: 8}
const textoRotulo = 'Nome:'
const textoBotao = () => 'Enviar'


const App = () => {
  return (
    <div style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
      <label classname="Label" htmfor="nome">{textoRotulo}</label>
      <input style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', width: 768, borderRadius: 8, outline: 'none' }}/>
      <button style={estilosBotao}>{textoBotao()}</button>

    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')  
)