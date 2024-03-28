import { Container, Content, Column, Row } from "./styles";
import Input from "./components/Input/";
import Button from "./components/Button";

function App() {
  const color = "grey"
  return (
    <div>
      <Container>
        <Content>
          <Input />
          <Column>
          
          <Row>
            <Button label="%" color={color}/>
            <Button label="C" color={color}/>
            <Button label="<" color={color}/>
            <Button label="/" color={color} />
          </Row>
          <Row>
            <Button label="7" />
            <Button label="8" />
            <Button label="9" />
            <Button label="x" color={color} />
          </Row>
          <Row>
            <Button label="4" />
            <Button label="5" />
            <Button label="6" />
            <Button label="-" color={color}/>
          </Row>
          <Row>
            <Button label="1" />
            <Button label="2" />
            <Button label="3" />
            <Button label="+" color={color}/>
          </Row>
          <Row>
            <Button label="+/-" color={color} />
            <Button label="0" />
            <Button label="." color={color} />
            <Button label="=" color={"orange"} />
          </Row>
          </Column>
        </Content>
      </Container>
    </div>
  );
}

export default App;
