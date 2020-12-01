const checkImage = (imageSrc, callback) => {
  if (!imageSrc) return;
  const img = new Image();
  img.onerror = callback;
  img.src = imageSrc;
};

export { checkImage };
