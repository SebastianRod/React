import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PuzzleIcon from '@material-ui/icons/Extension';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

export default class MainListItems extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            selected : false
        }
    }

    onClickEvent = () => {
        this.setState({
            selected : !this.state.selected
        })
    }

    render() {
        return (
            <div>
                <ListItem 
                    button
                    onClick={this.onClickEvent}
                    selected={this.state.selected}
                >
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem 
                    button
                    onClick={this.onClickEvent}
                    selected={this.state.selected}
                >
                <ListItemIcon>
                    <LayersIcon />
                </ListItemIcon>
                <ListItemText primary="Services" />
                </ListItem>
                <ListItem button>
                <ListItemIcon>
                    <PuzzleIcon />
                </ListItemIcon>
                <ListItemText primary="Atomics" />
                </ListItem>
                <ListItem button>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Constants" />
                </ListItem>
                <ListItem button>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Executions" />
                </ListItem>
            </div>
        );
    }
}

