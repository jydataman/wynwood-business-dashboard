'use client';

import { useState } from 'react';
import data from '../../data.json';

// Helper to get month label from date string
const getMonthLabel = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleString('default', { month: 'long', year: 'numeric' });
};

// Group businesses by month
const groupByMonth = (businesses: any[]) => {
  const groups: { [key: string]: any[] } = {};
  businesses.forEach((b) => {
    const label = getMonthLabel(b.date);
    if (!groups[label]) groups[label] = [];
    groups[label].push(b);
  });
  return groups;
};

export default function Home() {
  const [openSector, setOpenSector] = useState<string | null>(null);

  const toggleSector = (category: string) => {
    setOpenSector(openSector === category ? null : category);
  };

  const groupedBusinesses = groupByMonth(data.newOpenings2026);

  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif', backgroundColor: '#f4f4f9', minHeight: '100vh' }}>

      {/* HEADER */}
      <header style={{ marginBottom: '30px', borderBottom: '2px solid #000', paddingBottom: '10px' }}>
        <h1 style={{ margin: 0, fontSize: '2.5rem', fontWeight: '900' }}>
          {data.neighborhood.toUpperCase()} <span style={{ color: '#2563eb' }}>PULSE</span>
        </h1>
        <p style={{ color: '#666', fontWeight: 'bold' }}>VERSION 1.0 | Last Updated: {data.lastUpdated}</p>
      </header>

      {/* SECTOR CARDS */}
      <h2 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '16px' }}>2025 Sector Overview</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        marginBottom: '40px'
      }}>
        {data.baseline2025.map((sector: any) => (
          <div key={sector.category} style={{
            background: 'white',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
            border: '1px solid #e5e7eb'
          }}>
            <h3 style={{ margin: 0, fontSize: '0.75rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              {sector.category}
            </h3>
            <p style={{ margin: '10px 0 8px 0', fontSize: '2rem', fontWeight: '800', color: '#111827' }}>
              {sector.total}
            </p>

            <button
              onClick={() => toggleSector(sector.category)}
              style={{
                marginTop: '8px',
                fontSize: '0.75rem',
                color: '#2563eb',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                fontWeight: '600'
              }}
            >
              {openSector === sector.category ? '▲ Hide Breakdown' : '▼ View Breakdown'}
            </button>

            {openSector === sector.category && (
              <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '10px', marginTop: '10px' }}>
                {sector.subcategories.map((sub: any) => (
                  <div key={sub.name} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>{sub.name}</span>
                    <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#374151' }}>{sub.count}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* NEW BUSINESS PIPELINE */}
      <h2 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '24px' }}>
        🚀 2026 New Business Pipeline — {data.newOpenings2026.length} Arrivals
      </h2>

      {/* GROUPED BY MONTH */}
      {Object.entries(groupedBusinesses).map(([month, businesses]) => (
        <div key={month} style={{ marginBottom: '40px' }}>

          {/* MONTH HEADER */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '12px'
          }}>
            <h3 style={{
              margin: 0,
              fontSize: '1rem',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#111827'
            }}>
              {month}
            </h3>
            <span style={{
              fontSize: '0.75rem',
              background: '#2563eb',
              color: 'white',
              padding: '2px 10px',
              borderRadius: '99px',
              fontWeight: '700'
            }}>
              {businesses.length} {businesses.length === 1 ? 'Opening' : 'Openings'}
            </span>
          </div>

          {/* TABLE */}
          <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#111827', color: 'white' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '0.75rem', textTransform: 'uppercase' }}>Date</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '0.75rem', textTransform: 'uppercase' }}>Business</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '0.75rem', textTransform: 'uppercase' }}>Type</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '0.75rem', textTransform: 'uppercase' }}>Address</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '0.75rem', textTransform: 'uppercase' }}>Description</th>
                </tr>
              </thead>
              <tbody>
                {businesses.map((business: any, index: number) => (
                  <tr key={business.name} style={{
                    backgroundColor: index % 2 === 0 ? '#f9fafb' : 'white',
                    borderBottom: '1px solid #e5e7eb'
                  }}>
                    <td style={{ padding: '12px 16px', fontSize: '0.85rem', color: '#6b7280', whiteSpace: 'nowrap' }}>
                      {new Date(business.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </td>
                    <td style={{ padding: '12px 16px', fontSize: '0.85rem', fontWeight: '700', color: '#111827' }}>
                      {business.name}
                      {business.isAnchor && (
                        <span style={{ marginLeft: '6px', fontSize: '0.65rem', background: '#fef3c7', color: '#92400e', padding: '2px 6px', borderRadius: '99px' }}>
                          ANCHOR
                        </span>
                      )}
                    </td>
                    <td style={{ padding: '12px 16px', fontSize: '0.85rem', color: '#374151' }}>{business.type}</td>
                    <td style={{ padding: '12px 16px', fontSize: '0.85rem', color: '#6b7280' }}>{business.address}</td>
                    <td style={{ padding: '12px 16px', fontSize: '0.85rem', color: '#6b7280' }}>{business.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

    </main>
  );
}