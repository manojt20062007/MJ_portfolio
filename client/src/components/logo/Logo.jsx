import { Stack, Box } from '../../mui/muiComponents';
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <Stack
      component={NavLink}
      to="/"
      direction="row"
      alignItems="center"
      sx={{ textDecoration: 'none' }}
    >
      <Box
        component="img"
        src="/logo.png"
        alt="Portfolio Logo"
        sx={{
          height: 100,
          width: 'auto',
          maxWidth: 140,
          objectFit: 'contain',
          userSelect: 'none',
          display: 'block',
        }}
      />
    </Stack>
  );
}

export default Logo