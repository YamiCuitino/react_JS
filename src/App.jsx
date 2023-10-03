import "./main.css";
import ListaMenu from './components/ListaMenu';

function App() {

  const configMenu = {
    configColor: {
      background:'#black', // Color de Fondo General de la botonera
      itemBackground: '#d0d0d0',// Color de Fondo de los subMenús
      itemColor: '#666', // Color del texto de cada item del menú
      itemActive: 'blue', // Color cuando hace click y se abre un  submenú '#a8a8a8',
    },
    idFirstNivel: 150,
    menuItems: [
      { name: 'Tienda', isFolder: false, id: 148, idPadre: 150 },
      { name: 'Mujer', isFolder: true, id: 2, idPadre: 150 },
      { name: 'Hombre', isFolder: true, id: 22, idPadre: 150 },
      { name: 'otro Nivel2', isFolder: false, id: 44, idPadre: 22 },
      { name: 'Ver todo', isFolder: false, id: 3, idPadre: 2 },
      { name: 'Accesorios', isFolder: false, id: 4, idPadre: 2 },
      { name: 'Calzado', isFolder: true, id: 5, idPadre: 2 },
      { name: 'Marcas', isFolder: true, id: 99, idPadre: 2 },
      { name: 'Nike', isFolder: false, id: 98, idPadre: 99 },
      { name: 'Adidas', isFolder: false, id: 100, idPadre: 99 },
      { name: 'Deportivo', isFolder: false, id: 55, idPadre: 5 },
      { name: 'Urbano', isFolder: false, id: 56, idPadre: 5 },
    ],
  }

  return (
    <div>
      <ListaMenu data={configMenu} />
    </div>
  );
}

export default App;

