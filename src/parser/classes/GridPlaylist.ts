import Text from './misc/Text.js';
import Parser from '../index.js';
import Thumbnail from './misc/Thumbnail.js';
import PlaylistAuthor from './misc/PlaylistAuthor.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import NavigatableText from './misc/NavigatableText.js';
import { YTNode } from '../helpers.js';

class GridPlaylist extends YTNode {
  static type = 'GridPlaylist';

  id: string;
  title: Text;
  author?: PlaylistAuthor;
  badges;
  endpoint: NavigationEndpoint;
  view_playlist: NavigatableText;
  thumbnails: Thumbnail[];
  thumbnail_renderer;
  sidebar_thumbnails: Thumbnail[] | null;
  video_count: Text;
  video_count_short: Text;

  constructor(data: any) {
    super();
    this.id = data.playlistId;
    this.title = new Text(data.title);

    if (data.shortBylineText) {
      this.author = new PlaylistAuthor(data.shortBylineText, data.ownerBadges);
    }

    this.badges = Parser.parse(data.ownerBadges);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.view_playlist = new NavigatableText(data.viewPlaylistText);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.thumbnail_renderer = Parser.parse(data.thumbnailRenderer);
    this.sidebar_thumbnails = [].concat(...data.sidebarThumbnails?.map((thumbnail: any) => Thumbnail.fromResponse(thumbnail)) || []) || null;
    this.video_count = new Text(data.thumbnailText);
    this.video_count_short = new Text(data.videoCountShortText);
  }
}

export default GridPlaylist;