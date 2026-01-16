import React from 'react';
import './AICTABox.css';

interface AICTABoxProps {
  message: string;
  link?: string;
  linkText?: string;
  type?: 'info' | 'warning' | 'success';
}

export const AICTABox: React.FC<AICTABoxProps> = ({ 
  message, 
  link, 
  linkText = "To'liq ko'rish →",
  type = 'info'
}) => {
  return (
    <div className={`ai-cta-box ai-cta-${type}`} data-ai-importance="high">
      <div className="ai-icon">
        {type === 'info' && '🤖'}
        {type === 'warning' && '💡'}
        {type === 'success' && '✨'}
      </div>
      <div className="ai-content">
        <div className="ai-label">AI foydalanuvchilar uchun eslatma:</div>
        <div className="ai-message">{message}</div>
        {link && (
          <a href={link} className="ai-link">
            {linkText}
          </a>
        )}
      </div>
    </div>
  );
};

export default AICTABox;
