import { Container, Content, Column, Row } from "./styles";
import Input from "./components/Input/";
import Button from "./components/Button";
import { useEffect, useState } from "react";

function App() {
  const color = "grey";
  const [currentNumber, setCurrentNumber] = useState("0");
  const [fistNumber, setFistNumber] = useState("0");
  const [operator, setOperator] = useState("");

  useEffect(() => {}, [operator]);

  const handleNumber = (number) => {
    setCurrentNumber(currentNumber === "0" ? number : currentNumber + number);
  };

  const handleSun = () => {
    setOperator("+");
    if (fistNumber === `0`) {
      setFistNumber(currentNumber);
      setCurrentNumber("0");
    } else {
      const sun = Number(fistNumber) + Number(currentNumber);
      setCurrentNumber(sun);
    }
  };

  const handleSub = () => {
    setOperator("-");
    if (fistNumber === `0`) {
      setFistNumber(currentNumber);
      setCurrentNumber("0");
    } else {
      const sub = Number(fistNumber) - Number(currentNumber);
      setCurrentNumber(sub);
    }
  };
  const handleDiv = () => {
    setOperator("/");
    if (fistNumber === `0`) {
      setFistNumber(currentNumber);
      setCurrentNumber("0");
    } else {
      const div = Number(fistNumber) / Number(currentNumber);
      setCurrentNumber(Number(div).toFixed(1));
    }
  };
  const handleMult = () => {
    setOperator("*");
    if (fistNumber === `0`) {
      setFistNumber(currentNumber);
      setCurrentNumber("0");
    } else {
      const mult = Number(fistNumber) * Number(currentNumber);
      setCurrentNumber(mult);
    }
  };

  const handleIguals = () => {
    if (operator === "+") {
      handleSun();
    } else if (operator === "-") {
      handleSub();
    } else if (operator === "/") {
      handleDiv();
    } else if (operator === "*") {
      handleMult();
    }
  };

  const clearNumber = () => {
    setCurrentNumber("0");
    setFistNumber("0");
  };
  return (
    <div>
      <Container>
        <Content>
          <Input valor={currentNumber} />
          <Column>
            <Row>
              <Button label="%" color={color} />
              <Button label="C" onClick={() => clearNumber()} color={color} />
              <Button label="<" color={color} />
              <Button label="/" onClick={() => handleDiv()} color={color} />
            </Row>
            <Row>
              <Button label="7" onClick={() => handleNumber("7")} />
              <Button label="8" onClick={() => handleNumber("8")} />
              <Button label="9" onClick={() => handleNumber("9")} />
              <Button label="x" onClick={() => handleMult()} color={color} />
            </Row>
            <Row>
              <Button label="4" onClick={() => handleNumber("4")} />
              <Button label="5" onClick={() => handleNumber("5")} />
              <Button label="6" onClick={() => handleNumber("6")} />
              <Button label="-" onClick={() => handleSub()} color={color} />
            </Row>
            <Row>
              <Button label="1" onClick={() => handleNumber("1")} />
              <Button label="2" onClick={() => handleNumber("2")} />
              <Button label="3" onClick={() => handleNumber("3")} />
              <Button label="+" onClick={() => handleSun()} color={color} />
            </Row>
            <Row>
              <Button label="+/-" color={color} />
              <Button label="0" onClick={() => handleNumber("0")} />
              <Button label="." color={color} />
              <Button
                label="="
                onClick={() => handleIguals()}
                color={"orange"}
              />
            </Row>
          </Column>
        </Content>
      </Container>
    </div>
  );
}

export default App;
