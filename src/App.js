import "../src/index.css"
import Card from "./components/Card/card"
import ContentContainer from "./components/ContentContainer/ContentContainer"


export default function App(){
  return(
    <ContentContainer>
      <Card question="What kind of deer was Bambi?" answer="roe deer" />
      <Card question="What kind of deer was Bambi?" answer="roe deer" />
    </ContentContainer>
  )
}


