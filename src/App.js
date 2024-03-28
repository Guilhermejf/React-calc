import { Container, Content, Column, Row } from "./styles";
import Input from "./components/Input/";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Container>
        <Content>
          <Input />
          <Column>
          
          <Row>
            <Button label="%" />
            <Button label="C" />
            <Button label="<" />
            <Button label="/" />
          </Row>
          <Row>
            <Button label="7" />
            <Button label="8" />
            <Button label="9" />
            <Button label="x" />
          </Row>
          <Row>
            <Button label="4" />
            <Button label="5" />
            <Button label="6" />
            <Button label="-" />
          </Row>
          <Row>
            <Button label="1" />
            <Button label="2" />
            <Button label="3" />
            <Button label="+" />
          </Row>
          <Row>
            <Button label="+/-" />
            <Button label="0" />
            <Button label="." />
            <Button label="=" color={"orange"} />
          </Row>
          </Column>
        </Content>
      </Container>
    </div>
  );
}

export default App;
