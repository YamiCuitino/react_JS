import "../main.css";
import Item from "./Itemmenu";


function SubMenu3(props) {
    const datos = props.data
    const SubMenu2 = props.subMenu2
    return (
        <ul key="" className="ulSubMenu3">
            {datos.map((subItem3) => {
                return (
                    SubMenu2 === subItem3.idPadre &&
                    <Item llave={subItem3.id} clase = "listaSubMenu" > {subItem3.name} </Item>
                )
            }
            )}
        </ul>
    )
}

export default SubMenu3
