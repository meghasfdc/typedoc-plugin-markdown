import { DeclarationReflection, ReflectionKind } from 'typedoc';

export function ifParentIsObjectLiteral(this: DeclarationReflection, options: any) {
  const parentIsObjectLiteral =
    this.parent && this.parent.parent && this.parent.parent.kind === ReflectionKind.ObjectLiteral;

  return parentIsObjectLiteral ? options.fn(this) : options.inverse(this);
}
