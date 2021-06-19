import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import ToDoCreationModal from './form/ToDoCreationModal';
import { TCV_API_URL } from '../constants';

class StudentProgressTable extends Component {

    state = {
        title: ""
    }

    deleteItem = id => {
        let confirmDeletion = window.confirm('Do you really wish to delete it?');
        if (confirmDeletion) {
            fetch(`${TCV_API_URL}/${id}`, {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    this.props.deleteItemFromState(id);
                })
                .catch(err => console.log(err));
        }
    }

    render() {
        const items = this.props.items;
        return <Table striped>
            <thead>
                <tr>
                    <th colSpan="2">Overview Of Students' Progress</th>

                </tr>
                <tr>
                    <th>StudentID</th>
                    <th>LastName</th>
                    <th>FirstMidName</th>
                    <th>TimeSpent (Min)</th>
                    <th>IterationsSpent</th>
                </tr>
            </thead>
            <tbody>
                {!items || items.length <= 0 ?
                    <tr>
                        <td colSpan="6" align="center"><b>Nothing to do yet</b></td>
                    </tr>
                    : items.map(item => (
                        <tr key={item.id}>
                            <td>
                                {item.id}
                            </td>
                            <td>
                                {item.lastName}
                            </td>
                            <td>
                                {item.firstMidName}
                            </td>
                            <td>
                                1000.00
                            </td>
                            <td>
                                40
                            </td>
                            <td align="center">
                                <div>
                                    <ToDoCreationModal
                                        isNew={false}
                                        student={item}
                                        updateToDoIntoState={this.props.updateState} />
                  &nbsp;&nbsp;&nbsp;
                  <Button color="danger" onClick={() => this.deleteItem(item.id)}>X</Button>
                                </div>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </Table>;
    }
}
export default StudentProgressTable;