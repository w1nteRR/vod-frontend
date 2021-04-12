import { FC } from "react"
import { Container, Box, Typography } from "@material-ui/core"

export const Profile: FC = () => {
  return (
    <Container>
      <Box marginTop={10}>
        <Typography variant='h6'>Profile page</Typography>
      </Box>
    </Container>
  )
}