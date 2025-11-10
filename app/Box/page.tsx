import React from 'react';
import Footer from '../components/footer/footer';

// Define the styles object
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center' as const, // Cast to literal type
    padding: '20px',
    backgroundColor: 'white', // Assuming a white background for the component area
    color: '#333',
  },
  header: {
    fontSize: '36px',
    fontWeight: 'bold' as const,
    marginBottom: '10px',
    color: '#000',
  },
  boxImage: {
    width: '80px',
    height: '80px',
    margin: '10px auto 30px auto',
    // The image is a stylized pink/rose box, we'll use a placeholder color
    backgroundColor: '#F5B0B0', // Light pink placeholder
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  description: {
    maxWidth: '800px',
    margin: '0 auto 40px auto',
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#555',
  },
  boxBalanceCard: {
    border: '1px solid #ddd',
    padding: '20px',
    margin: '0 auto 50px auto',
    maxWidth: '300px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  },
  boxBalanceHeader: {
    fontSize: '14px',
    color: '#888',
    marginBottom: '10px',
  },
  boxBalanceAmount: {
    fontSize: '48px',
    fontWeight: 'normal' as const,
    color: '#E91E63', // A noticeable pink for the main amount
    lineHeight: '1.1',
  },
  boxBalanceEth: {
    fontSize: '18px',
    color: '#888',
    marginTop: '5px',
  },
  nextBuybackHeader: {
    fontSize: '18px',
    color: '#888',
    marginBottom: '10px',
  },
  timer: {
    fontSize: '64px',
    fontWeight: 'bold' as const,
    color: '#000',
    marginBottom: '60px',
  },
  statsRow: {
    display: 'flex',
    justifyContent: 'center' as const,
    gap: '30px',
  },
  statCard: {
    backgroundColor: '#FFEBEE', // Very light pink background
    color: '#E91E63', // Pink text
    padding: '20px',
    width: '150px',
    borderRadius: '5px',
    border: '1px solid #F8BBD0', // Lighter pink border
  },
  statHeader: {
    fontSize: '16px',
    color: '#E91E63',
    marginBottom: '5px',
  },
  statValue: {
    fontSize: '36px',
    fontWeight: 'bold' as const,
  }
};

const BoxComponent: React.FC = () => {
  return (
    <>
    <div style={styles.container}>
      {/* HEADER */}
      <div style={styles.header}>BOX</div>

      {/* BOX IMAGE (Placeholder) */}
      <div style={styles.boxImage}>
        {/* In a real app, you would use an <img> tag here. 
            E.g., <img src="/path/to/box-image.png" alt="Box" style={{width: '100%', height: '100%'}} /> 
            For ditto inline CSS, we just replicate the container's look.
        */}
      </div>

      {/* DESCRIPTION */}
      <p style={styles.description}>
        The Box Concept is a transparent reward system where all platform revenue earned from ads,
        promotions, and campaigns flows into "The Box." This collected revenue is used to buy back
        tokens and distribute rewards to active holders. Every payout comes from real platform
        growth, not new deposits, ensuring a sustainable and fair ecosystem where everyone benefits
        as the platform succeeds.
      </p>

      {/* BOX BALANCE CARD */}
      <div style={styles.boxBalanceCard}>
        <div style={styles.boxBalanceHeader}>BOX BALANCE</div>
        <div style={styles.boxBalanceAmount}>50.90$</div>
        <div style={styles.boxBalanceEth}>0.01 ETH</div>
      </div>

      {/* NEXT BUYBACK & DISTRIBUTION */}
      <div style={styles.nextBuybackHeader}>NEXT BUYBACK AND DISTRIBUTION</div>
      <div style={styles.timer}>00:48:00</div>

      {/* STATS ROW */}
      <div style={styles.statsRow}>
        {/* TOTAL SUPPLY */}
        <div style={styles.statCard}>
          <div style={styles.statHeader}>TOTAL SUPPLY</div>
          <div style={styles.statValue}>10 M</div>
        </div>

        {/* MCAP */}
        <div style={styles.statCard}>
          <div style={styles.statHeader}>MCAP</div>
          <div style={styles.statValue}>10 M</div>
        </div>

        {/* HOLDERS */}
        <div style={styles.statCard}>
          <div style={styles.statHeader}>HOLDERS</div>
          <div style={styles.statValue}>10 M</div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default BoxComponent;