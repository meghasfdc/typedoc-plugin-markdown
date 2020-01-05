import MarkdownTheme from '../../theme';

export function ifCompactOutput(options) {
  return MarkdownTheme.handlebars.helpers.ifCompactOutput.call(this, options);
}
