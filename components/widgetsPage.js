define(
    [
        'react',
        'react-dom',
        'jquery',
        './widgets.src'
    ],
    function (React, ReactDOM, $, reactjsAdminlte) {
        var HeaderBar = reactjsAdminlte.HeaderBar;
        var NavigationMenu = reactjsAdminlte.NavigationMenu;
        var Widgets = React.createClass({



          render: function() {

              return (
                    <div className="container-fluid" >
                        {this.props.children}
                  {/*      <div className="row">
                            <HeaderBar/>

                        </div>
                        <div className="row" style={{height:'700'}} >
                            <NavigationMenu />
                            <div className="content-wrapper">
                                {this.props.children}
                            </div>
                        </div>*/}
                      {/*  <div className="row">
                            <footer id="footer"  className="main-footer">
                                <div className="pull-right hidden-xs">
                                    <b>Version</b> 1.0.0
                                </div>
                                <strong>Copy right (c) <a href="http://infodevelopers.com.np">Infodevelopers Pvt Lmtd (2017)</a>.</strong>
                            </footer>
                        </div>*/}





                    </div>
                )
            }
        });

        module.exports= Widgets;
    }
)
