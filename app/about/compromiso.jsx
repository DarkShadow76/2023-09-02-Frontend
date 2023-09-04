import Accordion from 'react-bootstrap/Accordion';

function Compromiso() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header><strong>Clientes</strong></Accordion.Header>
        <Accordion.Body>
          Entregar proyectos de alta calidad que cumplan y superen sus necesidades, construyendo relaciones sólidas basadas en confianza y respeto mutuo.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><strong>Equipo</strong></Accordion.Header>
        <Accordion.Body>
          Fomentar un ambiente colaborativo y de crecimiento para nuestro equipo de trabajo, donde puedan prosperar, desarrollarse y lograr su máximo potencial.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><strong>Innovación</strong></Accordion.Header>
        <Accordion.Body>
          Continuar explorando nuevas metodologías, tecnologías y enfoques para mantenernos a la vanguardia de la industria y ofrecer soluciones más eficientes.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><strong>Sostenibilidad</strong></Accordion.Header>
        <Accordion.Body>
          Integrar prácticas sostenibles en todos los aspectos de nuestro trabajo, cuidando el medio ambiente y contribuyendo positivamente a las comunidades en las que operamos.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Compromiso;