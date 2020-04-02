import React, {Component} from 'react';
import { connect } from 'react-redux';



class Dashboard extends Component {
    state = {
        // newPet: {
           owner: '',
            pet: '',
            breed: '',
            color: '',
            checkIn: '',
    
        // }
}

    handleNameChange = (event, type) => {
        console.log('event happended')
        this.setState({
          
                ...this.state,
                [type]: event.target.value,
        
        });
    }

    getPets = () => {

        this.props.dispatch({
            type: 'FETCH_PETS'
        });

    }

    // componentDidMount() {
    //     this.getPets();
    // }

    addNewPet = event => {
        event.preventDefault();
        this.props.dispatch({
            type: 'POST_PET',
            payload: this.state
        })
        this.setState({
            // newPet: {
                owner: '',
                pet: '',
                breed: '',
                color: '',
                checkIn: '',
            // }
        });
    }

    render() {
        return (
            <div>
                <h3>This is the form</h3>
                <pre>{JSON.stringify(this.props.reduxState.petList)}</pre>
                <form onSubmit={this.addNewPet}>
                    <input type='text' placeholder="Owner" value={this.state.owner} onChange={(event) => this.handleNameChange(event, 'owner')} />
                    <input type='text' placeholder="Pet" value={this.state.pet} onChange={(event) => this.handleNameChange(event, 'pet')} />
                    <input type='text' placeholder="Breed" value={this.state.breed} onChange={(event) => this.handleNameChange(event, 'breed')} />
                    <input type='text' placeholder="Color" value={this.state.color} onChange={(event) => this.handleNameChange(event, 'color')} />
                    <input type='text' placeholder="Checked In" value={this.state.checkIn} onChange={(event) => this.handleNameChange(event, 'checkIn')} />
                    <input type='submit' value='Add New Pet' />
                </form>
                <table>
                <thead><tr><th>Owner</th><th>Pet</th><th>Breed</th><th>Color</th><th>Checked In</th></tr></thead>
                <tbody>
                    
                    {this.props.reduxState &&
                            this.props.reduxState.petList.map(pet => (<tr><td>{pet.owner}</td><td>{pet.pet}</td>
                            <td>{pet.breed}</td><td>{pet.color}</td><td>{pet.checkIn}</td></tr>))} 
                </tbody >
                </table>
            </div>
        );
    }
}

{/* <thead>
                    <tr>
                        <th>Airlines</th>
                        <th>Number of Planes</th>
                    </tr>
                </thead> */}
//   <tbody>
//         { this.props.reduxState.firstReducer.map(carrier => (<tr><td>{carrier.airline}</td><td>{carrier.numPlanes}</td></tr>)) }
//         </tbody >

// <button onClick={(event) => this.deletePet > Delete</ button>
//     <button onClick={(event) => this.handleNameChange(event, 'subfamily')}>Check In</button>


const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Dashboard);