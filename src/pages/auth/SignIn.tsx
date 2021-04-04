import { FC } from "react"
import { Container, Typography } from "@material-ui/core"

import { useAuthStyles } from '../../components/auth/auth.styles'
import { SignInForm } from "../../components/auth/forms/signin.form"

export const SignIn: FC = () => {

  const styles = useAuthStyles() 

  return (
    <Container maxWidth='sm'>
      <Typography className={styles.title} variant='h6'>Sign In</Typography>
      <SignInForm />
      <Typography className={styles.title} variant='h6'>Or continue with</Typography>
    </Container>
  )
}