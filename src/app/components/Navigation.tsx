// Navigation.tsx
'use client';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';

interface NavigationProps {
  isMobile?: boolean;
  onLinkClick?: React.MouseEventHandler<HTMLLIElement>;
}

export default function Navigation({ isMobile = false, onLinkClick }: NavigationProps) {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  // Main navigation items (same for both user and restaurant pages)
  const mainLinks = [
    { href: '/#que-ganas', label: 'Qué ganas' },
    { href: '/#money-impact', label: 'Impacto económico' },
    { href: '/#como-funciona', label: 'Cómo funciona' },
    { href: '/#saber-mas', label: 'Saber más' },
  ];

  // Resources dropdown items
  const resourcesLinks = [
    { href: '/#faq', label: 'FAQ' },
    { href: '/#newsletter', label: 'Newsletter' },
    { href: '/#feedback', label: 'Ayúdanos a mejorar' },
    { href: '/blog', label: 'Blog' },
  ];

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLLIElement>) => {
    setDropdownOpen(false);
    if (onLinkClick) {
      onLinkClick(e);
    }
  };

  if (isMobile) {
    return (
      <ul className="flex flex-col space-y-4 font-medium">
        {mainLinks.map((link) => (
          <li key={link.href} onClick={handleLinkClick}>
            <Link
              href={link.href}
              className="text-gray-300 hover:text-[#FCDB7D] transition-colors block py-2"
            >
              {link.label}
            </Link>
          </li>
        ))}
        
        {/* Mobile Resources Section */}
        <li>
          <button
            onClick={handleDropdownToggle}
            className="text-gray-300 hover:text-[#FCDB7D] transition-colors flex items-center justify-between w-full py-2"
          >
            Recursos
            <svg
              className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {dropdownOpen && (
            <ul className="ml-4 mt-2 space-y-2">
              {resourcesLinks.map((link) => (
                <li key={link.href} onClick={handleLinkClick}>
                  {link.href.startsWith('/') ? (
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#FCDB7D] transition-colors block py-1"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#FCDB7D] transition-colors block py-1"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    );
  }

  return (
    <ul className="flex flex-row space-x-8 font-medium">
      {mainLinks.map((link) => (
        <li key={link.href} onClick={handleLinkClick}>
          <Link
            href={link.href}
            className="text-gray-300 hover:text-[#FCDB7D] transition-colors"
          >
            {link.label}
          </Link>
        </li>
      ))}
      
      {/* Desktop Resources Dropdown */}
      <li className="relative">
        <button
          onClick={handleDropdownToggle}
          className="text-gray-300 hover:text-[#FCDB7D] transition-colors flex items-center"
        >
          Recursos
          <svg
            className={`w-4 h-4 ml-1 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {dropdownOpen && (
          <div className="absolute top-full left-0 mt-2 w-48 bg-[#052838] border border-gray-600 rounded-lg shadow-lg z-50">
            <ul className="py-2">
              {resourcesLinks.map((link) => (
                <li key={link.href} onClick={handleLinkClick}>
                  {link.href.startsWith('/') ? (
                    <Link
                      href={link.href}
                      className="block px-4 py-2 text-gray-300 hover:text-[#FCDB7D] hover:bg-gray-800 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <Link
                      href={link.href}
                      className="block px-4 py-2 text-gray-300 hover:text-[#FCDB7D] hover:bg-gray-800 transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </li>
    </ul>
  );
}
