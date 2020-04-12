import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Link from '@material-ui/core/Link';
import Title from './Title';

function createData(id, description, keys) {
    return { id, description, keys };
  }

const rows = [
    createData('CollProcesaRmca','Procesa los tramites de la Bapi', ['Rmca','Bapi'])
];

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

export default function Services() {
    return (
        <React.Fragment>
            <Title>Services</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Keys</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((dato) => (
                        <TableRow key={dato.id}>
                            <TableCell>
                                <Link color="primary" href="#" onClick={preventDefault}>
                                    {dato.id}
                                </Link>
                            </TableCell>
                            <TableCell>{dato.description}</TableCell>
                            <TableCell>{dato.keys}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
}
