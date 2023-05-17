import React from 'react';
import {Redirect} from 'react-router-dom';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
//import LogoNavbar from "./img/logo-navbar.png";

const LogoNavbar = 'data:image/png;base64,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';

var username = '';
var urlActual = '';

class NavBarMainVentas extends React.Component {

  constructor(props) {
    super(props);

    const { location, match } = props;

    urlActual = match.url.split("/", 2);

    username = match.params.id_Usuario;

    this.toggle = this.toggle.bind(this);
    this.redireccionarIrNuevaVenta = this.redireccionarIrNuevaVenta.bind(this);
    this.redireccionarIrVentasConcluidas = this.redireccionarIrVentasConcluidas.bind(this);
    this.redireccionarIrVentasCanceladas = this.redireccionarIrVentasCanceladas.bind(this);
    this.redireccionarIrClientes= this.redireccionarIrClientes.bind(this);
    this.redireccionarIrViajes= this.redireccionarIrViajes.bind(this);
    this.redireccionarIrCorte= this.redireccionarIrCorte.bind(this);
    this.redireccionarIrPublicidad = this.redireccionarIrPublicidad.bind(this);
    this.redireccionarIrViajeRedondo = this.redireccionarIrViajeRedondo.bind(this);
    this.redireccionarIrLogin = this.redireccionarIrLogin.bind(this);

    this.fetchUser = this.fetchUser.bind(this);
    this.fetchViajeRedondo = this.fetchViajeRedondo.bind(this);
    
    this.state = {isOpen: false, IrNuevaVenta:false,IrLogin:false, IrVentasConcluidas:false, IrVentasCanceladas:false, IrClientes:false, IrViajes:false, IrCorte:false,IrPublicidad:false,  IrViajeRedondo:false, nombre: '', apellidoPaterno: '', apellidoMaterno: '', urlActual: urlActual[1]}};

    componentDidMount(){
      this.fetchUser();
      this.fetchViajeRedondo();
    }

