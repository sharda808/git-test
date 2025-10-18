
import style from './App.module.css'
import Container from './container'
function App() {


  return (
<>
    <Container>
      <h1 className={style.heading}>hello </h1>
<p className={`${style.para} ${style.heading}`}>This is a sample paragarph</p>
    </Container>
<Container>
  <p>This is another text</p>
</Container>
</>
  )
}

export default App
