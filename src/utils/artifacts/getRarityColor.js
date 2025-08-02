const rarityColorMap = {
  common: '#A0A0A0',
  rare: '#0096FF',
  epic: '#BA68C8',
  legendary: '#FFD700',
};

export const getRarityColor = (rarity) => {
  return rarityColorMap[rarity?.toLowerCase?.()] || '#FFFFFF';
};
