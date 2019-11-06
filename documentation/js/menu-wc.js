'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">proyecto-grado documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdministradorModule.html" data-type="entity-link">AdministradorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdministradorModule-dea9678557994ecdb2322d2acb64a7f7"' : 'data-target="#xs-components-links-module-AdministradorModule-dea9678557994ecdb2322d2acb64a7f7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdministradorModule-dea9678557994ecdb2322d2acb64a7f7"' :
                                            'id="xs-components-links-module-AdministradorModule-dea9678557994ecdb2322d2acb64a7f7"' }>
                                            <li class="link">
                                                <a href="components/ActualizarTipoRequerimientoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ActualizarTipoRequerimientoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CrearPerfilComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CrearPerfilComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditarEmpleadoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditarEmpleadoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditarPerfilComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditarPerfilComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EliminarEmpleadoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EliminarEmpleadoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EliminarPerfilComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EliminarPerfilComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EliminarTipoRequerimientoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EliminarTipoRequerimientoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmpleadosComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmpleadosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TipoRequerimientoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TipoRequerimientoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdministradorRoutingModule.html" data-type="entity-link">AdministradorRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-3d38c6edd578b2563ae9cce13312a9b9"' : 'data-target="#xs-components-links-module-AppModule-3d38c6edd578b2563ae9cce13312a9b9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-3d38c6edd578b2563ae9cce13312a9b9"' :
                                            'id="xs-components-links-module-AppModule-3d38c6edd578b2563ae9cce13312a9b9"' }>
                                            <li class="link">
                                                <a href="components/ActualizarTipoRequerimientoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ActualizarTipoRequerimientoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdministradorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdministradorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CrearPerfilComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CrearPerfilComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditarEmpleadoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditarEmpleadoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditarPerfilComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditarPerfilComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EliminarEmpleadoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EliminarEmpleadoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EliminarPerfilComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EliminarPerfilComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EliminarTipoRequerimientoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EliminarTipoRequerimientoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmpleadosComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmpleadosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Error404Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Error404Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListaSeguimientoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListaSeguimientoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NuevoUsuarioComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NuevoUsuarioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PerfilComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PerfilComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PerfilesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PerfilesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrincipalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrincipalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RequerimientoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RequerimientoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RequerimientosComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RequerimientosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RespuestaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RespuestaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RespuestaRequerimientosComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RespuestaRequerimientosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SpinnerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SpinnerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TipoRequerimientoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TipoRequerimientoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VerSeguimientoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VerSeguimientoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-3d38c6edd578b2563ae9cce13312a9b9"' : 'data-target="#xs-injectables-links-module-AppModule-3d38c6edd578b2563ae9cce13312a9b9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-3d38c6edd578b2563ae9cce13312a9b9"' :
                                        'id="xs-injectables-links-module-AppModule-3d38c6edd578b2563ae9cce13312a9b9"' }>
                                        <li class="link">
                                            <a href="injectables/AuthServiceService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthServiceService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AppModule-3d38c6edd578b2563ae9cce13312a9b9"' : 'data-target="#xs-pipes-links-module-AppModule-3d38c6edd578b2563ae9cce13312a9b9"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-3d38c6edd578b2563ae9cce13312a9b9"' :
                                            'id="xs-pipes-links-module-AppModule-3d38c6edd578b2563ae9cce13312a9b9"' }>
                                            <li class="link">
                                                <a href="pipes/FechaPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FechaPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CrearPerfilModule.html" data-type="entity-link">CrearPerfilModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CrearPerfilRoutingModule.html" data-type="entity-link">CrearPerfilRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EmpleadosModule.html" data-type="entity-link">EmpleadosModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EmpleadosRoutingModule.html" data-type="entity-link">EmpleadosRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TipoRoutingModule.html" data-type="entity-link">TipoRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/PaginatorEspañol.html" data-type="entity-link">PaginatorEspañol</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/EmpleadosService.html" data-type="entity-link">EmpleadosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PerfilServiceService.html" data-type="entity-link">PerfilServiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RequerimientoServiceService.html" data-type="entity-link">RequerimientoServiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SeguimientoService.html" data-type="entity-link">SeguimientoService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Empleados.html" data-type="entity-link">Empleados</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Estado.html" data-type="entity-link">Estado</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Fecha.html" data-type="entity-link">Fecha</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Hola.html" data-type="entity-link">Hola</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Perfil.html" data-type="entity-link">Perfil</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Requerimiento.html" data-type="entity-link">Requerimiento</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Seguimiento.html" data-type="entity-link">Seguimiento</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TipoRequerimiento.html" data-type="entity-link">TipoRequerimiento</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Usuario.html" data-type="entity-link">Usuario</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});