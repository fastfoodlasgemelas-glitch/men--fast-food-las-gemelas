import { FaWhatsapp } from 'react-icons/fa';

const socials = [
  {
    name: 'WhatsApp',
    icon: FaWhatsapp,
    url: 'https://wa.me/50369922006',
    handle: '6992-2006',
    iconColor: 'text-green-600 dark:text-green-400',
    bg: 'bg-green-500/10 hover:bg-green-500/20',
  },
];

export default function SocialSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-heading tracking-wide text-brand-dark dark:text-white mb-4">
        {'\uD83D\uDCF1'} Contacto
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-4 p-5 rounded-xl border border-brand-cream-dark dark:border-neutral-800 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${social.bg}`}
          >
            <social.icon className={`text-3xl ${social.iconColor}`} />
            <div>
              <p className="font-heading tracking-wide text-brand-dark dark:text-white">{social.name}</p>
              <p className="text-xs text-gray-500 dark:text-brand-gray">{social.handle}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
