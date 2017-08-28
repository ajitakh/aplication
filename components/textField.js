import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

export default class IndicatorChooser extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className="col-md-5">
                <div>

                    <Table style="width:20">
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn><b>Power Supply Update</b>
                                </TableHeaderColumn>

                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableRowColumn>3 days ago <br/>
                                    Power is back safely to all parts of Jorpati and sankhu, sorry for the problems today.
                                </TableRowColumn>

                            </TableRow>
                            <TableRow><TableRowColumn>
                            2 hours ago  <br/>
                            If you rely on continuous power for medical equipment, have a back-up plan to stay safe when supply is interrupted.
                            </TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>





                </div>

            </div>
        )
    }
}