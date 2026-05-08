import type { FlatMenuItem } from '../types/menu';

interface MenuCardProps {
  item: FlatMenuItem;
  onClick?: () => void;
}

export default function MenuCard({ item, onClick }: MenuCardProps) {
  return (
    <div onClick={onClick} className={`group bg-white dark:bg-brand-card rounded-xl border border-brand-cream-dark dark:border-neutral-800 overflow-hidden hover:shadow-lg hover:border-brand-red/40 dark:hover:border-brand-red/50 transition-all duration-300 hover:-translate-y-0.5 ${onClick ? 'cursor-pointer' : ''}`}>
      <div className="h-36 overflow-hidden">
        {item.image ? (
          <img
            src={`${import.meta.env.BASE_URL}${item.image.replace(/^\//, '')}`}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-brand-cream-dark/60 dark:bg-neutral-800 flex items-center justify-center">
            <span className="text-4xl">
              {item.category === 'bebidas' ? '🥤' : '🍽️'}
            </span>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-heading text-brand-dark dark:text-white text-xl tracking-wide group-hover:text-brand-red dark:group-hover:text-brand-red-light transition-colors">
            {item.name}
          </h3>
          <span className="text-lg font-bold text-brand-red dark:text-brand-gold shrink-0">
            ${item.price.toFixed(2)}
          </span>
        </div>
        <p className="text-sm text-gray-500 dark:text-brand-gray mt-1 leading-relaxed">
          {item.description}
        </p>
        {item.note && (
          <span className="inline-block mt-2 text-xs bg-brand-red/10 text-brand-red dark:text-brand-gold-light px-2 py-0.5 rounded-full font-medium">
            {item.note}
          </span>
        )}
      </div>
    </div>
  );
}
