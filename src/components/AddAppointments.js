import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';

class AddAppointments extends Component {
    constructor() {
        super();
        this.state = {
            heroName: '',
            ownerName: '',
            aptDate: '',
            aptTime: '',
            aptNotes: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);

    }

    handleAdd(e) {
        e.preventDefault();
        let tempAppointments = {
            heroName: this.state.heroName,
            ownerName: this.state.ownerName,
            aptDate: this.state.aptDate + ' ' + this.state.aptTime,
            aptNotes: this.state.aptNotes
        };

        this.props.addAppointment(tempAppointments);

        this.setState({
            heroName: '',
            ownerName: '',
            aptDate: '',
            aptTime: '',
            aptNotes: ''
        });
        this.props.toggleForm();
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div
            className={
                'card textcenter mt-3 ' +
                (this.props.formDisplay ? '' : 'add-appointment')
            }
            >
                <div 
                className="apt-addheading card-header bg-primary text-white"
                onClick={this.props.toggleForm}
                >
                    <FaPlus/> Add Appointment
                </div>

                <div className="card-body">
                    <form id="aptForm" noValidate onSubmit={this.handleAdd}>
                        <div className="form-group from-row">
                            <label
                            className="col-md-2 col-form-label text-md-right"
                            htmlFor="heroName"
                            readOnly>
                                Hero Name
                            </label>
                            <div className="col-md-10">
                                <input 
                                type="text"
                                className="form-control"
                                name="heroName"
                                placeholder="Hero's Name"
                                value={this.state.heroName}
                                onChange={this.handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group form-row">
                            <label
                            className="col-md-2 col-form-label text-md-right"
                            htmlFor="ownerName"
                            >
                                Hero Owner
                            </label>
                            <div className="col-md-10">
                                <input
                                type="text"
                                className="form-control"
                                name="ownerName"
                                placeholder="Owner's Name"
                                value={this.state.ownerName}
                                onChange={this.handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group form-row">
                            <label
                            className="col-md-2 col-form-label text-md-right"
                            htmlFor="aptDate"
                            >
                                Date
                            </label>
                            <div className="col-md-4">
                                <input
                                type="date"
                                className="form-control"
                                name="aptDate"
                                id="aptDate"
                                value={this.state.aptDate}
                                onChange={this.handleChange}
                                />
                            </div>
                            <label className="col-md-2 col-form-label text-md-right"
                            htmlFor="aptTime"
                            >
                                Time
                            </label>
                            <div className="col-md-4">
                                <input
                                type="time"
                                className="form-control"
                                name="aptTime"
                                id="aptTime"
                                value={this.state.aptTime}
                                onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        
                        <div className="form-group form-row">
                            <label className="col-md-2 text-md-right" htmlFor="aptNotes">
                                Appointment Notes
                            </label>
                            <div className="col-md-10">
                                <textarea
                                className="form-control"
                                rows="4"
                                cols="50"
                                name="aptNotes"
                                id="aptNotes"
                                placeholder="Appointment Notes"
                                value={this.state.aptNotes}
                                onChange={this.handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group form-row-md-0">
                            <div className="offset-md-2 col-md-10">
                                <button
                                type="submit"
                                className="btn btn-primary d-block ml-auto"
                                >
                                    Add Appointment
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddAppointments;