const GetCroppedImageUrl = (url) => {
  if (!url) return "https://online.maryville.edu/wp-content/uploads/sites/97/2023/10/MVU-BFADM-2020-Q4-Skyscraper-Future-of-Video-Games-Trends-Technology-Types-header-v2-1000x523-1.jpg";

  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default GetCroppedImageUrl;
