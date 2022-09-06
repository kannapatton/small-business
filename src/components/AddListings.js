import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle,
  } from "@mui/material";
  import React, { Component, Fragment } from "react";
  
  class AddListings extends Component {
    state = {
      open: false,
      name: "",
      description: "",
      address: "",
      hours: "",
    };
  
    toggleDialog = () => this.setState({ open: !this.state.open });
  
    handleTextChange = (e) => {
      const newState = { ...this.state };
      newState[e.target.id] = e.target.value;
      this.setState(newState);
    };
  
    handleSubmit = (e) => {
      e.preventDefault();
      const payload = { ...this.state };
      payload.id = this.props.businessTotal + 1;
      delete payload.open;
      this.props.addListings(payload);
      this.setState({ open: false });
    };
  
    componentDidUpdate = (prevProps, prevState) => {
      if (prevState.open !== this.state.open) {
        this.setState({
          name: "",
          description: "",
          address: "",
          hours: "",
        });
      }
    };
  
    render() {
      return (
        <Fragment>
          <div style={{ textAlign: "center" }}>
            <h1>New Restaurants</h1>
            <Button
              variant="contained"
              className="add-business"
              onClick={this.toggleDialog}
            >
              Add
            </Button>
          </div>
          <div>
            <Dialog open={this.state.open} onClose={this.toggleDialog}>
              <DialogTitle>Add a Restaurant?</DialogTitle>
              <DialogContent>
                <form
                  onSubmit={this.handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "300px",
                  }}
                >
                  <TextField
                    id="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleTextChange}
                    required
                  />
                  <TextField
                    id="description"
                    placeholder="Description"
                    value={this.state.description}
                    onChange={this.handleTextChange}
                    required
                  />
                  <TextField
                    id="address"
                    placeholder="Address"
                    value={this.state.address}
                    onChange={this.handleTextChange}
                    required
                  />
                  <TextField
                    id="hours"
                    placeholder="Hours"
                    value={this.state.hours}
                    onChange={this.handleTextChange}
                    required
                  />
                  <br />
                  <Button variant="contained" color="primary" type="submit">
                    Submit
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </Fragment>
      );
    }
  }
  export default AddListings;