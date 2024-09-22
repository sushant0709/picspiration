import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, makeStyles } from '@material-ui/core';
import axios from 'axios';
import ImageCard from '../components/ImageCard';

const useStyles = makeStyles((theme) => ({
  profileInfo: {
    marginBottom: theme.spacing(4),
  },
}));

function Profile() {
  const classes = useStyles();
  const [user, setUser] = useState(null);
  const [userImages, setUserImages] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await axios.get('http://localhost:8000/api/users/profile/', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          },
        });
        setUser(userResponse.data);

        const imagesResponse = await axios.get('http://localhost:8000/api/images/', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          },
        });
        setUserImages(imagesResponse.data.filter(image => image.user.id === userResponse.data.id));
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  if (!user) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container>
      <div className={classes.profileInfo}>
        <Typography variant="h4" component="h1" gutterBottom>
          {user.username}'s Profile
        </Typography>
        <Typography variant="body1" gutterBottom>
          Email: {user.email}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Bio: {user.bio || 'No bio available'}
        </Typography>
      </div>
      <Typography variant="h5" component="h2" gutterBottom>
        Your Images
      </Typography>
      <Grid container spacing={3}>
        {userImages.map((image) => (
          <Grid item xs={12} sm={6} md={4} key={image.id}>
            <ImageCard image={image} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Profile;