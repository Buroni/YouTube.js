import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import Parser from '../index.js';
import Button from './Button.js';
import ToggleButton from './ToggleButton.js';

class SegmentedLikeDislikeButton extends YTNode {
  static type = 'SegmentedLikeDislikeButton';

  like_button: ToggleButton | Button | null;
  dislike_button: ToggleButton | Button | null;

  constructor (data: RawNode) {
    super();
    this.like_button = Parser.parseItem<ToggleButton | Button>(data.likeButton, [ ToggleButton, Button ]);
    this.dislike_button = Parser.parseItem<ToggleButton | Button>(data.dislikeButton, [ ToggleButton, Button ]);
  }
}

export default SegmentedLikeDislikeButton;