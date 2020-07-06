# parse-sb3-blocks
**parse-sb3-blocks** can parse Scratch 3.0 block formats, and convert it to [scratchblocks](https://github.com/scratchblocks/scratchblocks) format.

## Usage
### Example
```js
import {toScratchblocks} from 'parse-sb3-blocks';

const sb3blocks = {
    'ND,(]G?KLIy(IZrd2sl.': {
        opcode: 'event_whenflagclicked',
        ...
    }
};

console.log(toScratchblocks('ND,(]G?KLIy(IZrd2sl.', sb3blocks, 'en', {tabs: ' '.repeat(4)}));
```

### toScratchblocks
**toScratchblocks** is a function. This can take three to four arguments:

- scriptStart: The block ID to start parsing from. **This must be a block ID of Connectable** (which includes stack block, hat block, definition block, procedure call block, C block, E block and cap block.)
- blocks: serialized SB3 format (project.json format) of blocks.
- locale: Locale to use. `en` should always be available.
- opts: Optional. It can be a object that have `tabs` key for tab characters. **Note that while parse-sb3-blocks can use non-space/tab indent, scratchblocks only accepts tab or spaces.**

**NOTE: We expect you to ONLY PASS ALREADY-VALIDATED BLOCKS. This package has little (if any) validation for the blocks passed, and a crafted blocks can lead to Denial of Service attacks or other security concerns. For performance reasons, we do not implement validations inside parse-sb3-blocks. VALIDATE YOURSELF.**

### Internal Functions and Parsers
It also exports several classes used internally by the parsers.

#### Inputtable and Connectable
Connectable is an instance that can be connected to a stack block via next-parent, including:
- Block (stack, hat, cap)
- CBlock
- EBlock (if-else)
- Definition
- ProcedureCall
- SpecialBlock (block that uses special translation map)

Inputtable can be used as an argument. Note that `Icon` is not technically an argument, but is Inputtable.
- Stack (for arguments to C/E blocks)
- Menu (includes fields menu and menu block)
- Variable (variable reporters and custom block arguments)
- Icon (greenFlag, turnLeft, turnRight icon)
- BooleanBlock
- ReporterBlock
- Input and its subclasses NumberInput, StringInput, ColorPickerInput, BroadcastMenuInput, EmptyBooleanInput

Both Connectable and Inputtable implement `toScratchblocks` method. It accepts `locale` and `opts`, similar to the exported `toScratchblocks`.

Instances with class name ending with "Block" have these attributes:
- `id` for block ID
- `opcode` for block opcode
- `Inputtables` for object of input key to Inputtable

### Block Mapping
`block-enum`.js provides an enum for block types.

`translations.js` is an auto-generated file which includes all translations. `options.js` is also auto-generated, and contains which block needs options (because of conflicting names).

`special-messages.js` is automatically generated from [extra_aliases.js](https://github.com/scratchblocks/scratchblocks/blob/master/locales-src/extra_aliases.js).

**Only blocks and menu items in all-blocks.js is supported.**

#### all-blocks.js
all-blocks.js default-exports allBlocks, which is an object with opcode as key and the object (see below) as value.

The object has these keys and values:
- isSpecialBlock: If set to `true`, it uses `SpecialBlock`, meaning it used icons and translations must be picked from special-messages.js. Also, if this is true, all other properties are optional.
- defaultMessage: Message in default language (English).
- type: The block type. Defaults to `BlockEnum.BLOCK`.
- defaultOptions: The block option for the block when using defaultMessage, in case duplicates exist. It can have category key and the category as a value.
- translationKey: Translation key for scratch-l10n. Defaults to the block opcode, upper-cased.
- boolArg: Array of arguments which must be boolean. Used to fill empty arguments with `EmptyBooleanInput`. If omitted, empty array is used.

## Building
Node 14+ is preferred for building. Type `npm run build`, which generates locale files.

### env
- `mode`: Unless set to `dev`, the result is minified.
- `SPECIAL_MESSAGES_URL`: URL to extra_aliases.js
