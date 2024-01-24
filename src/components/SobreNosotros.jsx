function SobreNosotros() {
  return (
    <>
      <div className="card">
        <h1>Sobre Nosotros</h1>
        <article className="info">
          <h2>Aplicación de TasksLists con React</h2>
          <selection>
            <h4>Creación de Tareas:</h4>
            Los usuarios pueden agregar nuevas tareas a la lista. Cada tarea
            tiene un nombre, una descripción y un estado que indica si está
            completada o no.
            <h4>Visualización de Tareas:</h4>
              La lista de tareas se muestra en la página principal de la
              aplicación. Cada tarea se presenta con su nombre, descripción y un
              indicador visual del estado de completado.
            <h4>Edición de Tareas:</h4>
              Se proporciona la capacidad de editar el nombre y la descripción
              de una tarea existente. La edición se realiza a través de un
              formulario interactivo.
            <h4>Eliminación de Tareas:</h4>
              Los usuarios pueden eliminar tareas de la lista. Se incluyen
              botones de eliminación junto a cada tarea para facilitar esta
              acción.
            <h4>Persistencia de Datos:</h4>
              La aplicación utiliza localStorage para almacenar las tareas, lo
              que permite a los usuarios conservar su lista incluso después de
              cerrar o recargar la página.
          </selection>
          <selection>
            <h4>Navegación con React Router:</h4>
              Se implementa la navegación entre diferentes secciones de la
              aplicación mediante React Router. Existen rutas para la página
              principal, la lista de tareas y la información sobre nosotros.
          </selection>
        </article>
      </div>
      <h3>Tecnologías Utilizadas</h3>
      <selection>
        <div className="card-tic">
          <p className="heading">React</p>
          <p>
            El proyecto utiliza la biblioteca de JavaScript React para construir
            la interfaz de usuario de forma eficiente y modular.
          </p>
        </div>
        <div className="card-tic">
          <p className="heading">React Hooks</p>
          <p>
            Se emplean hooks como useState, useEffect y useReducer para
            gestionar el estado y los efectos secundarios de la aplicación de
            manera más clara y concisa.
          </p>
        </div>
        <div className="card-tic">
          <p className="heading">React Router</p>
          <p>
            Se utiliza React Router para la navegación entre las diferentes
            secciones de la aplicación, permitiendo una experiencia de usuario
            fluida y coherente.
          </p>
        </div>
        <div className="card-tic">
          <p className="heading">JavaScript (ES6+)</p>
          <p>
            La lógica de la aplicación se implementa utilizando JavaScript
            moderno, aprovechando características como destructuring, arrow
            functions y template literals.
          </p>
        </div>
        <div className="card-tic">
          <p className="heading">CSS</p>
          <p>
            Se aplica estilos CSS para mejorar la presentación visual de la
            aplicación. Se utilizan estilos simples y efectivos para
            proporcionar una interfaz de usuario limpia y agradable.
          </p>
        </div>
        <div className="card-tic">
          <p className="heading">localStorage</p>
          <p>
            Se hace uso de la capacidad de almacenamiento local del navegador
            mediante localStorage para persistir los datos de las tareas entre
            sesiones.
          </p>
        </div>
      </selection>
    </>
  );
}

export default SobreNosotros;
