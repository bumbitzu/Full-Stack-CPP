document.addEventListener('DOMContentLoaded', () =>
{
  const display = document.getElementById('display');
  const buttons = Array.from(document.getElementsByClassName('btn'));

  buttons.map(button =>
  {
    button.addEventListener('click', (e) =>
    {
      const value = e.target.getAttribute('data-value');

      if (value === 'C')
      {
        display.value = '';
      } else if (value === '=')
      {
        const operation = display.value;

        fetch('/calculate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ operation }),
        })
          .then(response => response.text())
          .then(result =>
          {
            display.value = result;
          })
          .catch(error =>
          {
            console.error('Error:', error);
          });
      } else
      {
        display.value += value;
      }
    });
  });
});
