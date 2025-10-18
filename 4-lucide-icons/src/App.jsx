

import {Camera,Trash2,Youtube,Icon} from 'lucide-react'
import{bottleBaby,burger} from '@lucide/lab'
function App() {


  return (
    <>
<Camera color="black" size={72} strokeWidth={1}/>
<Trash2 color="Pink" size={72} strokeWidth={1}/>

<Youtube color="red" size={72} strokeWidth={1}/> 
<Icon iconNode = {bottleBaby} color="green" size={72} strokeWidth={1}/>
<Icon iconNode = {burger} color="red" size={72} strokeWidth={2}/>
    </>
  )
}

export default App
