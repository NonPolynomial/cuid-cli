#!/usr/bin/env node
const cuid = require('cuid');

const args = require('yargs')
  .usage('$0 [amount]', '', (y) => {
    y
      .positional('amount', {
        description: 'amount of CUIDs to generate',
        type: 'number',
        default: 1,
      });
  })
  .options({
    s: {
      alias: 'slug',
      type: 'boolean',
      default: false,
    }
  })
  .help()
  .argv;

const isSlug = args._.includes('slug') || args.slug;

Array.from({ length: args.amount }, () => {
  return isSlug ? cuid.slug() : cuid();
})
  .forEach((id) => {
    process.stdout.write(id);
    process.stdout.write('\n');
  });
