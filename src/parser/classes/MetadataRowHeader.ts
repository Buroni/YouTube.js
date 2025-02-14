import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';

class MetadataRowHeader extends YTNode {
  static type = 'MetadataRowHeader';

  content: Text;
  has_divider_line: boolean;

  constructor(data: any) {
    super();
    this.content = new Text(data.content);
    this.has_divider_line = data.hasDividerLine;
  }
}

export default MetadataRowHeader;