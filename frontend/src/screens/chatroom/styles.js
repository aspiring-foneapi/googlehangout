import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    margin: 10,
  },
  input: {
    width: '100%',
    margin: 10,
  },
  iconButton: {
    padding: 10,
  },
  card: {
    backgroundColor: '#eee',
  },
  sender: {
    backgroundColor: 'Highlight',
    textAlign: 'right',
    float: 'right',
    clear: 'both',
  },
  reciever: { textAlign: 'left', float: 'left' },
  text: { margin: '0 10px' },
  myMessage: {
    padding: 15,
    margin: '5px 0',
    width: '60%',
    float: 'right',
    clear: 'both',
    backgroundColor: theme.palette.primary.light,
  },
  userMessage: {
    padding: 5,
    margin: '5px 0',
    textAlign: 'left',
    float: 'left',
    clear: 'both',
    width: '60%',
    backgroundColor: theme.palette.success.light,
  },
  show: {
    display: 'block',
  },
  hidden: {
    display: 'none',
  },
  rootBottomNav: {
    width: '100%',
    backgroundColor: 'transparent',
  },
  endCall: {
    color: 'red',
  },
  muted: { color: 'blue' },
  unmuted: { color: 'rgba(10,101,110,0.8)' },
}))
