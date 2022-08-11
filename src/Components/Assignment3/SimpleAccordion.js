import Accordion from "react-bootstrap/Accordion";

const SimpleAccordion = () => {
  let data = [
    {
      title: "When was this training held ?",
      content: "It was held on 19th July, 2022.",
    },
    {
      title: "What was this training about ?",
      content:
        "Training was about React's class based components. We were taught about creating class based components, various lifecycle methods, constructor, set state etc.",
    },
    {
      title: "Who gave the assignment ?",
      content: "Mr. Anil Reddy gave the assignment.",
    },
    {
      title: "When is the last day to submit the assignment ?",
      content: "22nd July, 2022 before EOD.",
    },
  ];

  return (
    <div>
      <br />
      <Accordion defaultActiveKey="0">
        {data.map((item, index) => (
          <Accordion.Item eventKey={index}>
            <Accordion.Header>{item.title}</Accordion.Header>
            <Accordion.Body>{item.content}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default SimpleAccordion;
