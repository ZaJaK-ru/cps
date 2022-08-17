const serviceText = document.querySelector('.services__content-text');
const btnShowMoreServiceText = document.querySelector('.services__show-more');

btnShowMoreServiceText.addEventListener('click', function(e) {
  e.preventDefault();

  btnShowMoreServiceText.classList.toggle('show-more--open');
  serviceText.classList.toggle('services__content-text--open');

  if (btnShowMoreServiceText.textContent === 'Читать далее') {
    btnShowMoreServiceText.textContent = 'Скрыть';
  } else if (btnShowMoreServiceText.textContent === 'Скрыть') {
    btnShowMoreServiceText.textContent = 'Читать далее';
  }
});

const brandsList = document.querySelector('.brands__list');
const btnBrandsShowMore = document.querySelector('.brands__show-more');

btnBrandsShowMore.addEventListener('click', function(e) {
  e.preventDefault();

  btnBrandsShowMore.classList.toggle('show-more--open');
  brandsList.classList.toggle('brands__list--open');

  if (btnBrandsShowMore.textContent === 'Показать все') {
    btnBrandsShowMore.textContent = 'Скрыть';
  } else if (btnBrandsShowMore.textContent === 'Скрыть') {
    btnBrandsShowMore.textContent = 'Показать все';
  }
});

const techTypesShowMore = document.querySelector('.tech-types__list');
const btnTechTypesShowMore = document.querySelector('.tech-types__show-more');

btnTechTypesShowMore.addEventListener('click', function(e) {
  e.preventDefault();

  btnTechTypesShowMore.classList.toggle('show-more--open');
  techTypesShowMore.classList.toggle('tech-types__list--open');

  if (btnTechTypesShowMore.textContent === 'Показать все') {
    btnTechTypesShowMore.textContent = 'Скрыть';
  } else if (btnTechTypesShowMore.textContent === 'Скрыть') {
    btnTechTypesShowMore.textContent = 'Показать все';
  }
});