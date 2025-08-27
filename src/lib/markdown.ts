// @unocss-include
import type { MarkedExtension } from 'marked';

export const shortcutsExtension: MarkedExtension = {
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
      return `<h${depth} class="${className} pt-6">${token}</h${depth}>`;
    },
    
    link(href: string, title: string | null | undefined, text: string ): string {
      const titleAttr = title ? ` title="${title}"` : '';
      const hrefAttr = href || '#';
      return `<a href="${hrefAttr}"${titleAttr} class="link">${text}</a>`;
    }
  }
};