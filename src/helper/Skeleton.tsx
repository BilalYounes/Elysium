import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import './Skeleton.scss'
const Sekeltone = () => {
    return (
      <Box sx={{  width: 200,
        height: 330, pt: 2 }}>
        <Skeleton variant="rectangular" width={300} height={350} />
        <Skeleton width="80%" />
        <Skeleton width="60%" />
      </Box>
    );
  };

export default Sekeltone