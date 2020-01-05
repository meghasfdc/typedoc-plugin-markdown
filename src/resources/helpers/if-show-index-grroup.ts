import { ReflectionGroup } from 'typedoc/dist/lib/models/ReflectionGroup';

import MarkdownTheme from '../../theme';

export function ifShowIndexGroup(this: ReflectionGroup, options) {
  if (MarkdownTheme.handlebars.helpers.ifCompactOutput && !this.allChildrenHaveOwnDocument()) {
    return options.inverse(this);
  }
  return options.fn(this);
}
