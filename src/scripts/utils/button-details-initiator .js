const buttonInitiatorDetails = () => {
  const buttons = document.querySelectorAll('#button');
  const contentsDetail = document.querySelectorAll('.details_content');

  const handleClick = (e) => {
    e.preventDefault();
    const { name } = e.currentTarget.dataset;
    // Buttons
    console.log(e.currentTarget.dataset.name);

    buttons.forEach((button) => button.classList.remove('active_btn'));
    e.currentTarget.classList.add('active_btn');
    contentsDetail.forEach((content) => content.classList.remove('active'));

    [...contentsDetail]
      .filter((content) => content.dataset.name === name)
      .map((content) => content.classList.add('active'));
  };

  buttons.forEach((button) => button.addEventListener('click', handleClick));
};

export default buttonInitiatorDetails;
