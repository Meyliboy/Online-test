import { Button, ButtonGroup } from "rsuite";

const TestItems = () => {
  return (
    <div className="test-item">
      <div className="title">
        Quyidagi funksiyalar ichidan juft funksiyalarni toping.
        <p>1) y= 8x7, 2) y= x2+7, 3) y= x4-9</p>
      </div>
      <div className="variants">
        <ButtonGroup>
          <Button color="green" appearance="primary">
            A) 1 va 2
          </Button>
          <Button color="orange" appearance="primary">
            B) 1 va 2
          </Button>
          <Button color="red" appearance="primary">
            C) 1 va 2
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default TestItems;
