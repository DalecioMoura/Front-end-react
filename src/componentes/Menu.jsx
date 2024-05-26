import React from "react";
import { Link, NavLink } from "react-router-dom";
function Menu({enviaMensagem}){
    return (
        <div id="div_menu">
            <NavLink to={'/Home'}               ><button onClick={()=>enviaMensagem("Pagina Inicial")}      >HOME                           </button></NavLink>
            <Link to={'consultarmaterial'}      ><button onClick={()=>enviaMensagem("consultar itens")}     >Consultar Material             </button></Link>
            <NavLink to={'cadastrarmaterial'}   ><button onClick={()=>enviaMensagem("cadastrar itens")}     >Cadastrar Material             </button></NavLink>
            <NavLink to={'editarmaterial'}      ><button onClick={()=>enviaMensagem("editar itens")}        >Editar Material                </button></NavLink>
            <NavLink to={'excluirmaterial'}     ><button onClick={()=>enviaMensagem("excluir itens")}       >Excluir Material               </button></NavLink>
            <NavLink to={'retirarmaterial'}     ><button onClick={()=>enviaMensagem("retirar itens")}       >Retirar Material               </button></NavLink>
            <NavLink to={'devolvermaterial'}    ><button onClick={()=>enviaMensagem("devolver itens")}      >Devolver Material              </button></NavLink>
            <NavLink to={'cadastrarusuario'}    ><button onClick={()=>enviaMensagem("cadastrar usuario")}   >Cadastrar Usuário              </button></NavLink>
            <NavLink to={'consultarusuario'}    ><button onClick={()=>enviaMensagem("consultar usuario")}   >Consultar Cadastro de Usuário  </button></NavLink>
            <NavLink to={'editarusuario'}       ><button onClick={()=>enviaMensagem("editar usuario")}      >Editar Cadastro de Usuário     </button></NavLink>
            <NavLink to={'excluirusuario'}      ><button onClick={()=>enviaMensagem("excluir usuario")}     >Excluir Usuário                </button></NavLink>   
        </div>
    );
}

export default Menu;