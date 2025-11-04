import Image from "next/image";

interface TestimonialCardProps {
  avatarUrl: string;
  name: string;
  role?: string;
  quote: string;
}

export default function TestimonialCard({ avatarUrl, name, role, quote }: TestimonialCardProps) {
  return (
    <div className="bg-bg p-6 rounded-xl shadow-sm border border-gray-100" role="article" aria-labelledby={`testimonial-${name.replace(/\s+/g, '-').toLowerCase()}`}>
      {/* Avatar y información */}
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image 
            src={avatarUrl} 
            alt={`Foto de perfil de ${name}`}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div>
          <h4 id={`testimonial-${name.replace(/\s+/g, '-').toLowerCase()}`} className="text-lg font-semibold text-text-strong">
            {name}
          </h4>
          {role && (
            <span className="text-sm text-text" aria-label={`Cargo: ${role}`}>
              {role}
            </span>
          )}
        </div>
      </div>
      
      {/* Cita */}
      <blockquote className="text-text italic" aria-label={`Testimonio de ${name}`}>
        &ldquo;{quote}&rdquo;
      </blockquote>
    </div>
  );
}
