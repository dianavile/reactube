import React from 'react';
import { Paper, TextField } from "@material-ui/core";

class SearchBar extends React.Component { 
    state = {
        searchTerm: '',
    }

    handleChange = (event) => { this.setState({searchTerm: event.target.value })}

    handleSubmit = (event) => { 
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;
        onFormSubmit(searchTerm);
        event.preventDefault();
    }

    render() { 
        return (
            <Paper elevation={6} style={{ padding: "25px" }}>
                <form display="flex" onSubmit={this.handleSubmit}>
                    <label>
                        <TextField
                        display="flex"
                        fullWidth
                        label="Search..."
                        onChange={this.handleChange}
                    />
                    </label>
                </form>
            </Paper>
        );
    }
}
    
export default SearchBar;