    fetchUser(){
      fetch(`/api/Usuarios/${username}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({
              nombre: data[0].nombre,
              apellidoPaterno: data[0].apellidoPaterno,
              apellidoMaterno: data[0].apellidoMaterno
            })
        });
    }

    fetchViajeRedondo(){
      fetch(`/api/Usuarios/${username}/descViajeRedondo`)
        .then(res => res.json())
        .then(data => {
            this.setState({
              viajeRedondo: data.res
            });
        });
    }

    redireccionarIrNuevaVenta(e){ e.preventDefault(); this.setState({IrNuevaVenta:true})};
    redireccionarIrVentasConcluidas(e){ e.preventDefault(); this.setState({IrVentasConcluidas:true})};
    redireccionarIrVentasCanceladas(e){ e.preventDefault(); this.setState({IrVentasCanceladas:true})};
    redireccionarIrClientes(e){ e.preventDefault(); this.setState({IrClientes:true})};
    redireccionarIrViajes(e){ e.preventDefault(); this.setState({IrViajes:true})};
    redireccionarIrCorte(e){ e.preventDefault(); this.setState({IrCorte:true})};
    redireccionarIrPublicidad(e){ e.preventDefault(); this.setState({IrPublicidad:true})};
    redireccionarIrViajeRedondo(e){ e.preventDefault(); this.setState({IrViajeRedondo:true})};
    redireccionarIrLogin(e){ e.preventDefault(); this.setState({IrLogin:true})};  
    toggle() {this.setState({isOpen: !this.state.isOpen})};

  render() {
    if(this.state.IrCorte){return <Redirect to= {"/Ventas_Corte/"+username}/>};
    if(this.state.IrClientes){return <Redirect to= {"/Ventas_Clientes/"+username}/>};//
    if(this.state.IrNuevaVenta){return <Redirect to= {"/Ventas_Index/"+username}/>};//
    if(this.state.IrLogin){return <Redirect to= {"/"+username}/>};
    if(this.state.IrPublicidad){return <Redirect to= {"/Ventas_Publicidad/"+username}/>};
    if(this.state.IrViajes){return <Redirect to= {"/Ventas_Viajes/"+username}/>};
    if(this.state.IrVentasConcluidas){return <Redirect to= {"/Ventas_VentasConcluidas/"+username}/>};
    if(this.state.IrVentasCanceladas){return <Redirect to= {"/Ventas_VentasCanceladas/"+username}/>};
    if(this.state.IrViajeRedondo){return <Redirect to= {"/Ventas_ViajeRedondo/"+username}/>};
   
    return (
      <div>
        <Navbar color="danger" dark expand="md" >
          <NavbarBrand href="/">
            <img src={LogoNavbar} width="auto" height="60" alt="logo-viajes_azteca"/>
          </NavbarBrand>
          <span class="navbar-text" style={{color: 'white'}}>
            {this.state.nombre+" "+this.state.apellidoPaterno+" "+this.state.apellidoMaterno}
          </span>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  VENTAS
                </DropdownToggle>
                <DropdownMenu left>
                {(this.state.urlActual == 'Ventas_Index')? 
                ''
                :
                (
                  <DropdownItem>
                    <NavItem onClick={this.redireccionarIrNuevaVenta}>
                        <NavLink className="text-dark"> NUEVA VENTA </NavLink>
                    </NavItem>
                  </DropdownItem>
                )
                }
                {
                  (this.state.viajeRedondo)? 
                    ((this.state.urlActual == 'Ventas_ViajeRedondo')? 
                    ''
                    : 
                    (
                      <DropdownItem>
                        <NavItem onClick={this.redireccionarIrViajeRedondo}>
                            <NavLink className="text-dark"> NUEVA VENTA VIAJE REDONDO </NavLink>
                        </NavItem>
                      </DropdownItem>
                    ))
                  : 
                   ''                  
                }
                {(this.state.urlActual == 'Ventas_VentasConcluidas')? 
                ''
                :
                (
                  <DropdownItem>
                    <NavItem onClick={this.redireccionarIrVentasConcluidas}>
                        <NavLink className="text-dark"> VENTAS CONCLUIDAS </NavLink>
                    </NavItem>
                  </DropdownItem>
                )
                }
                {(this.state.urlActual == 'Ventas_VentasCanceladas')? 
                ''
                :
                (
                  <DropdownItem>
                    <NavItem onClick={this.redireccionarIrVentasCanceladas}>
                        <NavLink className="text-dark"> VENTAS CANCELADAS </NavLink>
                    </NavItem>
                  </DropdownItem>
                )
                }
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  VER
                </DropdownToggle>
                <DropdownMenu left>

                {(this.state.urlActual == 'Ventas_Clientes')? 
                ''
                :
                (
                  <DropdownItem>
                    <NavItem onClick={this.redireccionarIrClientes}>
                        <NavLink className="text-dark"> CLIENTES </NavLink>
                    </NavItem>
                  </DropdownItem>
                )
                }
                {(this.state.urlActual == 'Ventas_Viajes')? 
                ''
                :
                (
                  <DropdownItem>
                    <NavItem onClick={this.redireccionarIrViajes}>
                        <NavLink className="text-dark"> VIAJES </NavLink>
                    </NavItem>
                  </DropdownItem>
                )
                }
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  CORTE
                </DropdownToggle>
                <DropdownMenu>

                {(this.state.urlActual == 'Ventas_Corte')? 
                ''
                :
                (
                  <DropdownItem>
                    <NavItem onClick={this.redireccionarIrCorte}>
                        <NavLink className="text-dark"> CORTE </NavLink>
                    </NavItem>
                  </DropdownItem>
                )
                }
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  OPCIONES
                </DropdownToggle>
                <DropdownMenu right>

                {(this.state.urlActual == 'Ventas_Publicidad')? 
                ''
                :
                (
                  <DropdownItem>
                    <NavItem onClick={this.redireccionarIrPublicidad}>
                        <NavLink className="text-dark"> PUBLICIDAD </NavLink>
                    </NavItem>
                  </DropdownItem>
                )
                }
                
                  <DropdownItem>
                    <NavItem onClick={this.redireccionarIrLogin}>
                        <NavLink className="text-dark"> CERRAR SESION </NavLink>
                    </NavItem>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default NavBarMainVentas