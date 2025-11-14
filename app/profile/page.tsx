'use client'
import React, { useState } from 'react';
import Footer from '../components/footer/footer';
import { useUser } from '../hooks/useUser';


export default function ProfileEarningsDashboard() {
  const [withdrawAmount, setWithdrawAmount] = useState('');

  const {user} = useUser();

  const handleWithdraw = () => {
    if (withdrawAmount && parseFloat(withdrawAmount) > 0) {
      alert(`Withdrawing $${withdrawAmount}`);
      setWithdrawAmount('');
    }
  };

  return (
    <>
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: "Orbitron",
      backgroundColor: '#fff'
    }}>
      {/* Header Section */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        marginBottom: '30px',
        paddingBottom: '20px',
        borderBottom: '2px solid #e0e0e0'
      }}>
        <img 
          src="./shy.png" 
          alt="Profile"
          style={{
            width: '90px',
            height: '90px',
            borderRadius: '8px',
            objectFit: 'cover'
          }}
        />
        <div style={{ flex: 1 }}>
          <div style={{
            fontSize: '24px',
            color: '#ff9999',
            fontWeight: 'bold',
            marginBottom: '5px'
          }}>
           {user?.username.toUpperCase()}
          </div>
          <div style={{
            fontSize: '20px',
            color: '#6699ff'
          }}>
            <span style={{ fontWeight: 'bold' }}>263</span> FOLLOWERS
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '20px',
        marginBottom: '20px'
      }}>
        {/* Lifetime Earning */}
        <div style={{
          border: '2px solid #e0e0e0',
          borderRadius: '8px',
          padding: '20px',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '12px',
            color: '#666',
            marginBottom: '10px',
            fontWeight: '600',
            letterSpacing: '0.5px'
          }}>
            LIFETIME EARNING
          </div>
          <div style={{
            fontSize: '32px',
            color: '#ff9999',
            fontWeight: 'bold'
          }}>
            5.3$
          </div>
        </div>

        {/* Current Balance */}
        <div style={{
          border: '2px solid #e0e0e0',
          borderRadius: '8px',
          padding: '20px',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '12px',
            color: '#666',
            marginBottom: '10px',
            fontWeight: '600',
            letterSpacing: '0.5px'
          }}>
            CURRENT BALANCE
          </div>
          <div style={{
            fontSize: '32px',
            color: '#ff9999',
            fontWeight: 'bold',
            marginBottom: '15px'
          }}>
            {`${user?.current_balance}$`}
          </div>
          <input
            type="number"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
            placeholder="Amount"
            style={{
              width: '100%',
              padding: '10px',
              border: '2px solid #e0e0e0',
              borderRadius: '4px',
              marginBottom: '10px',
              fontSize: '14px',
              boxSizing: 'border-box'
            }}
          />
          <button
            onClick={handleWithdraw}
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#000',
              color: '#fff',
              border: 'none',
              borderRadius: '25px',
              fontSize: '14px',
              fontWeight: 'bold',
              cursor: 'pointer',
              letterSpacing: '1px'
            }}
          >
            WITHDRAW
          </button>
        </div>

        {/* Jobs Completed */}
        <div style={{
          border: '2px solid #e0e0e0',
          borderRadius: '8px',
          padding: '20px',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '12px',
            color: '#666',
            marginBottom: '10px',
            fontWeight: '600',
            letterSpacing: '0.5px'
          }}>
            JOBS COMPLETED
          </div>
          <div style={{
            fontSize: '32px',
            color: '#ccc',
            fontWeight: 'bold'
          }}>
            90
          </div>
        </div>
      </div>

      {/* TSC Token Balance */}
      <div style={{
        backgroundColor: '#ffccdd',
        borderRadius: '8px',
        padding: '25px',
        textAlign: 'center'
      }}>
        <div style={{
          fontSize: '16px',
          color: '#fff',
          marginBottom: '10px',
          fontWeight: '600',
          letterSpacing: '2px'
        }}>
          TSC TOKEN BALANCE
        </div>
        <div style={{
          fontSize: '36px',
          color: '#fff',
          fontWeight: 'bold',
          letterSpacing: '1px'
        }}>
          40 TSC
        </div>
      </div>
    
    </div>
      <Footer/>
      </>
  );
}