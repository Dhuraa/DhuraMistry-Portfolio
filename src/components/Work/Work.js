import "./Work.css";

const Work = () => {
  const handleChange = (event) => {
    console.log(event);
  };
  
  const state = {};
const carouselList = document.querySelector('.carousel__list');
const carouselItems = document.querySelectorAll('.carousel__item');
const elems = Array.from(carouselItems);

carouselList.addEventListener('click', function (event) {
  var newActive = event.target;
  var isItem = newActive.closest('.carousel__item');

  if (!isItem || newActive.classList.contains('carousel__item_active')) {
    return;
  };
  
  update(newActive);
});

const update = function(newActive) {
  const newActivePos = newActive.dataset.pos;

  const current = elems.find((elem) => elem.dataset.pos == 0);
  const prev = elems.find((elem) => elem.dataset.pos == -1);
  const next = elems.find((elem) => elem.dataset.pos == 1);
  const first = elems.find((elem) => elem.dataset.pos == -2);
  const last = elems.find((elem) => elem.dataset.pos == 2);
  
  current.classList.remove('carousel__item_active');
  
  [current, prev, next, first, last].forEach(item => {
    var itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, newActivePos)
  });
};

const getPos = function (current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 2) {
    return -current
  }

  return diff;
}

  return (
    
    <section id="work">
      <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
        Work
      </h1>
      <div class="carousel">
        <ul class="carousel__list">
          <li class="carousel__item" data-pos="-2">
            1
          </li>
          <li class="carousel__item" data-pos="-1">
            2
          </li>
          <li class="carousel__item" data-pos="0">
            3
          </li>
          <li class="carousel__item" data-pos="1">
            4
          </li>
          <li class="carousel__item" data-pos="2">
            5
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Work;
