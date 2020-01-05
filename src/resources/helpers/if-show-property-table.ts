import { DeclarationReflection, ReflectionType } from 'typedoc/dist/lib/models';

import MarkdownTheme from '../../theme';

export function ifShowPropertyTable(this: any, options) {
  const declarations = getReflectionDeclarations(this.children as DeclarationReflection[]);
  const hasTypeDeclarations = declarations && declarations.some(declaration => declaration);

  if (
    MarkdownTheme.handlebars.helpers.ifCompactOutput &&
    this.kindString === 'Interface' &&
    this.title === 'Properties' &&
    !hasTypeDeclarations
  ) {
    return options.fn(this);
  }

  return options.inverse(this);
}

function getReflectionDeclarations(collection: DeclarationReflection[]) {
  return (
    collection &&
    collection.map(item => {
      const type = item.type as ReflectionType;
      return type && type.declaration;
    })
  );
}
