import {useState} from 'react';

// Set up an interface to set a type on what is passed in for the tab switcher
interface TabSwitcherProps {
    aboutContent: React.ReactNode;
    bookingForm: React.ReactNode;
}

export default function TabSwitcher({ aboutContent, bookingForm }: TabSwitcherProps) {
    const [activeTab, setActiveTab] = useState<'about' | 'booking'>('about');

    return(
        <div className="tabs-container">
            {/* Tab Buttons */}
            <div className="tab-buttons">
                <button className={`tab-button ${activeTab === 'about' ? 'active'} : ''`}
            </div>
        </div>
    );
}