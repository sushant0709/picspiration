# Picspiration

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Contact](#contact)

---

## Introduction

**Picspiration** is a web application that allows users to:

- **Discover** images based on their interests.
- **Collect** images into personalized collections (boards).
- **Share** images with others.

This project demonstrates a full-stack application using modern web development technologies and is inspired by platforms that focus on visual discovery and curation.

---

## Features

- **User Authentication**: Registration, login, and logout functionality.
- **Image Upload and Display**: Users can upload images and view them in a feed.
- **Collections Management**: Create and manage personalized collections of images.
- **Social Interaction**: Like and comment on images, follow other users.
- **Personalized Feed**: A feed personalized based on user interests and the people they follow.

---

## Technologies Used

- **Backend**:
  - Python
  - Django REST Framework
  - PostgreSQL

- **Frontend**:
  - React.js
  - Axios
  - Material-UI (for UI components)

- **Others**:
  - JWT (JSON Web Tokens) for authentication
  - Cloudinary or AWS S3 (optional, for image storage)
  - Docker (optional, for containerization)

---
## Setup Instructions

### Prerequisites

- **Python** 3.8 or higher
- **Node.js** and **npm**
- **PostgreSQL**
- **Git** (optional, for version control)

### Backend Setup

#### 1. Clone the Repository

```bash
git clone https://github.com/sushant0709/picspiration.git
cd picspiration/backend
```


#### 2. Create a Virtual Environment

```bash
python -m venv venv
```

#### 3. Activate the Virtual Environment

- On **Windows**:

```bash
venv\Scripts\activate
```

- On **macOS/Linux**:

```bash
source venv/bin/activate
```

#### 4. Install Dependencies

```bash
pip install -r requirements.txt
```

#### 5. Configure the Database

Edit `picspiration_backend/settings.py` and update the `DATABASES` section with your PostgreSQL credentials:

```python
DATABASES = {
'default': {
'ENGINE': 'django.db.backends.postgresql',
'NAME': 'picspiration_db',
'USER': 'your_db_username',
'PASSWORD': 'your_db_password',
'HOST': 'localhost',
'PORT': '5432',
}
}
```

#### 6. Apply Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

#### 7. Create a Superuser (Optional)

```bash
python manage.py createsuperuser
```

#### 8. Run the Development Server

```bash
python manage.py runserver
```

The backend API will be running at [`http://localhost:8000/`](http://localhost:8000/).

### Frontend Setup

Open a new terminal window and navigate to the `frontend` directory:

```bash
cd ../frontend
```

#### 1. Install Dependencies

```bash
npm install
```

#### 2. Start the Development Server

```bash
npm start
```

The frontend will be running at [`http://localhost:3000/`](http://localhost:3000/).

---

## Usage

- Access the web application at [`http://localhost:3000/`](http://localhost:3000/).
- **Register** a new account or **log in** with existing credentials.
- **Upload images**, create **collections**, and explore content from other users.
- Interact with others by **liking** and **commenting** on images.
- **Follow** users to personalize your feed.

## Contact

For any inquiries or feedback, please reach out to [skhatta@ncsu.edu](mailto:skhatta@ncsu.edu).