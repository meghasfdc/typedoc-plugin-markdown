import { DeclarationReflection, ReflectionKind } from 'typedoc';

export function ifIsLiteralType(this: DeclarationReflection, options: any) {
  const isLiteralType = this.kind === ReflectionKind.ObjectLiteral || this.kind === ReflectionKind.TypeLiteral;
  return isLiteralType ? options.fn(this) : options.inverse(this);
}
