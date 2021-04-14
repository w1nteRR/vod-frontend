import { FC } from "react"
import { Box, Button, Typography } from "@material-ui/core"
import { useAuth0 } from "@auth0/auth0-react"
import { indigo } from '@material-ui/core/colors'
import Icon from '@mdi/react'
import { mdiFacebook, mdiGoogle } from '@mdi/js'

export const SocialView: FC = () => {

  const { loginWithRedirect } = useAuth0()


  return (
    <Box display='flex' flexDirection='column' justifyContent='space-between' height={140}>
      <Button 
        onClick={() => loginWithRedirect({
          connection: 'google-oauth2'
        })
      }
        startIcon={<Icon path={mdiGoogle} {...icon} />}
        style={{
          ...button, 
          backgroundColor: indigo['A700']
        }}
      >
        <Typography variant='button'>Sign in with Google</Typography>
      </Button>
      <Button 
        startIcon={<Icon path={mdiFacebook} {...icon}/>}
        style={{
          ...button, 
          backgroundColor: indigo[800]
        }}
      >
        <Typography variant='button'>Sign in with Facebook</Typography>
      </Button>
    </Box>
  )
}

const button = {
  margin: '0 20px',
  padding: '13px',
  width: '100%'
}

const icon = {
  size: .7,
  color: '#fff'
}