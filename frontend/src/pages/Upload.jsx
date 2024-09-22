import React, { useState } from 'react';
import { Container, TextField, Button, Typography, makeStyles } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      maxWidth: 300,
    },
  },
}));

function Upload() {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:8000/api/images/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        },
      });
      console.log('Image uploaded successfully:', response.data);
      // Redirect to home page or show success message
    } catch (error) {
      console.error('Upload error:', error);
      // Handle upload error (e.g., show error message)
    }
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Upload Image
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          label="Title"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <TextField
          label="Description"
          variant="outlined"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          accept="image/*"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Upload
        </Button>
      </form>
    </Container>
  );
}

export default Upload;