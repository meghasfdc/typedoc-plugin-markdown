/**
 * Additionally you can link to other classes, members or functions using double square brackets.
 *
 * - Link to an external reflection: [[BaseClass]]
 * - Link to an internal reflection: [[commentsInReturn]]
 * - Link to an undefined reflection: [[VOID]]
 */

export let commentsWithSymbolLinks = true;

/**
 * This is an example of include
 *
 * [[include:class-example.md]] [[include:VOID]]
 *
 * This is an example of handlebars include
 *
 * [[include:class-example.hbs]]
 */
export let commentsWithIncludes = true;

/**
 * @name Tag description on same line
 * @description
 * Tag description on new line
 * - Tag description on another line
 *
 * @deprecated
 * Another tag description
 */
export let commentsWithTags = true;

/**
 * Some comments with fence blocks
 * ```typescript
 * someFunction()
 * ```
 * ```js
 * anotherFunction()
 * ```
 */
export let commentsWithFencedBlock = true;

/**
 * Comments with a return definition
 * @returns Return comments
 */
export function commentsInReturn() {
  return;
}

/**
 * See {@linkcode INameInterface} and [INameInterface's name property]{@link INameInterface.name}.
 * Also, check out {@link https://www.google.com|Google} and
 * {@link https://github.com GitHub}.
 *
 * Taken from http://usejsdoc.org/tags-inline-link.html.
 */
export function functionWithDocLink() {
  return;
}

/**
 * Shorthand switch/case helper function. Cases arguments list is a tuple
 * consisting of case (`T`) and returned result (`R`). Returns a function where a default value is provided.
 *
 * @param value - Value to test against
 * @param cases - Tuple of case and the result if `value` and `case` is equal
 * @returns Function for which to provide the default value
 */
export const swtch = <T, R>(value: T, ...cases: Array<[T, R]>) => (def: R) => {
  for (const c of cases) {
    if (c[0] === value) {
      return c[1];
    }
  }

  return def;
};
