import Accordion from 'react-bootstrap/Accordion';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';

function Valores() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header><strong>Integridad</strong></Accordion.Header>
        <Accordion.Body>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem quam cum ipsum adipisci quas, rerum maiores eaque vitae placeat eligendi error iure pariatur, explicabo blanditiis qui dolore. Fuga, iure recusandae.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><strong>Innovación</strong></Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae eum voluptas, asperiores molestias ipsa expedita quibusdam nesciunt numquam voluptatibus deleniti provident saepe quasi, explicabo, repudiandae sunt! Tempore excepturi consectetur atque.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='2'>
        <Accordion.Header><strong>Compromiso</strong></Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam explicabo laboriosam quo, tenetur unde magni illum quod veniam blanditiis sequi similique tempora, vero eius. Placeat ducimus odio eos laudantium maxime.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='3'>
        <Accordion.Header><strong>Calidad</strong></Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ratione est? Praesentium architecto molestias commodi repellendus unde dolorum ab maiores quas ut voluptatem eveniet, rem tempore dolores soluta voluptatum ea.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='4'>
        <Accordion.Header><strong>Responsabilidad Social y Ambiental</strong></Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nesciunt excepturi cum ratione debitis aspernatur minus reiciendis, eos vero. Sapiente, ducimus? Totam eius impedit vero cum. Quisquam porro voluptatibus sapiente!
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Valores;