import './style.css';
import Swal from 'sweetalert2';

const resImageContainer = document.querySelector('.res-image-container');
const superHeroImage = document.querySelector('.super-hero-image');
const resName = document.querySelector('.res-name');
const btnSort = document.querySelector('.btn-sort');

const randomNumber = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);

btnSort.addEventListener('click', (event) => {
  event.preventDefault();
  const token = 8891243104282438;
  const URL_BASE = `https://superheroapi.com/api.php/${token}`;
  const max = 731;
  const apiCharacterId = `${URL_BASE}/${randomNumber(max, 0)}`;

  fetch(apiCharacterId).then((response) => response.json())
    .then((data) => {
      resName.innerHTML = data.name;
      superHeroImage.src = data.image.url;
    }).catch((error) => Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.message,
      footer: 'Alguma coisa deu errado!',
    }))
    .finally(() => resImageContainer.classList.add('active'));
});
