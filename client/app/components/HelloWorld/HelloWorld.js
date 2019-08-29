import React, { Component } from 'react';
import 'whatwg-fetch';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { sizing } from '@material-ui/system';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
   
  },
  button: {
    padding: theme.spacing(2),    
    textAlign: 'center',
    direction: 'row',
    alignContent:'center'

    // color: theme.palette.text.secondary,
  }
}));


const RenderGitHubNames  = (props) => { 
  // const classes = useStyles(); 
  const classes = useStyles();
  const GitHubNames =  props.repos.map((repo) =>   

    <Grid container spacing={3}>   
      <Grid item xs>
        <Box ml={8}  bgcolor="primary.main" color="primary.contrastText"  className={classes.button}>
          {repo.name}
        </Box>
      </Grid> 
      <Grid item xs>       
      <Box color="white" bgcolor="error.main"  className={classes.button}>
      {repo.owner.login} 
     
        </Box>
      </Grid>  
      <Grid item xs>       
      <Box mr={8} color="white" bgcolor="palevioletred"  className={classes.button}>
      {repo.default_branch} 
     
        </Box>
      </Grid> 

     </Grid>


);

  return ( <div className={classes.root}>
    <Grid container spacing={3}>   
      <Grid item xs>
        <Box ml={8}>
          Repositories Names
        </Box>
      </Grid> 
      <Grid item xs>
      <Box>
         Owner 
        </Box>   
      </Grid>  
      <Grid item xs>
      <Box mr={8}>
         Default Branch 
        </Box>   
      </Grid>

      {/* default_branch */}
     </Grid>
    {GitHubNames} 
</div>
  );
}

class HelloWorld extends Component {
 
  constructor(props) {
    super(props);

    this.state = {
      gitrepos: []
    };   
  }


  componentDidMount() {
    fetch('/user/getUserrepos')
      .then(res => res.json())
      .then(json => {
        this.setState({
          gitrepos:json
        });
      });
  }

  render() {    
    return (  
          
          <RenderGitHubNames repos = {this.state.gitrepos}/>
      
       
   
    );
  }
}

export default HelloWorld;

