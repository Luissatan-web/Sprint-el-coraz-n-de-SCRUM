import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <>
    <header>
      <nav>
        <div className="logo">
          <img src="img/faw.png">
          </img>
        </div>
        <div className="menu">
          <a href="#">
              Inicio
          </a>
          <a href="#">
            Camiones
          </a>
          <a href="#">
            Refacciones
          </a>
          <a href="#">
            Ubicaciones
          </a>
          <a href="#">
            Contacto
          </a>
        </div>
      </nav>
      <div className="cabecera">
      <img  src="img/volvo.jpg">
      </img>
      </div>
    </header>
    <section>
      <h2>
            CONOCENOS SOMOS FAW MÉXICO
      </h2>
      <div className="informacion">
          <div className="informacion_imagen">
              <img src="img/servicio.jpg">
              </img>
          </div>
          <div className="informacion_texto">
              <p>
              En FAW México contamos con el personal mejor capacitado para la reparación de tu vehículo, te invitamos a que te acerques a cualquiera de nuestras sucursales donde un asesor de servicios
                te brindara la información y atención necesaria para que notes que FAW México es la diferencia.
                De igual manera contamos con una gran variedad de unidades a un costo accesible que se ajustara a tus necesidades y a tu bolsillo.
              </p>
          </div>
      </div>
    </section>
    <footer>
      <div className="telefonos">
        <h3>Télefono</h3>
        <p>555-555-5555</p>
        <p>555-555-5555</p>
        <p>555-555-5555</p>
      </div>
      <div className="correos">
        <h3>Correos</h3>
        <p>correo@correo.es</p>
        <p>correo@correo.es</p>
        <p>correo@correo.es</p>
      </div>
      <div className="sucursales">
        <h3>Sucursales</h3>
        <p>Guadalajara</p>
        <p>Tlaquepaque</p>
        <p>Zapopan</p>
      </div>
      <div className="redes">
          <img src="img/face.png"></img>
          <img src="img/insta.png"></img>
          <img src="img/twit.png"></img>
          <img src="img/you.png"></img>
      </div>
    </footer>
   </>
  );
}

export default App;
