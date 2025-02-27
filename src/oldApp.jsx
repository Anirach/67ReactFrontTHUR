import Hello from './assets/Hello'
import Contact from './assets/Contact'
import Counter from './assets/Counter'


function App() {
  const helloData = [
    { name : 'Anirach', message : 'Hi There' },
    { name : 'Tom,', message : 'Hello' }
  ];

    
  return (
    <div >
      <Counter />
      
      {helloData.map((data, index) => (
        <Hello key={index} name={data.name} message={data.message} />
      ))}

      <Contact email ="Anirach@gmail.com" phone = "0845657986"/>
    </div>
  )
}

export default App
