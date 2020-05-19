const checkImage = (imageSrc, callback) => {
  const img = new Image();
  img.onerror = callback;
  img.src = imageSrc;
};

export { checkImage };
