import { DeclarationReflection } from 'typedoc';

import MarkdownTheme from '../../theme';
import { stripLineBreaks } from './strip-line-breaks';
import { type } from './type';

export function propertyTable(this: DeclarationReflection[]) {
  const comments = this.map(
    property => (property.comment && !!property.comment.text) || (property.comment && !!property.comment.shortText),
  );
  const hasComments = !comments.every(value => !value);
  const headers = ['Name', 'Type'];
  if (hasComments) {
    headers.push('Description');
  }
  const rows = this.map(property => {
    const isOptional = property.flags.includes('Optional');
    const typeOut = type.call(property.type);
    const row = [];
    row.push(`\`${property.name}${isOptional ? '?' : ''}\` `);
    row.push(typeOut ? typeOut.toString().replace(/\|/g, '&#124;') : '');
    if (hasComments) {
      const commentsText = [];
      if (property.comment && property.comment.shortText) {
        commentsText.push(
          MarkdownTheme.handlebars.helpers.comment.call(stripLineBreaks.call(property.comment.shortText)),
        );
      }
      if (property.comment && property.comment.text) {
        commentsText.push(MarkdownTheme.handlebars.helpers.comment.call(stripLineBreaks.call(property.comment.text)));
      }
      row.push(commentsText.length > 0 ? commentsText.join(' ') : '-');
    }
    return `${row.join(' | ')} | \n`;
  });
  const output = `\n${headers.join(' | ')} | \n${headers.map(() => '------').join(' | ')} | \n${rows.join('')}`;
  return output;
}
