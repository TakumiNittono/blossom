import { FC, useState, useEffect } from 'react';

interface IntroPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const IntroPopup: FC<IntroPopupProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const emailCaptured = localStorage.getItem('blossom_email_captured');
    if (emailCaptured === 'true') {
      onClose();
    }
  }, [onClose]);

  if (!isOpen) return null;

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    localStorage.setItem('blossom_email_captured', 'true');
    localStorage.setItem('blossom_email', email);
    
    setIsSubmitting(false);
    onClose();
    
    // Show toast notification
    alert('10% discount code sent to your email!');
  };

  const handleNoThanks = () => {
    localStorage.setItem('blossom_visited', 'true');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-[10000] flex items-center justify-center animate-fadeIn"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(4px)' }}
      onClick={handleNoThanks}
    >
      <div 
        className="bg-white p-8 md:p-12 max-w-md w-full mx-4 relative animate-slideDown"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleNoThanks}
          className="absolute top-4 right-4 text-2xl hover:opacity-70 transition-opacity"
        >
          ×
        </button>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 uppercase tracking-wide">
          Want a discount?
        </h2>
        
        <p className="text-sm text-gray-600 mb-6">
          Sign up and get 10% off your first order
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
            }}
            placeholder="Enter your email"
            className="w-full border-b-2 border-black px-2 py-3 focus:outline-none focus:border-gray-400 transition-colors duration-200"
            required
          />
          
          {error && (
            <p className="text-red-600 text-sm">{error}</p>
          )}

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-black text-white py-3 px-6 uppercase text-sm tracking-wider hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send 10% off'}
            </button>
            
            <button
              type="button"
              onClick={handleNoThanks}
              className="flex-1 border-2 border-black py-3 px-6 uppercase text-sm tracking-wider hover:bg-gray-50 transition-colors duration-200"
            >
              No thanks
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IntroPopup;
