'use client'
import React, { useState } from 'react';
import { Trophy, TrendingUp, Award, Zap } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import Footer from '../components/footer/footer';

export default function ModernX2ELeaderboard() {
  const [leaderboardData] = useState([
    { rank: 1, jobs: 150, handle: '@cryptoking', reward: '$2,450', trend: '+12%' },
    { rank: 2, jobs: 142, handle: '@webmaster99', reward: '$2,310', trend: '+8%' },
    { rank: 3, jobs: 135, handle: '@taskpro', reward: '$2,180', trend: '+15%' },
    { rank: 4, jobs: 128, handle: '@hustler247', reward: '$2,050', trend: '+5%' },
    { rank: 5, jobs: 120, handle: '@earner_elite', reward: '$1,920', trend: '+10%' },
    { rank: 6, jobs: 115, handle: '@grindmode', reward: '$1,840', trend: '+7%' },
    { rank: 7, jobs: 110, handle: '@x2e_ninja', reward: '$1,760', trend: '+9%' },
    { rank: 8, jobs: 105, handle: '@taskmachine', reward: '$1,680', trend: '+6%' },
    { rank: 9, jobs: 98, handle: '@dailygrinder', reward: '$1,570', trend: '+4%' },
    { rank: 10, jobs: 92, handle: '@topearner', reward: '$1,470', trend: '+11%' },
  ]);

  interface LeaderboardEntry {
    rank: number;
    jobs: number;
    handle: string;
    reward: string;
    trend: string;
  }

  interface RankBadge {
    icon: LucideIcon;
    bgColor: string;
  }

  const getRankBadge = (rank: number): RankBadge => {
    if (rank === 1) return { icon: Trophy, bgColor: '#000000' };
    if (rank === 2) return { icon: Award, bgColor: '#374151' };
    if (rank === 3) return { icon: Award, bgColor: '#4B5563' };
    return { icon: Zap, bgColor: '#1F2937' };
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      padding: '24px',
      display: 'flex',
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'center',
       fontFamily: "Orbitron"
    }}>
      <div style={{ width: '100%', maxWidth: '1280px' }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '32px',
          position: 'relative'
        }}>
          <div style={{ display: 'inline-block' }}>
            <h1 style={{
              fontSize: '48px',
              fontWeight: '900',
              color: '#000000',
              marginBottom: '8px'
            }}>
              X2E LEADERBOARD
            </h1>
            <div style={{
              height: '4px',
              backgroundColor: '#000000',
              borderRadius: '9999px'
            }}></div>
          </div>
          <p style={{
            color: '#4B5563',
            marginTop: '16px',
            fontSize: '14px'
          }}>
            Top 10 earners crushing it this week 🔥
          </p>
          <div style={{
            position: 'absolute',
            top: '0',
            right: '0',
            backgroundColor: '#000000',
            color: '#ffffff',
            padding: '8px 16px',
            borderRadius: '9999px',
            fontSize: '12px',
            fontWeight: 'bold',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          }}>
            WEEKLY
          </div>
        </div>

        {/* Leaderboard Card */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          overflow: 'hidden',
          border: '2px solid #000000'
        }}>
          {/* Table Header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '16px',
            padding: '16px 24px',
            backgroundColor: '#000000',
            borderBottom: '2px solid #000000'
          }}>
            <div style={{
              gridColumn: 'span 2',
              textAlign: 'center',
              fontSize: '12px',
              fontWeight: 'bold',
              color: '#ffffff',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>Rank</div>
            <div style={{
              gridColumn: 'span 3',
              textAlign: 'center',
              fontSize: '12px',
              fontWeight: 'bold',
              color: '#ffffff',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>Handle</div>
            <div style={{
              gridColumn: 'span 2',
              textAlign: 'center',
              fontSize: '12px',
              fontWeight: 'bold',
              color: '#ffffff',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>Jobs</div>
            <div style={{
              gridColumn: 'span 3',
              textAlign: 'center',
              fontSize: '12px',
              fontWeight: 'bold',
              color: '#ffffff',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>Reward</div>
            <div style={{
              gridColumn: 'span 2',
              textAlign: 'center',
              fontSize: '12px',
              fontWeight: 'bold',
              color: '#ffffff',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>Trend</div>
          </div>

          {/* Table Body */}
          <div>
            {leaderboardData.map((entry, index) => {
              const badge = getRankBadge(entry.rank);
              const Icon = badge.icon;
              const [isHovered, setIsHovered] = useState(false);
              
              return (
                <div 
                  key={entry.rank}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(12, 1fr)',
                    gap: '16px',
                    padding: '20px 24px',
                    backgroundColor: isHovered ? '#F9FAFB' : 'transparent',
                    borderBottom: index < leaderboardData.length - 1 ? '2px solid #E5E7EB' : 'none',
                    transition: 'all 0.3s',
                    animation: `slideIn 0.5s ease-out ${index * 0.1}s both`
                  }}
                >
                  {/* Rank */}
                  <div style={{
                    gridColumn: 'span 2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      backgroundColor: badge.bgColor,
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                      transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                      transition: 'transform 0.3s'
                    }}>
                      {entry.rank <= 3 ? (
                        <Icon style={{ width: '24px', height: '24px', color: '#ffffff' }} />
                      ) : (
                        <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '18px' }}>
                          {entry.rank}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Handle */}
                  <div style={{
                    gridColumn: 'span 3',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <p style={{
                      color: isHovered ? '#4B5563' : '#000000',
                      fontWeight: 'bold',
                      fontSize: '16px',
                      transition: 'color 0.3s'
                    }}>
                      {entry.handle}
                    </p>
                  </div>

                  {/* Jobs */}
                  <div style={{
                    gridColumn: 'span 2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{
                      backgroundColor: '#F3F4F6',
                      border: '1px solid #D1D5DB',
                      padding: '8px 16px',
                      borderRadius: '8px'
                    }}>
                      <p style={{ color: '#000000', fontWeight: 'bold', fontSize: '16px' }}>
                        {entry.jobs}
                      </p>
                    </div>
                  </div>

                  {/* Reward */}
                  <div style={{
                    gridColumn: 'span 3',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <p style={{
                      color: '#000000',
                      fontWeight: '900',
                      fontSize: '20px'
                    }}>
                      {entry.reward}
                    </p>
                  </div>

                  {/* Trend */}
                  <div style={{
                    gridColumn: 'span 2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      backgroundColor: '#F3F4F6',
                      border: '1px solid #D1D5DB',
                      padding: '4px 12px',
                      borderRadius: '9999px'
                    }}>
                      <TrendingUp style={{ width: '16px', height: '16px', color: '#000000' }} />
                      <span style={{ color: '#000000', fontWeight: 'bold', fontSize: '14px' }}>
                        {entry.trend}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Stats */}
        <div style={{
          marginTop: '32px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px'
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '16px',
            border: '2px solid #000000',
            textAlign: 'center',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          }}>
            <p style={{
              color: '#4B5563',
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '4px'
            }}>Total Jobs</p>
            <p style={{
              color: '#000000',
              fontSize: '24px',
              fontWeight: 'bold'
            }}>1,245</p>
          </div>
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '16px',
            border: '2px solid #000000',
            textAlign: 'center',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          }}>
            <p style={{
              color: '#4B5563',
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '4px'
            }}>Total Rewards</p>
            <p style={{
              color: '#000000',
              fontSize: '24px',
              fontWeight: 'bold'
            }}>$19,270</p>
          </div>
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '16px',
            border: '2px solid #000000',
            textAlign: 'center',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          }}>
            <p style={{
              color: '#4B5563',
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '4px'
            }}>Active Users</p>
            <p style={{
              color: '#000000',
              fontSize: '24px',
              fontWeight: 'bold'
            }}>847</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
      <Footer/>
    </div>
  );
}