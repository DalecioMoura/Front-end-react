import React from "react";
import { Link, NavLink } from "react-router-dom";
function Menu(){
    return (
        <div id="div_menu">
            <NavLink to={'/'}                    ><button>HOME                           </button></NavLink>
            <Link to={'/consultarmaterial'}      ><button>Consultar Material             </button></Link>
            <NavLink to={'/cadastrarmaterial'}   ><button>Cadastrar Material             </button></NavLink>
            <NavLink to={'/editarmaterial'}      ><button>Editar Material                </button></NavLink>
            <NavLink to={'/excluirmaterial'}     ><button>Excluir Material               </button></NavLink>
            <NavLink to={'/retirarmaterial'}     ><button>Retirar Material               </button></NavLink>
            <NavLink to={'/devolvermaterial'}    ><button>Devolver Material              </button></NavLink>
            <NavLink to={'/cadastrarusuario'}    ><button>Cadastrar Usuário              </button></NavLink>
            <NavLink to={'/consultarusuario'}    ><button>Consultar Cadastro de Usuário  </button></NavLink>
            <NavLink to={'/editarusuario'}       ><button>Editar Cadastro de Usuário     </button></NavLink>
            <NavLink to={'/excluirusuario'}      ><button>Excluir Usuário                </button></NavLink>   
        </div>
    );
}

export default Menu;