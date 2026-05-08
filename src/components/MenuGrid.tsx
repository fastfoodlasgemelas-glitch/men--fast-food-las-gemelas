import { useState } from 'react';
import type { FlatMenuItem } from '../types/menu';
import MenuCard from './MenuCard';
import ItemDetailModal from './ItemDetailModal';

interface MenuGridProps {
  items: FlatMenuItem[];
  categoryName: string;
  categoryNote?: string;
  salsas?: string[];
}

export default function MenuGrid({ items, categoryName, categoryNote, salsas }: MenuGridProps) {
  const [selectedItem, setSelectedItem] = useState<FlatMenuItem | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <div className="mb-4">
        <h2 className="text-2xl font-heading tracking-wide text-brand-dark dark:text-white">{categoryName}</h2>
        {categoryNote && (
          <p className="text-sm text-brand-red dark:text-brand-gold mt-1 font-medium">{categoryNote}</p>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {items.map((item) => (
          <MenuCard
            key={item.id}
            item={item}
            onClick={() => setSelectedItem(item)}
          />
        ))}
      </div>
      {salsas && salsas.length > 0 && (
        <>
          <div className="mt-8 mb-4 flex items-center gap-3">
            <div className="flex-1 h-px bg-brand-red/20 dark:bg-neutral-700" />
            <h3 className="text-xl font-heading tracking-wide text-brand-red dark:text-brand-gold">Salsas</h3>
            <div className="flex-1 h-px bg-brand-red/20 dark:bg-neutral-700" />
          </div>
          <div className="flex flex-wrap gap-2">
            {salsas.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-red/10 dark:bg-brand-gold/10 text-sm font-medium text-brand-dark dark:text-brand-gold"
              >
                <span className="w-2 h-2 rounded-full bg-brand-red" />
                {s}
              </span>
            ))}
          </div>
        </>
      )}
      <ItemDetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
}
