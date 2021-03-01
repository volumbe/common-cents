console.log("Public Test 2");

document.querySelectorAll('.tabs li').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tabs li').forEach(item => item.classList.remove('is-active'));
    tab.classList.add('is-active');
    const tabContentBoxes = document.querySelectorAll('#tab-content > div');
    const target = tab.dataset.target;
    // console.log(target);
    tabContentBoxes.forEach(box => {
      if (box.getAttribute('id') === target) {
        box.classList.remove('is-hidden');
      } else {
        box.classList.add('is-hidden');
      }
    })
  })
})