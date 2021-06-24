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
          <a href="#productos">
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
    <section class="cartas" id="productos">
      <div class="carta-faw">
        <img src="img/modelos/1102/ELAM-FAW-1102-diesel-lateral.jpg" alt=""></img>
        <p>1102D</p>
        <p>2 Ton</p>
        <div class="detalles">
          <a href="1102.html">Ver Detalles</a>
        </div>
      </div>
      <div class="carta-faw">
        <img src="img/modelos/1303/ELAM-FAW-1303-diesel-lateral.jpg" alt=""></img>
        <p>1303D</p>
        <p>3.4 Ton</p>
        <div class="detalles">
          <a href="1303.html">Ver Detalles</a>
        </div>
      </div>
      <div class="carta-faw">
        <img src="img/modelos/1304/ELAM-FAW-1304-diesel-lateral.jpg" alt=""></img>
        <p>1304D</p>
        <p>4 Ton</p>
        <div class="detalles">
          <a href="1304.html">Ver Detalles</a>
        </div>
      </div>
      <div class="carta-faw">
        <img src="img/modelos/1605/ELAM-FAW-1605-diesel-lateral.jpg" alt=""></img>
        <p>1605D</p>
        <p>5.3 Ton</p>
        <div class="detalles">
          <a href="1605.html">Ver Detalles</a>
        </div>
        </div>
        <div class="carta-faw">
          <img src="img/modelos/1607/ELAM-FAW-1607-diesel-lateral.jpg" alt=""></img>
          <p>TIGER 1607D</p>
          <p>7.6 Ton</p>
          <div class="detalles">
            <a href="1607.html">Ver Detalles</a>
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
