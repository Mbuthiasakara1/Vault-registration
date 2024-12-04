import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <footer style={{ backgroundColor: '#1F2937', color: 'white', padding: '0.5rem', marginTop: '20px', width: '100%' }}>
            <div style={{
                maxWidth: '1200px', 
                margin: '0 auto', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center'
            }}>
                
                <div style={{
                    textAlign: 'center', 
                    marginBottom: '1rem'
                }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Vault Church</h2>
                    <p style={{ color: '#9CA3AF' }}>Empowering youth for a greater tomorrow.</p>
                </div>

                <div style={{
                    display: 'flex', 
                    gap: '1.5rem', 
                    marginBottom: '1rem', 
                    justifyContent: 'center'
                }}>
                    <a 
                        href="https://www.facebook.com/vaulteenz" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{
                            color: '#9CA3AF', 
                            transition: 'color 0.3s'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.color = 'white'}
                        onMouseOut={(e) => e.currentTarget.style.color = '#9CA3AF'}
                    >
                        <FaFacebook size={24} />
                    </a>
                    <a 
                        href="https://twitter.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{
                            color: '#9CA3AF', 
                            transition: 'color 0.3s'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.color = 'white'}
                        onMouseOut={(e) => e.currentTarget.style.color = '#9CA3AF'}
                    >
                        <FaTwitter size={24} />
                    </a>
                    <a 
                        href="https://www.instagram.com/vault_teenz/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{
                            color: '#9CA3AF', 
                            transition: 'color 0.3s'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.color = 'white'}
                        onMouseOut={(e) => e.currentTarget.style.color = '#9CA3AF'}
                    >
                        <FaInstagram size={24} />
                    </a>
                </div>
            </div>

            <div style={{
                textAlign: 'center', 
                color: '#6B7280', 
                fontSize: '0.875rem', 
                marginTop: '1.5rem', 
                borderTop: '1px solid #374151', 
                paddingTop: '1rem'
            }}>
                &copy; 2024 Life Church. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
