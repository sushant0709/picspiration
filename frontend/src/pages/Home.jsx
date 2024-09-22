import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import axios from 'axios';
import ImageCard from '../components/ImageCard';

function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/images/');
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Discover Inspirational Images
      </Typography>
      <Grid container spacing={3}>
        {images.map((image) => (
          <Grid item xs={12} sm={6} md={4} key={image.id}>
            <ImageCard image={image} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;