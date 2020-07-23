import React, { Component } from 'react';
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

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});


class Services extends Component {
    state = {orchServices: []}
  
    componentDidMount() {
        fetch('/api/services/getAll')
        .then(res => res.json())
        .then(response => {
            if (response.response === 'OK') {
                this.setState({ orchServices: response.documents })
            } else {
                // TODO pintar el error
            }
            
        });
    }
  
    render() {
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
                    {this.state.orchServices.map((dato) => (
                        <TableRow key={dato._id}>
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
  }

export default Services;
