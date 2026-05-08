import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryTabs from './components/CategoryTabs';
import MenuGrid from './components/MenuGrid';
import InfoSection from './components/InfoSection';
import SocialSection from './components/SocialSection';
import WhatsAppButton from './components/WhatsAppButton';
import SearchBar from './components/SearchBar';
import { useTheme } from './hooks/useTheme';
import { categories, menuItems } from './data/menuData';
import type { FlatMenuItem } from './types/menu';

function flattenItems(categoryId: string): FlatMenuItem[] {
  return menuItems
    .filter((item) => item.category === categoryId)
    .map((item) => ({
      id: item.id,
      name: item.name,
      description: item.description,
      price: item.price ?? 0,
      category: item.category,
      note: item.note,
      image: item.image,
    }));
}

function flattenAllItems(): FlatMenuItem[] {
  return menuItems.map((item) => ({
    id: item.id,
    name: item.name,
    description: item.description,
    price: item.price ?? 0,
    category: item.category,
    note: item.note,
    image: item.image,
  }));
}

export default function App() {
  const { isDark, toggle } = useTheme();
  const [categoriaActiva, setCategoriaActiva] = useState(categories[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  const activeCat = categories.find((c) => c.id === categoriaActiva);

  const footer = (
    <footer className="text-center py-8 text-sm text-gray-400 dark:text-neutral-600">
      <p className="font-heading text-lg tracking-wide">Fast Food Las Gemelas</p>
      <p>Corinto, Morazan, El Salvador</p>
    </footer>
  );

  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    const resultados = flattenAllItems().filter((item) =>
      item.name.toLowerCase().includes(query)
    );

    return (
      <div className="min-h-screen pb-20 bg-brand-cream dark:bg-brand-dark transition-colors">
        <Header isDark={isDark} onToggleTheme={toggle} />
        <Hero />
        <CategoryTabs
          categories={categories}
          activeCategory={categoriaActiva}
          onSelect={(id) => {
            setCategoriaActiva(id);
            setSearchQuery('');
          }}
        />
        <SearchBar query={searchQuery} onChange={setSearchQuery} />
        <MenuGrid
          items={resultados}
          categoryName={`Resultados: "${searchQuery}"`}
        />
        <WhatsAppButton />
        {footer}
      </div>
    );
  }

  if (categoriaActiva === 'info') {
    return (
      <div className="min-h-screen pb-20 bg-brand-cream dark:bg-brand-dark transition-colors">
        <Header isDark={isDark} onToggleTheme={toggle} />
        <Hero />
        <CategoryTabs
          categories={categories}
          activeCategory={categoriaActiva}
          onSelect={setCategoriaActiva}
        />
        <SearchBar query={searchQuery} onChange={setSearchQuery} />
        <InfoSection />
        <WhatsAppButton />
        {footer}
      </div>
    );
  }

  if (categoriaActiva === 'siguenos') {
    return (
      <div className="min-h-screen pb-20 bg-brand-cream dark:bg-brand-dark transition-colors">
        <Header isDark={isDark} onToggleTheme={toggle} />
        <Hero />
        <CategoryTabs
          categories={categories}
          activeCategory={categoriaActiva}
          onSelect={setCategoriaActiva}
        />
        <SearchBar query={searchQuery} onChange={setSearchQuery} />
        <SocialSection />
        <WhatsAppButton />
        {footer}
      </div>
    );
  }

  const items = flattenItems(categoriaActiva);

  return (
    <div className="min-h-screen pb-20 bg-brand-cream dark:bg-brand-dark transition-colors">
      <Header isDark={isDark} onToggleTheme={toggle} />
      <Hero />
      <CategoryTabs
        categories={categories}
        activeCategory={categoriaActiva}
        onSelect={setCategoriaActiva}
      />
      <SearchBar query={searchQuery} onChange={setSearchQuery} />
      <MenuGrid
        items={items}
        categoryName={activeCat?.name ?? ''}
        salsas={categoriaActiva === 'alitas' ? ['Búfalo', 'BBQ', 'Chipotle', 'Ranch', 'Jalapeño'] : undefined}
      />
      <WhatsAppButton />
      {footer}
    </div>
  );
}
