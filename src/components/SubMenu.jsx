import "../main.css";
import Item from "./Itemmenu";
import SubMenu3 from "./SubMenu3";
import { useState } from "react";

function SubMenu(props) {

    const { datos, Menu } = props;

    const [estadoSubLista2, setestadoSubLista2] = useState([])

    const handleSubMenuNivel3 = (e, SubMenuId) => {
        e.preventDefault();
        setestadoSubLista2((prev) => {
            const arr = [...prev];
            arr[SubMenuId] = true;
            return arr;
        })
            ;
    };

    const handleOcSubMenuNivel3 = (e, SubMenuId) => {
        e.preventDefault();
        setestadoSubLista2((prev) => {
            const arr = [...prev];
            arr[SubMenuId] = false;
            return arr;
        })
            ;
    };

    return (
        <ul className="ulSubMenu">
            {datos.menuItems.map((subItem) => {
                return (
                    Menu === subItem.idPadre ?
                        subItem.isFolder ?
                            <Item llave={subItem.id}
                                clase="listaSubMenu"
                                style={{
                                    background: datos.configColor.itemBackground,
                                    color: estadoSubLista2[subItem.id] && datos.configColor.itemActive
                                }}
                                onMouseEnter={(e) => handleSubMenuNivel3(e, subItem.id)}
                                onMouseLeave={(e) => handleOcSubMenuNivel3(e, subItem.id)}
                            >
                                <div>
                                    <span>
                                        {subItem.name}
                                        <svg xmlns="http://www.w3.org/2000/svg" width={"20px"} height={"15px"} fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z" />
                                        </svg>
                                    </span>
                                </div>
                                {estadoSubLista2[subItem.id] &&
                                    <SubMenu3 data={datos.menuItems} subMenu2={subItem.id} >  </SubMenu3>
                                }
                            </Item>
                            :
                            <Item llave={subItem.id} clase="listaSubMenu" > {subItem.name} </Item>
                        :
                        ""
                )
            })
            }
        </ul>
    )
}

export default SubMenu
