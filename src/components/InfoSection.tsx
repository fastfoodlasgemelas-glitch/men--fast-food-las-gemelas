export default function InfoSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-heading tracking-wide text-brand-dark dark:text-white mb-4">
        {'\uD83D\uDCCD'} Informaci&oacute;n
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-brand-card rounded-xl border border-brand-cream-dark dark:border-neutral-800 p-6">
          <h3 className="font-heading text-brand-dark dark:text-white text-lg mb-3 flex items-center gap-2 tracking-wide">
            {'\uD83D\uDCCD'} Ubicaci&oacute;n
          </h3>
          <p className="text-sm text-gray-600 dark:text-brand-gray leading-relaxed">
            Corinto, Departamento de Moraz&aacute;n, El Salvador
          </p>
          <div className="mt-4 pt-3 border-t border-brand-cream-dark dark:border-neutral-700">
            <h4 className="font-medium text-brand-dark dark:text-white text-sm mb-2">
              {'\uD83D\uDCDE'} Pedidos
            </h4>
            <p className="text-sm text-gray-600 dark:text-brand-gray">
              Llamar o WhatsApp: 6992-2006
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-brand-card rounded-xl border border-brand-cream-dark dark:border-neutral-800 p-6">
          <h3 className="font-heading text-brand-dark dark:text-white text-lg mb-3 flex items-center gap-2 tracking-wide">
            {'\uD83C\uDF89'} Personalizaciones por Temporada
          </h3>
          <p className="text-sm text-gray-600 dark:text-brand-gray mb-4">
            Dale un toque especial a tu menu digital en fechas importantes. Cada personalizacion incluye
            colores, iconos y decoraciones tematicas.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              { emoji: '\uD83C\uDF39', label: '10 de Mayo' },
              { emoji: '\uD83C\uDF83', label: 'Halloween' },
              { emoji: '\uD83C\uDF84', label: 'Navidad' },
              { emoji: '\uD83C\uDF86', label: 'A\u00F1o Nuevo' },
              { emoji: '\u2764\uFE0F', label: 'San Valentin' },
              { emoji: '\uD83C\uDF1F', label: 'Fiestas Patronales' },
            ].map((t) => (
              <span
                key={t.label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-red/10 dark:bg-brand-gold/10 text-sm text-brand-dark dark:text-brand-gold"
              >
                <span>{t.emoji}</span>
                {t.label}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-brand-gold/10 dark:bg-brand-gold/5 border border-brand-gold/20 dark:border-brand-gold/10">
            <span className="text-brand-gold-dark dark:text-brand-gold font-bold text-lg">$15</span>
            <span className="text-sm text-gray-600 dark:text-brand-gray">por cada personalizacion de temporada</span>
          </div>
        </div>
      </div>
    </section>
  );
}
