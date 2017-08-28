const stylee={backgroundColor: '#9e2f1c',height:50}
const styleee={backgroundColor: '#6d1e10'}
const logoColor={color:'#ffffff'}
import {Link} from "react-router";
import Buttons from './loginButton.js';
define(
    [
        'react',
        'jquery',
        './header-messages/header-messages',
        './header-notifications/header-notifications',
        './header-tasks/header-tasks'
    ],
    function (React, $, HeaderMessages, HeaderNotifications, HeaderTasks) {
        var HeaderBar = React.createClass({
            pushMenu(){
                var body = document.body;
                if(body.clientWidth > 768){
                    if(body.className.indexOf('sidebar-collapse') === -1){
                        body.className += ' sidebar-collapse';
                    }else {
                        body.className = body.className.replace(' sidebar-collapse', '');
                    }
                }else{
                    if (body.className.indexOf('sidebar-open') === -1) {
                        body.className += ' sidebar-open';
                    }else{
                        body.className = body.className.replace(' sidebar-open','');
                    }
                }
            },
            render: function () {
                var that = this;

                return (
                    <header className="main-header">
                        {/* Logo */}
                       <a className="logo" style={styleee} onClick={that.pushMenu}>
                            {/* mini logo for sidebar mini 50x50 pixels */}
                            <span className="logo-mini"><b>W</b>TH</span>
                            {/* logo for regular state and mobile devices */}
                            <span className="logo-lg"  style={logoColor}><b>NEA Escorts</b></span>
                        </a>

                        {/* Header Navbar: style can be found in header.less */}
                        <nav className="navbar navbar-static-top" role="navigation" style={stylee}>
                            {/* Sidebar toggle button*/}
                            <a style={logoColor} className="sidebar-toggle" data-toggle="offcanvas" role="button" onClick={that.pushMenu}>
                                <span className="sr-only">Toggle navigation</span>
                            </a>
                            {this.props.children}
                            <div className="pull-right" style={{marginRight:3,marginTop:7}}>


                            </div>


                        </nav>
                    </header>
                )
            }
        });

         return HeaderBar;
    }
)
