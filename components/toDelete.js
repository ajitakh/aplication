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
                    <div className="wrapper" >
                        <HeaderBar />

                        <NavigationMenu />

                        <div className="content-wrapper">
                            <section style={{height:1000}}>
                                {this.props.children}
                            </section>
                        </div>

                        <footer className="main-footer">
                            <div className="pull-right hidden-xs">
                                <b>Version</b> 1.0.0
                            </div>
                            <strong>Copy right (c) <a href="http://infodevelopers.com.np">Infodevelopers Pvt Lmtd (2017)</a>.</strong>
                        </footer>


                    </div>
                )
            }
        });

        module.exports= Widgets;
    }
)
