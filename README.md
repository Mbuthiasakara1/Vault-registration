# Vault Ministry

## Overview

Vault Ministry is a digital church platform designed to streamline the management and registration of church members. The platform is tailored for administrators to manage users and attendance, offering an intuitive solution for effective church operations. 

## Key Features

### 1. Member Search
- **Search Functionality**: Admins can easily search for registered members by various fields, such as first name, last name, and group.
- **Group Allocation Display**: Search results display the member’s full name and their allocated group.

### 2. Admin Login
Authenticated administrators gain access to the following key functionalities:
  - **New Member Registration**: Admins can register new members, capturing all necessary data.
  - **View Members**: Admins can view the full list of registered members and perform searches.
  - **Attendance Reports**: Admins can generate and view attendance reports.
  - **Attendance Details**: View detailed attendance records, including the option to print reports.

### 3. Member Registration
- **Comprehensive User Data**: Administrators can input all required member details during registration.
- **Group Assignment**: Members are assigned to specific groups during the registration process.

### 4. Attendance Management
- **Attendance Reports**: Admins can view comprehensive attendance reports.
- **Attendance Details**: View individual member attendance records and print reports as needed.

## Database

The platform is powered by **PostgreSQL**, ensuring robust data handling for large member databases and attendance tracking.

## Technology Stack

- **Backend**: Python with SQLAlchemy ORM for database interaction.
- **Database**: PostgreSQL.
- **Migrations**: Alembic is used for managing database schema changes.
- **Package Management**: Pipenv is used to manage dependencies and virtual environments.

## Quick links

https://vault-reg-1.onrender.com

## Installation

### Prerequisites
Ensure you have the following installed on your machine:
- Python 3.x
- PostgreSQL
- Pipenv

### Setup Instructions
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/vault-ministry.git
    ```
2. Navigate to the project directory:
    ```bash
    cd vault-ministry
    ```
3. Set up the virtual environment and install dependencies:
    ```bash
    pipenv install
    ```
4. Activate the virtual environment:
    ```bash
    pipenv shell
    ```
5. Configure the PostgreSQL database and update the `.env` file with your database credentials:
    ```env
    DATABASE_URL=postgresql://username:password@localhost/vaultministry
    ```

6. Apply database migrations:
    ```bash
    alembic upgrade head
    ```

7. Run the application:
    ```bash
    python run.py
    ```

## Project Dependencies
Below are the key dependencies used in this project:
- **SQLAlchemy**: For ORM-based database interaction.
- **Alembic**: For database migrations.
- **Pipenv**: For dependency and virtual environment management.

For the complete list of dependencies, refer to the `Pipfile` in the project directory.

## Contributing
We welcome contributions from the community! Please ensure to follow the guidelines below:
1. Fork the repository.
2. Create a new branch for your feature.
3. Make the necessary changes and commit them.
4. Submit a pull request.

## License
Vault Ministry is licensed under the MIT License. See the `LICENSE` file for more details.

## [Project Pitch](https://gamma.app/docs/jdd79zoib1qhezj)
