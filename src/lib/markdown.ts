// @unocss-include
import type { MarkedExtension } from 'marked';
interface ShortcutsExtensionOptions {
  paddedHeading?: 'top' | 'bottom' | false;
  paddedParagraph?: boolean;
}

const defaultOptions: Required<ShortcutsExtensionOptions> = {
  paddedHeading: 'top',
  paddedParagraph: false
};

export function shortcutsExtension(opts: ShortcutsExtensionOptions = {}): MarkedExtension {
  const options: Required<ShortcutsExtensionOptions> = { ...defaultOptions, ...opts };
  return {
    renderer: {
      heading(token, depth): string {
        const headingClasses = {
          1: 'heading-1',
          2: 'heading-2',
          3: 'heading-3',
          4: 'heading-4',
          5: 'heading-5',
          6: 'heading-5'
        };

        const className = headingClasses[depth as keyof typeof headingClasses] || 'heading-5';

        let paddingClass = '';
        switch (options.paddedHeading) {
          case 'top':
            paddingClass = ' pt-6';
            break;
          case 'bottom':
            paddingClass = ' pt-4 pb-2';
            break;
          case false:
          default:
            paddingClass = '';
            break;
        }

        return `<h${depth} class="${className}${paddingClass}">${token}</h${depth}>`;
      },

      link(href: string, title: string | null | undefined, text: string): string {
        const titleAttr = title ? ` title="${title}"` : '';
        const hrefAttr = href || '#';
        return `<a href="${hrefAttr}"${titleAttr} class="link">${text}</a>`;
      },

      paragraph(text) {
        return `<p class="${options.paddedParagraph ? 'mb-1' : ''}">${text}</p>`;
      },
    }
  };
}