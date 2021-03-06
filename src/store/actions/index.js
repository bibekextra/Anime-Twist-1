import * as Constants from '../constants';

// Anime actions
export const loadAnimeList = (animeList) => ({
  type: Constants.LOAD_ANIME_LIST,
  animeList,
});

// Episodes actions
export const markEpisodeAsCurrent = (episode) => ({
  type: Constants.MARK_EPISODE_AS_CURRENT,
  episode,
});

export const markEpisodeAsComplete = (episode) => ({
  type: Constants.MARK_EPISODE_COMPLETE,
  episode,
});

export const unmarkEpisodeAsCurrent = (episode) => ({
  type: Constants.UNMARK_EPISODE_AS_CURRENT,
  episode,
});

export const undoMarkEpisodeAsComplete = (episode) => ({
  type: Constants.UNDO_MARK_EPISODE_COMPLETE,
  episode,
});

// Favorite anime actions
export const addToFavorites = (anime) => ({
  type: Constants.ADD_TO_FAVORITES,
  anime,
});

export const removeAllFavorites = () => ({
  type: Constants.REMOVE_ALL_FAVORITES,
});

export const removeFromFavorites = (anime) => ({
  type: Constants.REMOVE_FROM_FAVORITES,
  anime,
});
