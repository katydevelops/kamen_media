import { useState } from 'react';

interface TabSwitcherProps {
  aboutContent: React.ReactNode;
  bookingForm: React.ReactNode;
}

export default function TabSwitcher({ aboutContent, bookingForm }: TabSwitcherProps) {
  // State to keep track of which tab is active
  const [activeTab, setActiveTab] = useState<'about' | 'booking'>('about');

  return (
    <div className="tabs-container">
      {/* Tab Buttons */}
      <div className="tab-buttons">
        <button
          className={`tab-button ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => setActiveTab('about')}
        >
          About
        </button>
        <button
          className={`tab-button ${activeTab === 'booking' ? 'active' : ''}`}
          onClick={() => setActiveTab('booking')}
        >
          Book
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'about' ? aboutContent : bookingForm}
      </div>
    </div>
  );
}
