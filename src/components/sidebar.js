import React from 'react'

const Sidebar = ()=>{
    return(
        
        <aside className="left-sidebar">
            
            <div className="scroll-sidebar">
                
                <div className="user-profile">
                    
                    <div className="profile-img"> <img src="assets/images/users/1.jpg" alt="user" /> </div>
                    
                    <div className="profile-text"> <a href="/" className="dropdown-toggle link u-dropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">Markarn Doe <span className="caret"></span></a>
                        <div className="dropdown-menu animated flipInY">
                            <a href="/" className="dropdown-item"><i className="ti-user"></i> My Profile</a>
                            <a href="/" className="dropdown-item"><i className="ti-wallet"></i> My Balance</a>
                            <a href="/" className="dropdown-item"><i className="ti-email"></i> Inbox</a>
                            <div className="dropdown-divider"></div> <a href="/" className="dropdown-item"><i className="ti-settings"></i> Account Setting</a>
                            <div className="dropdown-divider"></div> <a href="/" className="dropdown-item"><i className="fa fa-power-off"></i> Logout</a>
                        </div>
                    </div>
                </div>
                
                
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li className="nav-small-cap">PERSONAL</li>
                        <li>
                            <a className="has-arrow" href="/" aria-expanded="false"><i className="mdi mdi-gauge"></i><span className="hide-menu">Dashboard <span className="label label-rounded label-success">5</span></span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="/">Modern Dashboard</a></li>
                                <li><a href="/">Awesome Dashboard</a></li>
                                <li><a href="/">Classy Dashboard</a></li>
                                <li><a href="/">Analytical Dashboard</a></li>
                                <li><a href="/">Minimal Dashboard</a></li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow " href="/" aria-expanded="false"><i className="mdi mdi-bullseye"></i><span className="hide-menu">Apps</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="app-/">Calendar</a></li>
                                <li><a href="app-/">Chat app</a></li>
                                <li><a href="app-/">Support Ticket</a></li>
                                <li><a href="app-/">Contact / Employee</a></li>
                                <li><a href="app-/">Contact Grid</a></li>
                                <li><a href="app-contact-/">Contact Detail</a></li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow " href="/" aria-expanded="false"><i className="mdi mdi-email"></i><span className="hide-menu">Inbox</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="app-/">Mailbox</a></li>
                                <li><a href="app-email-/">Mailbox Detail</a></li>
                                <li><a href="app-/">Compose Mail</a></li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow" href="/" aria-expanded="false"><i className="mdi mdi-chart-bubble"></i><span className="hide-menu">Ui Elements</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="ui-/">Cards</a></li>
                                <li><a href="ui-user-/">User Cards</a></li>
                                <li><a href="ui-/">Buttons</a></li>
                                <li><a href="ui-/">Modals</a></li>
                                <li><a href="ui-/">Tab</a></li>
                                <li><a href="ui-tooltip-/">Tooltip &amp; Popover</a></li>
                                <li><a href="ui-tooltip-/">Tooltip stylish</a></li>
                                <li><a href="ui-/">Sweet Alert</a></li>
                                <li><a href="ui-/">Notification</a></li>
                                <li><a href="ui-/">Progressbar</a></li>
                                <li><a href="ui-/">Nestable</a></li>
                                <li><a href="ui-range-/">Range slider</a></li>
                                <li><a href="ui-/">Timeline</a></li>
                                <li><a href="ui-/">Typography</a></li>
                                <li><a href="ui-horizontal-/">Horizontal Timeline</a></li>
                                <li><a href="ui-session-/">Session Timeout</a></li>
                                <li><a href="ui-session-ideal-/">Session Ideal Timeout</a></li>
                                <li><a href="ui-/">Bootstrap Ui</a></li>
                                <li><a href="ui-/">Breadcrumb</a></li>
                                <li><a href="ui-bootstrap-/">Bootstrap Switch</a></li>
                                <li><a href="ui-list-/">List Media</a></li>
                                <li><a href="ui-/">Ribbons</a></li>
                                <li><a href="ui-/">Grid</a></li>
                                <li><a href="ui-/">Carousel</a></li>
                                <li><a href="ui-date-/">Date-paginator</a></li>
                                <li><a href="ui-dragable-/">Dragable Portlet</a></li>
                            </ul>
                        </li>
                        <li className="nav-devider"></li>
                        <li className="nav-small-cap">FORMS, TABLE &amp; WIDGETS</li>
                        <li>
                            <a className="has-arrow" href="/" aria-expanded="false"><i className="mdi mdi-file"></i><span className="hide-menu">Forms</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="form-/">Basic Forms</a></li>
                                <li><a href="form-/">Form Layouts</a></li>
                                <li><a href="form-/">Form Addons</a></li>
                                <li><a href="form-/">Form Material</a></li>
                                <li><a href="form-float-/">Floating Lable</a></li>
                                <li><a href="form-/">Form Pickers</a></li>
                                <li><a href="form-/">File Upload</a></li>
                                <li><a href="form-/">Form Mask</a></li>
                                <li><a href="form-/">Form Validation</a></li>
                                <li><a href="form-/">File Dropzone</a></li>
                                <li><a href="form-/">Icheck control</a></li>
                                <li><a href="form-img-/">Image Cropper</a></li>
                                <li><a href="form-/">HTML5 Editor</a></li>
                                <li><a href="form-/">Form Typehead</a></li>
                                <li><a href="form-/">Form Wizard</a></li>
                                <li><a href="form-/">Xeditable Editor</a></li>
                                <li><a href="form-/">Summernote Editor</a></li>
                                <li><a href="form-/">Tinymce Editor</a></li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow " href="/" aria-expanded="false"><i className="mdi mdi-table"></i><span className="hide-menu">Tables</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="table-/">Basic Tables</a></li>
                                <li><a href="table-/">Table Layouts</a></li>
                                <li><a href="table-data-/">Data Tables</a></li>
                                <li><a href="table-/">Footable</a></li>
                                <li><a href="table-/">Js Grid Table</a></li>
                                <li><a href="table-/">Responsive Table</a></li>
                                <li><a href="table-/">Bootstrap Tables</a></li>
                                <li><a href="table-editable-/">Editable Table</a></li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow " href="/" aria-expanded="false"><i className="mdi mdi-widgets"></i><span className="hide-menu">Widgets</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="widget-/">Widget Apps</a></li>
                                <li><a href="widget-/">Widget Data</a></li>
                                <li><a href="widget-/">Widget Charts</a></li>
                            </ul>
                        </li>
                        <li className="nav-devider"></li>
                        <li className="nav-small-cap">EXTRA COMPONENTS</li>
                        <li>
                            <a className="has-arrow " href="/" aria-expanded="false"><i className="mdi mdi-book-multiple"></i><span className="hide-menu">Page Layout</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="layout-single-/">1 Column</a></li>
                                <li><a href="layout-fix-/">Fix header</a></li>
                                <li><a href="layout-fix-/">Fix sidebar</a></li>
                                <li><a href="layout-fix-header-/">Fixe header &amp; Sidebar</a></li>
                                <li><a href="layout-/">Boxed Layout</a></li>
                                <li><a href="layout-logo-/">Logo in Center</a></li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow " href="/" aria-expanded="false"><i className="mdi mdi-book-open-variant"></i><span className="hide-menu">Sample Pages</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="starter-/">Starter Kit</a></li>
                                <li><a href="pages-/">Blank page</a></li>
                                <li><a href="/" className="has-arrow">Authentication <span className="label label-rounded label-success">6</span></a>
                                    <ul aria-expanded="false" className="collapse">
                                        <li><a href="pages-/">Login 1</a></li>
                                        <li><a href="pages-login/">Login 2</a></li>
                                        <li><a href="pages-/">Register</a></li>
                                        <li><a href="pages-/">Register 2</a></li>
                                        <li><a href="pages-/">Lockscreen</a></li>
                                        <li><a href="pages-recover-/">Recover password</a></li>
                                    </ul>
                                </li>
                                <li><a href="pages-/">Profile page</a></li>
                                <li><a href="pages-/">Animation</a></li>
                                <li><a href="pages-fix-/">Sticky Left sidebar</a></li>
                                <li><a href="pages-fix-inner-right-/">Sticky Right sidebar</a></li>
                                <li><a href="pages-/">Invoice</a></li>
                                <li><a href="pages-/">Treeview</a></li>
                                <li><a href="pages-utility-/">Helper Classes</a></li>
                                <li><a href="pages-search-/">Search result</a></li>
                                <li><a href="pages-/">Scrollbar</a></li>
                                <li><a href="pages-/">Pricing</a></li>
                                <li><a href="pages-lightbox-/">Lighbox popup</a></li>
                                <li><a href="pages-/">Gallery</a></li>
                                <li><a href="pages-/">Faqs</a></li>
                                <li><a href="/" className="has-arrow">Error Pages</a>
                                    <ul aria-expanded="false" className="collapse">
                                        <li><a href="pages-error-/">400</a></li>
                                        <li><a href="pages-error-/">403</a></li>
                                        <li><a href="pages-error-/">404</a></li>
                                        <li><a href="pages-error-/">500</a></li>
                                        <li><a href="pages-error-/">503</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow " href="/" aria-expanded="false"><i className="mdi mdi-file-chart"></i><span className="hide-menu">Charts</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="chart-/">Morris Chart</a></li>
                                <li><a href="chart-/">Chartis Chart</a></li>
                                <li><a href="chart-/">Echarts</a></li>
                                <li><a href="chart-/">Flot Chart</a></li>
                                <li><a href="chart-/">Knob Chart</a></li>
                                <li><a href="chart-chart-/">Chartjs</a></li>
                                <li><a href="chart-/">Sparkline Chart</a></li>
                                <li><a href="chart-extra-/">Extra chart</a></li>
                                <li><a href="chart-/">Peity Charts</a></li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow " href="/" aria-expanded="false"><i className="mdi mdi-brush"></i><span className="hide-menu">Icons</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="icon-/">Material Icons</a></li>
                                <li><a href="icon-/">Fontawesome Icons</a></li>
                                <li><a href="icon-/">Themify Icons</a></li>
                                <li><a href="icon-/">Linea Icons</a></li>
                                <li><a href="icon-/">Weather Icons</a></li>
                                <li><a href="icon-simple-/">Simple Lineicons</a></li>
                                <li><a href="icon-/">Flag Icons</a></li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow " href="/" aria-expanded="false"><i className="mdi mdi-map-marker"></i><span className="hide-menu">Maps</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="map-/">Google Maps</a></li>
                                <li><a href="map-/">Vector Maps</a></li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow " href="/" aria-expanded="false"><i className="mdi mdi-arrange-send-backward"></i><span className="hide-menu">Multi level dd</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="/">item 1.1</a></li>
                                <li><a href="/">item 1.2</a></li>
                                <li>
                                    <a className="has-arrow" href="/" aria-expanded="false">Menu 1.3</a>
                                    <ul aria-expanded="false" className="collapse">
                                        <li><a href="/">item 1.3.1</a></li>
                                        <li><a href="/">item 1.3.2</a></li>
                                        <li><a href="/">item 1.3.3</a></li>
                                        <li><a href="/">item 1.3.4</a></li>
                                    </ul>
                                </li>
                                <li><a href="/">item 1.4</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                
            </div>
            
            
            <div className="sidebar-footer">
                
                <a href="" className="link" data-toggle="tooltip" title="Settings"><i className="ti-settings"></i></a>
                
                <a href="" className="link" data-toggle="tooltip" title="Email"><i className="mdi mdi-gmail"></i></a>
                
                <a href="" className="link" data-toggle="tooltip" title="Logout"><i className="mdi mdi-power"></i></a>
            </div>
            
        </aside>
    );
}

export default Sidebar;