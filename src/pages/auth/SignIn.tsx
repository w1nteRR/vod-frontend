import { FC } from "react"
import { Box, Container, Typography } from "@material-ui/core"

import { useAuthStyles } from '../../components/auth/auth.styles'
import { SignInForm } from "../../components/auth/forms/signin.form"

export const SignIn: FC = () => {

  const styles = useAuthStyles() 

  return (
    <Container maxWidth='sm' style={{ height: '80vh' }}>
      <Box p={3}>
        <Typography variant='h6'>Sign In</Typography>
      </Box>
      <SignInForm />
    </Container>
  )
}