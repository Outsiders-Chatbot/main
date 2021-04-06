import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'
import FormUser from './FormUser';
import Rating from '@material-ui/lab/Rating';
import LanguageIcon from '@material-ui/icons/Language';
import PublishIcon from '@material-ui/icons/Publish';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
function CourseDialog({setOpen  , open}) {
    
    const styles = (theme) => ({
        root: {
          margin: 0,
          padding: theme.spacing(2),
        },
        closeButton: {
          position: 'absolute',
          right: theme.spacing(1),
          top: theme.spacing(1),
          color: theme.palette.grey[500],
        },
      });
      
      const DialogTitle = withStyles(styles)((props) => {
        const { children, classes, onClose, ...other } = props;
        return (
          <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
              <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                <CloseIcon />
              </IconButton>
            ) : null}
          </MuiDialogTitle>
        );
      });
      
      const DialogContent = withStyles((theme) => ({
        root: {
          padding: theme.spacing(2),
        },
      }))(MuiDialogContent);
      
      const DialogActions = withStyles((theme) => ({
        root: {
          margin: 0,
          padding: theme.spacing(1),
        },
      }))(MuiDialogActions);
      
     
        const handleClose = () => {
          setOpen(false);
        };

    return (
        <div>
         
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Course title
        </DialogTitle>
        <DialogContent dividers>
          <Container>
           
            <h1>Course titletitletitletit</h1>
            <h6>lorem lorem lorem lorem lorem lorem orem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </h6>
            <Ratingdiv>
            <div className="rakah" style={{fontWeight:"bold"}}>3</div> <div><Rating value={3.2}/></div> 
              </Ratingdiv> 
            <div>Created by <span style={{color:"#00CED1" ,textDecoration: "underline",marginTop:"10px"}}> author name</span></div>
            <div style={{display:'flex' , justifyContent:"space-between" , width:"100px",marginTop:"10px"}}>
              <LanguageIcon style={{ marginRight:"5px"}}/> Language <PublishIcon style={{ marginLeft:"10px", marginRight:"5px"}}/> 12/12/2020 <AccessTimeIcon style={{ marginLeft:"10px" , marginRight:"5px"}}/> 8h30min </div>
           <div style={{marginTop:"10px"}}> <strong>Requirements :</strong> requirements of our app  </div>
          </Container>
  
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}

export default CourseDialog

const Container = styled.div`
width:550px;

`
const Ratingdiv =styled.div`
display : flex ; 
align-items : baseline;
.MuiRating-label{
  padding : 0;
}
.rakah {
  height:100%;
  font-size : 27px;
  margin-right : 9px;
  color : gold;
}

`