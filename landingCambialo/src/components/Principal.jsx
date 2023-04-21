import React from 'react';
import home from "../assets/home.jpeg";
const Principal = () => {
    return (
      <div className="container_principal">
        <div className="principal">
          <div className="title">
            <h2 className="parrafo_title text-lg  text-purple-950">
              <p className=" parrafo_title  text-slate-700 text-2xl font-bold">
                Intercambia,
              </p>
              vende o haz trueques de manera fácil y segura con nuestra app.
            </h2>
          </div>
          <img
            src={home}
            className="img_home rounded-2xl  border-4 border-black"
          />
        </div>
        <div className="description py-5">
          <p className="text-purple-950">
            Descubre una nueva forma de hacer negocios y ahorrar dinero con
            nuestra plataforma. ¿Quieres experimentar una nueva forma de consumo
            colaborativo? Descarga nuestra app ahora y comienza a intercambiar.
            Olvídate de los intermediarios y haz trueques directos con otros
            usuarios de nuestra app.
          </p>
        </div>
        <div className="container_boton_descarga py-5 ">
          <a href="Cambialo.apk" download>
            <button className="boton_descarga">Descargar App</button>
          </a>
        </div>

        <div className="about description py-5">
          <h4 className="text-purple-950 font-extrabold text-3xl">
            Acerca de nosotros
          </h4>
          <p className="text-purple-950">
            Somos una aplicación que ofrece una nueva forma de intercambiar y
            vender productos y servicios. En Cambialo, creemos en un consumo más
            responsable y sostenible, y por eso nuestra plataforma te permite no
            sólo ahorrar dinero, sino también contribuir a una economía más
            circular. Con Cambialo, puedes intercambiar productos o servicios
            con otros usuarios de manera fácil y segura, o vender los productos
            que ya no necesitas y ganar dinero extra. Además, puedes encontrar
            ofertas increíbles en productos y servicios que te interesan. Pero
            eso no es todo. Con Cambialo también puedes conocer a otros usuarios
            con intereses similares y ampliar tu red de contactos. Únete a
            nuestra comunidad y comienza a experimentar una nueva forma de hacer
            negocios.
          </p>
        </div>
      </div>
    );
};

export default Principal;