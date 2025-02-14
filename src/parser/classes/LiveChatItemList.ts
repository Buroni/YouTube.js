import Parser from '../index.js';
import { YTNode } from '../helpers.js';
import type Button from './Button.js';

class LiveChatItemList extends YTNode {
  static type = 'LiveChatItemList';

  max_items_to_display: string;
  more_comments_below_button: Button | null;

  constructor(data: any) {
    super();
    this.max_items_to_display = data.maxItemsToDisplay;
    this.more_comments_below_button = Parser.parseItem<Button>(data.moreCommentsBelowButton);
  }
}

export default LiveChatItemList;