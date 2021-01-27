const checkImage = (imageSrc, callback) => {
  if (!imageSrc) return;
  const img = new Image();
  img.onerror = callback;
  img.src = imageSrc;
};

const checkImagePromises = (path) =>
  new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve({ success: true });
    img.onerror = () => resolve({ success: false });
    img.src = path;
  });

export { checkImage, checkImagePromises };
