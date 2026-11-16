import parisTriompheImg from './images/paris_triomphe_4k_1794794286617.jpg';
import gildedSalonImg from './images/gilded_salon_4k_1794794288042.jpg';
import louvreGalleryImg from './images/louvre_gallery_4k_1794794289871.jpg';
import editorialPortraitImg from './images/editorial_portrait_4k_1794794291128.jpg';
import eveningTriptychImg from './images/evening_triptych_4k_1794794291604.jpg';
import bottleVodkaImg from './images/white_horse_vodka_v2_1794795393685.jpg';
import bottleReserveImg from './images/white_horse_reserve_v2_1794795393855.jpg';
import bottleMartiniImg from './images/white_horse_martini_v2_1794795393625.jpg';
import sevenRilaLakesImg from './images/seven_rila_lakes_4k.jpg';

export type MediaAssetKey =
  | 'triomphe'
  | 'salon'
  | 'louvre'
  | 'portrait'
  | 'triptych'
  | 'bottleVodka'
  | 'bottleReserve'
  | 'bottleMartini'
  | 'rilaLakes';

export const MEDIA_ASSETS: Record<MediaAssetKey, string> = {
  triomphe: parisTriompheImg,
  salon: gildedSalonImg,
  louvre: louvreGalleryImg,
  portrait: editorialPortraitImg,
  triptych: eveningTriptychImg,
  bottleVodka: bottleVodkaImg,
  bottleReserve: bottleReserveImg,
  bottleMartini: bottleMartiniImg,
  rilaLakes: sevenRilaLakesImg,
};
