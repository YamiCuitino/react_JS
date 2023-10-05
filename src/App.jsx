import "./main.css";
import Menu from './components/Menu';

function App() {

  const configMenu = {
    configColor: {
      background:'#D64933', // Color de Fondo General de la botonera
      itemBackground: '#D64933',// Color de Fondo de los subMenús
      itemColor: '#FCFCFC', // Color del texto de cada item del menú
      itemActive: '#2E105C', // Color cuando hace click y se abre un  submenú '#a8a8a8',
    },
    idFirstNivel: 150,
    menuItems: [
      { name: 'Tienda', isFolder: false, id: 12, idPadre: 150 },
      { name: 'Mujer', isFolder: true, id: 4, idPadre: 150 },
      { name: 'Hombre', isFolder: true, id: 5, idPadre: 150 },
      { name: 'Sobre nosotros', isFolder: false, id: 27, idPadre: 150 },
      { name: 'Ver todo', isFolder: false, id: 15, idPadre: 5 },
      { name: 'Ver todo', isFolder: false, id: 3, idPadre: 4 },
      { name: 'Calzado', isFolder: true, id: 16, idPadre: 5 },
      { name: 'Accesorios', isFolder: false, id: 17, idPadre: 4 },
      { name: 'Calzado', isFolder: true, id: 18, idPadre:  4},
      { name: 'Marcas', isFolder: true, id: 19, idPadre: 4 },
      { name: 'Nike', isFolder: false, id: 20, idPadre: 19 },
      { name: 'Adidas', isFolder: false, id: 21, idPadre: 19 },
      { name: 'New Balance', isFolder: false, id: 22, idPadre: 19 },
      { name: 'Deportivo', isFolder: false, id: 23, idPadre: 18 },
      { name: 'Urbano', isFolder: false, id: 24, idPadre: 18 },
      { name: 'Deportivo', isFolder: false, id: 25, idPadre: 16 },
      { name: 'Urbano', isFolder: false, id: 26, idPadre: 16 },
    ],
  }

  return (
    <div>
      <Menu data={configMenu} />
    </div>
  );
}

export default App;

