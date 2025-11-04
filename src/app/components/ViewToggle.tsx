'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function ViewToggle() {
  const pathname = usePathname();
  const router = useRouter();
  // Now the main page "/" is for restaurants, and "/usuarios" is for users
  const isUserPage = pathname === '/usuarios';
  
  const handleToggle = () => {
    router.push(isUserPage ? "/" : "/usuarios");
  };
  
  return (
    <button
      onClick={handleToggle}
      className="pointer-events-auto bg-[#FCDB7D] hover:bg-[#052838] hover:text-[#FCDB7D] text-[#052838] font-medium py-2 px-4 rounded-lg transition ease-in-out duration-200 block sm:inline-block"
    >
      {isUserPage ? "¿Eres un restaurante?" : "¿Eres un usuario?"}
    </button>
  );
}
