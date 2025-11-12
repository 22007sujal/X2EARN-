"use client"
import React, { useState } from 'react';
import { Rocket } from 'lucide-react';
import Footer from '../components/footer/footer';

const CreateJobsForm: React.FC = () => {
  const [formData, setFormData] = useState({
    jobType: '',
    jobTarget: '',
    perJobPrice: '',
    totalValue: '',
    tweetLink: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLaunchCampaign = () => {
    console.log('Launching campaign with data:', formData);
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontfamliy: "Orbitron",
    },
    formBox: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '40px',
      width: '100%',
      maxWidth: '500px',
      border: '3px solid black',
      boxSizing: 'border-box' as const
    },
    title: {
      textAlign: 'center' as const,
      fontSize: '24px',
      fontWeight: '700',
      marginBottom: '30px',
      marginTop: '0',
      letterSpacing: '1px'
    },
    row: {
      display: 'flex',
      gap: '20px',
      marginBottom: '20px'
    },
    column: {
      flex: '1',
      display: 'flex',
      flexDirection: 'column' as const
    },
    label: {
      fontSize: '11px',
      fontWeight: '700',
      marginBottom: '8px',
      letterSpacing: '0.5px',
      color: '#000'
    },
    input: {
      width: '100%',
      padding: '12px 20px',
      border: '2px solid #e0e0e0',
      borderRadius: '25px',
      outline: 'none',
      fontSize: '14px',
      boxSizing: 'border-box' as const,
      fontFamily: 'inherit'
    },
    fullWidthInput: {
      width: '100%',
      padding: '14px 20px',
      border: '2px solid #e0e0e0',
      borderRadius: '25px',
      outline: 'none',
      textAlign: 'center' as const,
      fontSize: '13px',
      boxSizing: 'border-box' as const,
      marginBottom: '25px',
      fontFamily: 'inherit',
      color: '#999'
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center'
    },
    button: {
      backgroundColor: '#ef6b6b',
      color: 'white',
      fontWeight: '700',
      padding: '14px 32px',
      borderRadius: '30px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '13px',
      letterSpacing: '0.5px',
      transition: 'background-color 0.2s',
      fontFamily: 'inherit'
    }
  };

  return (
    <>
    <div style={styles.container}>
      <div style={styles.formBox}>
        <h1 style={styles.title}>CREATE JOBS</h1>
        
        <div>
          <div style={styles.row}>
            <div style={styles.column}>
              <label style={styles.label}>JOB TYPE</label>
              <input
                type="text"
                name="jobType"
                value={formData.jobType}
                onChange={handleInputChange}
                style={styles.input}
              />
            </div>
            <div style={styles.column}>
              <label style={styles.label}>JOB TARGET</label>
              <input
                type="text"
                name="jobTarget"
                value={formData.jobTarget}
                onChange={handleInputChange}
                placeholder="eg 400"
                style={{
                  ...styles.input,
                  color: formData.jobTarget ? '#000' : '#ccc'
                }}
              />
            </div>
          </div>

          <div style={styles.row}>
            <div style={styles.column}>
              <label style={styles.label}>PER JOB $</label>
              <input
                type="text"
                name="perJobPrice"
                value={formData.perJobPrice}
                onChange={handleInputChange}
                placeholder="eg 0.104"
                style={{
                  ...styles.input,
                  color: formData.perJobPrice ? '#000' : '#ccc'
                }}
              />
            </div>
            <div style={styles.column}>
              <label style={styles.label}>TOTAL VALUE</label>
              <input
                type="text"
                name="totalValue"
                value={formData.totalValue}
                onChange={handleInputChange}
                style={styles.input}
              />
            </div>
          </div>

          <input
            type="text"
            name="tweetLink"
            value={formData.tweetLink}
            onChange={handleInputChange}
            placeholder="PASTE THE TARGET TWEET LINK"
            style={{
              ...styles.fullWidthInput,
              color: formData.tweetLink ? '#000' : '#999'
            }}
          />

          <div style={styles.buttonContainer}>
            <button
              onClick={handleLaunchCampaign}
              style={styles.button}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e85555'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ef6b6b'}
            >
              <Rocket size={18} />
              LAUNCH CAMPAIGN
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CreateJobsForm;