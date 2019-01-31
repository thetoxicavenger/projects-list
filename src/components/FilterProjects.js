import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class FilterProjects extends React.Component {
  handleChange = e => {
    this.props.setFilter(e.target.value)
  }
  render() {
    const { classes, filter } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-name"
          value={filter}
          onChange={this.handleChange}
          label="Name"
          className={classes.textField}
          margin="normal"
        />
      </form>
    );
  }
}

FilterProjects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilterProjects);