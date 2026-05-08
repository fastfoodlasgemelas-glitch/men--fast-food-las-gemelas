export default function InfoSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-heading tracking-wide text-brand-dark dark:text-white mb-4">
        {'\uD83D\uDCCD'} Informaci&oacute;n
      </h2>

      <div className="max-w-md">
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
      </div>
    </section>
  );
}
