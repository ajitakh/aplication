const styleeee={backgroundColor:'#6d1e10',height:'1200'}
const textColorHere={color:'#ffffff'}
import {Link} from "react-router";
define(
    [
        'react',
        'jquery',
    ],
    function (React, $) {
        var NavigationMenu = React.createClass({
            render: function () {
                return (
                    <aside className=" content main-sidebar" style={styleeee}>
                        {/* sidebar: style can be found in sidebar.less */}
                        <section className="sidebar" style={{height:'auto'}} >
                            {/* Sidebar user panel */}
                            <div className="user-panel">
                                <div className="pull-left image">

                                </div>
                                <div className="pull-left info">


                                </div>
                            </div>
                            {/* search form */}
                            {/*    <form action="#" method="get" className="sidebar-form">
                             <div className="input-group">
                             <input type="text" name="q" className="form-control" placeholder="Search..." />
                             <span className="input-group-btn">
                             <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i></button>
                             </span>
                             </div>
                             </form>*/}
                            {/* /.search form */}
                            {/* sidebar menu: : style can be found in sidebar.less */}
                            <ul className="sidebar-menu">
                                <li className="header"></li>
                                {/*       <li className="active treeview">
                                 <Link to="dashboard">
                                 <i className="fa fa-dashboard"></i>
                                 <span style={textColorHere}>
                                 <strong>Dashboard</strong>
                                 </span>

                                 </Link>

                                 </li>*/}
                                <li className="treeview">
                                    <Link to= "Outage">
                                        <i className="fa fa-feed"></i>
                                        <span style={textColorHere} ><strong>Power Outage</strong></span>
                                    </Link>
                                </li>
                                <li className="treeview">
                                    <Link to ="service">
                                        <i className="fa fa-feed"></i>
                                        <span style={textColorHere} ><strong>New Service Connection</strong></span>
                                    </Link>
                                </li>
                                <li className="treeview">
                                    <Link to =  "calculator">
                                        <i className="fa fa-area-chart"></i>
                                        <span style={textColorHere}><strong>Energy Calculator</strong></span>
                                    </Link>
                                </li>
                                <li className="treeview">
                                    <Link to="overview">
                                        <i className="fa fa-table"></i>
                                        <span style={textColorHere}><strong>About Us</strong></span>
                                    </Link>
                                </li>
                                <li className="treeview">
                                    <Link to="Overview">
                                        <i className="fa fa-table"></i>
                                        <span style={textColorHere}><strong>News</strong></span>

                                    </Link>
                                </li>








                            </ul>
                        </section>
                        {/* /.sidebar */}
                    </aside>
                )
            }
        });

        return NavigationMenu
    }
)