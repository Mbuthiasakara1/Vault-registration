import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';

function AdminDashboard() {
  const [members, setMembers] = useState([]);
  const [totalMembers, setTotalMembers] = useState(0);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Use useNavigate for redirecting

  useEffect(() => {
    const displayMembers = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5555/homemembers");
        if (!response.ok) {
          throw new Error('Failed to fetch members');
        }
        const data = await response.json();
        setMembers(data);
        setTotalMembers(data.length);
      } catch (error) {
        setError(error);
      }
    };
    displayMembers();
  }, []);

  const handleLogout = () => {
    // Clear tokens or any user session data
    localStorage.removeItem('userToken'); // Adjust this based on how you store your user session
    // Redirect to login page or any other route
    navigate('/'); // Ensure you have a login route
    console.log("User logged out"); // Optional logging
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to right, #1D4ED8, #D946EF)',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <header style={{
        backgroundColor: '#1E3A8A',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '1.5rem',
        color: 'white',
        position: 'relative',
      }}>
        <h1 style={{
          fontSize: '1.875rem',
          fontWeight: 'bold',
          letterSpacing: '0.025em',
        }}>Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            backgroundColor: '#FF4757',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FF6B81'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF4757'}
        >
          Logout
        </button>
      </header>

      <main style={{ flexGrow: 1, padding: '2.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)', // Adjusted to 2 columns
            gap: '2rem',
            marginBottom: '2.5rem',
          }}>
            {[
              { title: 'Total Members', value: totalMembers ? totalMembers : 'Loading...' },
              { title: 'Total Groups', value: '8' },
            ].map((stat, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                padding: '1.5rem',
                boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)',
                borderRadius: '0.5rem',
                transform: 'scale(1)',
                transition: 'transform 0.5s',
                cursor: 'pointer',
                ':hover': { transform: 'scale(1.05)' }
              }}>
                <h2 style={{ fontSize: '1rem', fontWeight: '600', color: '#4B5563' }}>{stat.title}</h2>
                <p style={{
                  fontSize: '3rem',
                  fontWeight: 'bold',
                  color: '#111827',
                }}>{stat.value}</p>
              </div>
            ))}
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1.5rem',
          }}>
            {[
              { to: '/register-member', label: 'Register New Member', color: '#16A34A' },
              { to: '/view-members', label: 'View All Members', color: '#2563EB' },
              { to: '/attendance-report', label: 'Attendance Report', color: '#7C3AED' },
              { to: '/attendance-details', label: 'Attendance Details', color: '#7C3AED' },
            ].map((link, idx) => (
              <Link
                key={idx}
                to={link.to}
                style={{
                  backgroundColor: link.color,
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '0.5rem',
                  textAlign: 'center',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'opacity 0.3s',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </main>

      <footer style={{
        backgroundColor: '#111827',
        color: 'white',
        padding: '1.5rem',
        textAlign: 'center',
      }}>
        <Footer />
      </footer>
    </div>
  );
}

export default AdminDashboard;
