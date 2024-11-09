import { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import { TaskProvider } from './context/TaskProvider';


function App() {
const element = useRoutes(routes);
return (
  <>

  {element}

   </>
);
}

export default App
