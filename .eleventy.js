module.exports = function(eleventyConfig) {
  // Говорим движку копировать папку админки и картинки как есть
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/assets"); // Если будут картинки

  return {
    dir: {
      input: "src",    // Отсюда берем файлы
      output: "public" // Сюда Netlify положит готовый сайт
    }
  };
};