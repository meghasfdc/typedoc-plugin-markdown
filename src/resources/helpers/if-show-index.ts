import { DeclarationReflection } from 'typedoc';

import MarkdownTheme from '../../theme';

export function ifShowIndex(this: DeclarationReflection, options) {
  const someGroupsHaveOwnDocument = this.groups && this.groups.some(group => group.allChildrenHaveOwnDocument());
  if (MarkdownTheme.handlebars.helpers.ifCompactOutput && !someGroupsHaveOwnDocument) {
    return options.inverse(this);
  }
  if (someGroupsHaveOwnDocument) {
    return options.fn(this);
  }
  return MarkdownTheme.handlebars.helpers.ifIndexes.call(this, options);
}
