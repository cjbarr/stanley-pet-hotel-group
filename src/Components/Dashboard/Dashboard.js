import React, {
    Component
} from 'react';



class Dashboard extends Component {
    state = {
        newPet: {
            owner: '',
            pet: '',
            breed: '',
            color: '',
            checkIn: '',
        }
    }

    handleNameChange = (event, type) => {
        console.log('event happended')
        this.setState({
            newPet: {
                ...this.state.newPet,
                [type]: event.target.value,
            }
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
            payload: this.state.newPet
        })
        this.setState({
            newPet: {
                owner: '',
                pet: '',
                breed: '',
                color: '',
                checkIn: '',
            }
        });
    }

    render() {
        return (
            <div>
                <h3>This is the form</h3>
                <pre>{JSON.stringify(this.state)}</pre>
                <form onSubmit={this.addNewPet}>
                    <input type='text' placeholder="Owner" value={this.state.newPet.owner} onChange={(event) => this.handleNameChange(event, 'owner')} />
                    <input type='text' placeholder="Pet" value={this.state.newPet.pet} onChange={(event) => this.handleNameChange(event, 'pet')} />
                    <input type='text' placeholder="Breed" value={this.state.newPet.breed} onChange={(event) => this.handleNameChange(event, 'breed')} />
                    <input type='text' placeholder="Color" value={this.state.newPet.color} onChange={(event) => this.handleNameChange(event, 'color')} />
                    <input type='text' placeholder="Checked In" value={this.state.newPet.checkIn} onChange={(event) => this.handleNameChange(event, 'checkIn')} />
                    <input type='submit' value='Add New Pet' />
                </form>
            </div>
        );
    }
}


// <button onClick={(event) => this.deletePet > Delete</ button>
//     <button onClick={(event) => this.handleNameChange(event, 'subfamily')}>Check In</button>

export default Dashboard;