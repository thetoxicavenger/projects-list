import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

class Project extends React.Component {
    state = {
        showDescription: false
    }
    handleClick = e => {
        this.setState(prevState => {
            return {
                showDescription: !prevState.showDescription
            }
        })
    }
    render() {
        const { project, classes } = this.props
        const { title, thumbnail, company, description, skillset } = project
        return (
            <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={thumbnail || "https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400006/100130939-error-404-page-not-found-error-with-glitch-effect-on-screen-vector-illustration-for-your-design-.jpg"}
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography component="p">
                    Company: <b>{company}</b>
                </Typography>
                <Typography component="p">
                    Skillset: <b>{skillset.toUpperCase()}</b>
                </Typography>
                {this.state.showDescription &&
                    <Typography component="p">
                        <b>Description: </b>{description}
                    </Typography>
                }
            </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={this.handleClick}>
                    {!this.state.showDescription ? 'Show' : 'Hide'} Description
                </Button>
            </CardActions>
            </Card>
        );
    }
}

Project.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Project);