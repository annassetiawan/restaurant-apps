const buttonInitiator = () => {
  const buttons = document.querySelectorAll('#button');
  const contents = document.querySelectorAll('.content');

  const handleClick = (e) => {
    e.preventDefault();
    const { name } = e.currentTarget.dataset;
    console.log(name);
    // Buttons
    buttons.forEach((button) => button.classList.remove('active_btn'));
    e.currentTarget.classList.add('active_btn');
    contents.forEach((content) => content.classList.remove('active'));

    [...contents].filter((content) => content.dataset.name === name).map((content) => content.classList.add('active'));
  };

  buttons.forEach((button) => button.addEventListener('click', handleClick));

  const all = document.querySelector('.all');

  all.addEventListener('click', () => {
    contents.forEach((content) => content.classList.add('active'));
  });
};

export default buttonInitiator;
