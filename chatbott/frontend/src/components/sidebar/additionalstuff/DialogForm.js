import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CameraEnhanceOutlinedIcon from '@material-ui/icons/CameraEnhanceOutlined';
import styled from 'styled-components';
export default function DialogForm({openReport, setOpenReport}) {
 

  const handleCloseReport = () => {
    setOpenReport(false);
  };

  return (
    <div>
      <Dialog open={openReport} onClose={handleCloseReport} aria-labelledby="form-dialog-title">
        <DialogContent>
          <DialogContentText>
            To report something inside this chabot, please express here. We will send updates on your report
            occasionally.
          </DialogContentText>
          <div style={{display: 'flex' , position:'relative'}}>
          <CameraEnhanceOutlinedIconStyled style={{position: 'absolute', right: 0, top: 25, width: 25, height: 25}}/>
          <TextField
            autoFocus
            margin="dense"
            id="report"
            label="Report field"
            type="text"
            fullWidth
            />
            
            </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseReport} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


const CameraEnhanceOutlinedIconStyled = styled(CameraEnhanceOutlinedIcon)`
    z-index: 1;
    color:grey;
    :hover{
        color:blue;
        cursor:pointer;
    }
`