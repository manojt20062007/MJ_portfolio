import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const CarouselCard = ({ item }) => {
    return (
        <Box
            component={Link}
            to={item.link}
            sx={{
                width: { xs: '260px', sm: '360px', md: '460px' },
                height: 'auto',
                borderRadius: '12px',
                overflow: 'hidden',
                position: 'absolute',
                transformStyle: 'preserve-3d',
                boxShadow: '0 15px 35px rgba(0,0,0,0.7)',
                display: 'block',
            }}
        >
            <Box
                component="img"
                src={item.image}
                alt={item.title}
                title={item.title}
                sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                }}
            />
        </Box>
    );
};

export default CarouselCard;
