const wes = document.querySelector('.wes');

wes.addEventListener('click', (e) => {
  console.log('clicked!');
  const shuldChangepage = confirm('this site is dangerous! do you wish to go ?');
  if (shuldChangepage) {
    console.log('test');
    window.location = e.currentTarget.href;
  }
  e.preventDefault();
});
