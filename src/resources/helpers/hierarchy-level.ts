import { ReferenceType } from 'typedoc/dist/lib/models';

import { spaces } from './spaces';

export function hierachyLevel(this: ReferenceType, level: any, isTarget: boolean) {
  let spaceCount = parseInt(level, 10) * 2;
  if (!isTarget) {
    spaceCount = spaceCount * 2;
  }
  level = level || 0;
  spaceCount = spaceCount || 0;

  const symbol = spaces(spaceCount) + ' *';

  return symbol;
}
