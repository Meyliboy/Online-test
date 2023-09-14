import { useContext } from "react";
import { Form, Message, Radio, RadioGroup } from "rsuite";
import { Context } from "../../context/Context";

const TestItems = ({ data }) => {
  const { result, setResult, handleGroup } = useContext(Context);

  function handleSelect(value, check) {
    if (value === data.answers.isTrue) {
      setResult(result + 1);
    }
  }

  return (
    <div style={{ marginBottom: "15px" }}>
      <Message style={{ width: "100%" }} type="info">
        {data.questions.title}
      </Message>
      <Form.Group controlId="radioList">
        <RadioGroup name={`${data.id}`} onChange={handleGroup}>
          <Radio value={data.answers.answers_text.a} onChange={handleSelect}>
            {data.answers.answers_text.a}
          </Radio>
          <Radio value={data.answers.answers_text.b} onChange={handleSelect}>
            {data.answers.answers_text.b}
          </Radio>
          <Radio value={data.answers.answers_text.c} onChange={handleSelect}>
            {data.answers.answers_text.c}
          </Radio>
          <Radio value={data.answers.answers_text.d} onChange={handleSelect}>
            {data.answers.answers_text.d}
          </Radio>
        </RadioGroup>
      </Form.Group>
    </div>
  );
};

export default TestItems;
