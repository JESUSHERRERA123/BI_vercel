import './App.css'; 
 
function App() { 
  return ( 
    <div className="App"> 
      {/* Encabezado con el nombre de la universidad */} 
      <div className="universidad"> 
        <h2>UNIVERSIDAD PRIVADA SAN JUAN BAUTISTA</h2> 
      </div> 
 
      {/* Título con fondo negro y logo */} 
      <header className="App-header"> 
        <h1> 
        ANÁLISIS DE DATOS PARA OPTIMIZAR EL PROCESO DE VENTAS EN LA 
TIENDA MASS EN ICA, 2024 
        </h1> 
   
      </header> 
 
      {/* Incrustar Power BI */} 
      <section> 
        <iframe 
          className="powerbi-iframe" 
          title="Datos tienda MASS" 
          src="https://app.powerbi.com/view?r=eyJrIjoiNjI0ZThiNTAtZGRlOC00MGNm
 LTllNGYtM2FmMjVmMWI5NjFiIiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2Rh
 LWQ2OGE2MDA2YTg0YSIsImMiOjR9" 
          frameBorder="0" 
          allowFullScreen 
        ></iframe> 
      </section> 
 
      {/* Lista de Participantes */} 
      <section className="participantes"> 
        <h2>Participantes del Grupo</h2> 
        <ul> 
          <li>HERRERA QUINCHO JOHAN JESUS</li> 
          <li>AYDE ACOSTA NAYELI</li> 
          <li>SANCHEZ UTANY DANS LEE</li> 
          <li>LLANTOY MAYURI LEONARDO JOSE</li> 
        </ul> 
      </section> 
 
      {/* Docente del Curso */} 
      <section className="docente"> 
        <h2>Docente del Curso</h2> 
        <p>Mg. JULIO MELENDEZ</p> 
      </section> 
      <section className="informacion-adicional"> 
        <h2>Facultad de Ingenierías</h2> 
        <p>Programa de Estudios: Ingeniería de Sistemas</p> 
        <p>Octavo Ciclo</p> 
      </section> 
 
      {/* Footer con enlaces */} 
      <footer className="footer"> 
        <p>&copy; 2024 Todos los derechos reservados.</p> 
        <div className="footer-links"> 
          <a href="#aviso-legal">Aviso Legal</a> 
          <a href="#politica-privacidad">Política de privacidad</a> 
          <a href="#politica-cookies">Política de cookies</a> 
          <a href="#ajustes-cookies">Ajustes de cookies</a> 
          <a href="#condiciones-contratacion">Condiciones de contratación</a> 
        </div> 
      </footer> 
    </div> 
  ); 
} 
 
export default App;