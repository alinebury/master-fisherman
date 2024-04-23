import React, { useEffect, useState } from 'react'
import TesteComponent from './components/TesteComponent'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    const backendUrl = 'http://localhost:3001/api/'

    fetch(backendUrl)
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Erro ao chamar a API:', error))
  }, [])

  return (
    <div>
      <h1>Mensagem do Backend:</h1>
      <p>{message}</p>
      <TesteComponent />
    </div>
  )
}

export default App
