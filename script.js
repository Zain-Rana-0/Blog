document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const blogCategories = document.querySelectorAll(".blog-category");

  filterButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const category = button.dataset.category;

      // Hide all categories first
      blogCategories.forEach((cat) => {
        cat.style.display = "none";
      });

      // Show selected category
      if (category === "all") {
        blogCategories.forEach((cat) => {
          cat.style.display = "block";
        });
      } else {
        const selectedCategory = document.querySelector(`.${category}`);
        if (selectedCategory) {
          selectedCategory.style.display = "block";
        }
      }
    });
  });
  
  // Show all categories by default
  blogCategories.forEach((cat) => {
    cat.style.display = "block";
  });

  // ...existing code...
});

const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    backToTopBtn.style.display = "flex";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = "Please fill out all fields.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent =
    "Thank you for your message! I'll get back to you soon.";
  formMessage.style.color = "green";

  contactForm.reset();
});

const reviews = [
  {
    name: "John Doe",
    avatar:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAxQMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgMEBQcIAgH/xABBEAABAwMBBAcFBQUIAwEAAAABAAIDBAURIQYSMUEHEyJRYXGBFDKRobEjQmLB0RVDUuHwFiQzU3KCkrI1RPEm/8QAGQEAAgMBAAAAAAAAAAAAAAAAAAMBAgQF/8QAJxEAAgIBBAICAQUBAAAAAAAAAAECAxEEEiExQVETIiMyM0JScTT/2gAMAwEAAhEDEQA/ANUIiKxAREQARF6iikmlZFCwvkecNY0ZJKG8EnjPHOmFmrLszcbvh7YzT0/OeUYH+0cT8h4qUbObHR0oZU3YNknOrYActZ3Z7z8lsW3WSeoDZJj1MI4AjtEeA5LDZqpN7Kllj40pLMyFWnY610RaXw+2Td8rcjPg1TGhsNZM1rWwtgjA7O/2cDyUlo6Gmo24gjAdzedXH1V206hRHSSm82yJdyjxBGLp9kWboNRVucfwNwFeM2XtzR2utcfF6yMldT00YNRNHE3gC92FTpLxbqxu9T1kDwXEe+OKdHTVLpC3bY+2W39m7d/BJ/zXh+zVGf8ADfKz1ysyDnUcF9Vnp6n/ABK/JP2RqbZyVusM7Hkcn6H4rDXbZ+Opj6q7W9k8fIvZvY8jyU+5YXzdB0PDuSJaKvuLwX+Z+TRF86MopWGSwz9VINRTzHLD4B3EfNa8udsrrTUGnuVLLTy8g8aO8QeBHkurKq1wS5dGOreebRp8FH71YKevpXUd0pGTwuORnXB7weRVFbdp+JrK9k7Yz6OaUUw212ErNnnPq6PfqrYTnfAy+HweO78Xx8Yet8JxmsxEtNdhERWICIiACIiACIiACIvhOASSABzPJAFSGGSeVkULC+R53WtbxJWz9lNmY7TCHvAnuEuhc0e7+Fv5nmrHYfZ8UdOLjVx/3mUYiYRqxh5+ZW4NmbKKaNtZVN/vDx2QfuD9Vz7Zyvn8cOvJpilXHfLtniybPMpYxUVrQ+fi2PiGfzV5JJiUh5x5rL471hb1AQzrWHUcVqhXGqGIiXJzllnoysHEhUZapoad0jPJYMvk3jl5x5r7LVNpIH1E2SxgydUv50mkhypb7MBe9na++VZmr7l1bQew1gzujyWLm2LfQ0rpqa6v7B3iHNxhZ26Xx0EzGxRF7SA5xAJ4+QVvLL+2KCVsZdE5wwMZV94z40kY23bYXuzFvVTCvgOOxjhjljvW3LLcW3a101bG3c65uXMzncPAjPgVztTUc8tRJC0StJyTuNPZI56Ld/Rqws2LoQ4lziZSXE5ziRwz8laMsvBnnHCyShERMFH3C8SRskaWvGWnkvaKGsrAIw1dQhjSCA6J4ILXDIx3FaQ6RthjZ3vutoYXW95+1hGppye78P08l0O5ocCCM5WDulGxrXsfGJIZBgtcMgg8QfmufOEtNLfDryPT3rD7OVkUm292YOzd3LKcE2+pJdTOI93vYT4cu8eqjK6EJqcdy6EtNPDCIisQEREAEREAFntjbQLrdQZW5p6fEknifuj1P0WB81tjYm0vo7PBFuj2ipIkfprk8B6afNZtVbsr47Y2qO6X+E32UtftdQaqVo6mE9kHg538v0U3HBWtso20NFFTs+6NT3nmVdI09XxQx5ItnvlkKhVRiSMg8xqq6+OGVoFkPqaUid7W6YVJ8JZG4vAf+E8CVlr1GY/tmDzWHdM54LXDLTxWKxVwlybK3KSMDBVyGqPtjYgckYDsg9yrvqwSQG7pHcFb3OKlp5GPmeHuYcxhw4d3qsY6tzL2TxTHyjRlFzVGOAGqeQyCJpdJl2N5/LHeVtSz0jaK1UlMwYEUTR5nGp+Kgez1qgu88TZwNyOZszgR7+7qB8cLZAORlXqXkzamfUT6iInGQIiIAKnURNnidG/gfkqiKGk1hkr2QLa+xR3q1VNsqGgSe9E86bsg90+X5Fc8TRPhmfDOwsmjcWSMPFrgcEehXVt+g7DZwNR2XeS0L0qWkUl7ZcYmARVrftMDGJG8T6jHwKw6f8VrpfXgdL7R3EKREXQEBERABERAF9Y6P2+8UlLyklG95DU/ILfuydGJrq1zm9iBu+O4HgP68Fpzo4phNf5JXDIgp3EeDiQPpvLfWxkAbS1E3N7w30A/UlYLvyahQ9GiH1qcvZIwvq+ItxnPqL4mcakIAtq2BssLmkKKy0r2yFo4NOFI7zebdZ6Yz3OqigZjQOPad5DiVqLanpLdK97bFF1LToJ5QC4+Ib3pVunVy5G12utkwq7JDW0xm6sPexxDgDqOCi1TQthqSwNPHRUejLaOVlDcaKQSVNWZmyxhxzo4YJJPIFuTz7Sxe1F12mo7uI6iWEPlP93mpoQ3I0GBxIIyM+fFW+DCReN/s2jstQvoacySu3HEEgEe6O8q8se2dpudPGZKhlLO4DMczsanuPMKJWy53ik2ZnF4kbVTCB5dPuhjuB0OAAVrB1dNJE2IsY7TDi44GFfZsFylueTp2OWOVu9E9r297TkL3kciuZbfeq2jla6lqZosc2SEfRTGydJF1pxGyaVtYxx168ZIHgR+aMCzdKKhRVDKykhqovclYHj1CroAIiIApVMIngkiP3xhaj6R6EVuzNUTnrKUiUaajdOo+GVuFQTaOlY+qrqV47EwcCPB41+pWDVrbKNnpj6ecxOdDxRfA17Ghkmj29lw8RxX1dBdCAiIgAiIgCd9FkWZLpLjXETP+x/Nb02Xbu2iPxc76rSPRS4GK6N5h8Z+IP6LeGzn/ioh4u+pWCH/AFyz6NEv2kZRERbjOFCek/ais2ctlKLc5rJ6h7ml7hksAHEDvU2Wj+mq4CbaOOjactpYGg+Dnan5Y+KldgQSvuNTWTvmqJ5JZXnLnvcXE+pVhId73tUB1A8F8cBhMzkrgk/RpO2Ha6nY7RtRG+L1xkf9fmsxt1WiPbqmkLt9tLCzAPmSf68FC7HVGhu9DVD91UMJPhnVSHpFd/8Aq5S3QiJnwIKn+JKNkbXytj2RrZGYaXxaHzIWl53EB2O7HotkXqv9o6Lqecuy6RsLHeeQD9Fq+ebew3mTk+SrPslFZj9yJzufALxR1HVzxNLtF4c8CDBVo132pI4jGFTsDpDotu3t1idRvfvS0jt0ZOpYdR+YUzWgui+9/su+UjppAKepzBK4nQZ90n/cB8Vv0FVJYREUkBQ3asbt0yOcbSfmpkVCtrn5ubcf5Q+pWLXftD9P+s55vEfVXi4MxgCrlx5b5Vor+/u377cXDh7TJ8nEKwWyH6UJl2ERFYgIiIAnHRRKG3S5U/8AmQMe3/a4g/8AcLe2zL963ln8DyPzXOfR/VCk2tpMnDZ2ugd66j5gLoLZmXdlnjOO00OHgRxXPk9mry/KHrmrBIURFvEBcs7R3Se8XKtuFS4Omlmc444BucADwAAHouldoakUdhuFQSRuU7yMd+Dj5rliV4Y7vA4jvVkBQYd4A/wkhVn8AranzvSDvAICuAMs9VJBT17WDg40PcpBtbWCvuUFUPv0UB8+wFHnHdOO9VnTmUNB/dxiMeQCt4Amck5d0VUen/uFmPKRyhErt6dxxjdAClENQXdGwj4dRcHOPkTkfVQ9spflx4uOUS7QIuJT9k3yVtG7L3eaqyOxA0K1p3dpx5JaJZI9n6ljXmKSNzhxaW8fguk9lK39obP0VS4kvMYDs940XKcDJHytLHkY5g4IXQnQzXOqdlpKd73PNNUFrXOOSQQHa+pKh9k54J8iIToggpzP3GKBbQTdddZBn3QG/L+amFwnAyM8FrHaavMNvuNbnDix5Ye4nRv1Cxa58Rh7Zp065bNOVU3tFXPPymmfJ/ycT+apr40brGgcAMYX1bYrCM2chERSAREQB7glfBPHPHnfieHtx3g5XRezlxjqYaO4wEGOdjX6ePH81zitodEF6EkVRZJ3duLM1Nk8Wn3m+hOfU9yxayD2qa7Q2p+Gb0bgjI1C+qxtVR1lP1ZOXs08wr4LRVNWRUl5KSWHgiXSlVmk2Nq8HBmcyP0Lv5LnCfLZXHGVuzpyufs9vt1BrmeR0nmGjH1K0dUSPc7IBx3py6KlOEhtThzhvPGMK8bwxzXuwWw11PfKoxu3aC3mfeP3X9YzHy3lSjcCAggpS+8vLTuzEcsZVSQdsLy4f3h5xpujCkCSW5gk6P7y3JLxWRuaO4Ybn6KKNCluzcrP7NX+nLXGR4jLABw45PyUVcMSOHipl4BHyc4Y0eHJW8AcGb4a4tLiA5o0z3Z4ZVeRkkrxHCxz3jkAspQUr4KTqJ35bv8AWiLQYdjBIz4ABUyTgsgyXqstY9jOJ3Tkrb3QHcZJai70cj2vb1UUjS0cwXA/Vq1x19Ow40jdjVr2YDvULYHQfaZP7Q3G7wgspW03s7m8jI5zXDHfgNP/ACCrknBunOqo1Mm4w6qo9wYzXisRX1I7QB4BSQYq+1ZZC9rT236LU/SNXCKigt7H6zO33jwbw+anV0qxLM+Qu3Y4x7zuAHMrSu0FyN3u09Z+7J3Is8mDh8ePqsEfz6jd4Rpf46seWY9ERdAzBERABERABXdruFRarhBX0hAmgeHNzoD3g+Y0VoiGk0B0tsveoLvbaa60JyyRurebXc2nxClkMjZYw9h0I4LmbYDayTZm6ETZfbqlw9oYOLTyePLn3hdAW24RPiiqKeVs1PM0Pa5hyC08CFzIt6We1/pY9/kWfJGOmWyftGy09exuTRSHf/0O0+uFo+eEb26QAPkurJ4qevpJIJ2iWCZha9p5grnjbTZmr2fuT4JmF8DyTTzDhIzx8e8LpxkmuBDRGqOtlt8Fzihj3m11E6lcA7GMua4HxxukY/EVYwvBAV45pbkE/wAlRlphkOjIb35OiuQeDrID3KTU2yVXcrdHV0RDptwB0TtMjOQQfX/4otFI2SUsDm593Q5wSt4bIiKOhiYfugY55VopNPIeSM2TZSe12i4PqXHrp4Xh7QNAADgKHWTZS73hhqYKR4phqJHEN3/9OePmt5uqqaQSOeA6OJ2HHiM9ytqi6CJg6lg3PujGmPJIstXSNMKMrk1DLRfs4uhmpzFI33mu4rC1csYO5PA9h4tkikyQPDP0Klu1Vyir7xJTxVtLFJTt16x33u79fNR509PPBHLEAHPad2PTIcPoFCfGRckk8IyWxWzt42orRFRVLmULHYnq5YhiMcwO93gugrDQ0Fkt0dBQN3YY+JJ1c7mSeZKinRXcGV2xlE+IMb1TTFI1jQ0bwOpwsxXlzJ8ROwMagclZIozKV9aPdbqSoxdq46xsOp4nuC81Nb1IIzvPPioltLforNSGWRwfVSZEUfee8+Cyam/n4q+2Pqr43SMNt7exTQfsumdmaZuZj/Czu9fotfKpUTS1E8k07y+WRxc93eVTTqKlXDaLtnvlkIiJwsIiIAIiIAIiIAKX7CbbTbNP9kqt+a2Pfkxg6wk82+HMj14qIIqWQjOO2SJTaeUdPWm8wVVNHW22oZUUsoyHNOWn9COY5c1c3u2W/am1voqnsu96N33onfxBc3bO7RXLZ2pMtvl+zeQZYH/4cnmORxzHzW2NnNvLXenMic80Va4/4EpxvH8DuB+qw7bdM/rzEd9bO+zXm0tgrbBdJKGuaA7GWSNHZlb/ABD+tFk+juz0ldWS1tS1kgp3brInaje7yPopvtfaHbRsjfJVlk0ce5GS3LeOfP1UGsFs2j2VvcD6unbVW132c0lN2+yfvEe9kHB4d60Q1ULFw8MI1uEsvo2NU0FnrCyO626nm1y1z4sub4g8R6LHE0lHVSUNGBHHG0PqD1pyxhzjBPLReLlI0yPJ0lYN8A6ZHIg8FAtpdqoeslpsyB4LBKyIYbK3iQT/AFxVoybeEaJKMVkl0l0NXJCKaM+x5xTsAwJXd/lx8+Ki+2W1rqIm22uXeqf39Rx3SeQ7j9FhY9ra+pq5jFTtBfHuQhuvs7OeP1UcrY3Q1AdK1zeuYJGucMb4P3h3gqyhzyJndlYR5hZvvO92iTqTrlZanh3C0kDJGMqhbrbWVMwbTUs0xP8ACw4Uxotkq2fcNW5lM3mM7zv0HxVbLoQXLFxhKXRkOhm7vgdcbaXYa77dmTzHZd9Qp5W3DLz1bi53N35KJW20WjZyGSZhbGQO3UTv1I568lgL7ty0tMNkZqRj2l7fm0fmVmeosu+tS49jVXGHNhINotoqazRlr3CascMshHHzd3Bavr66ouNW+qq5N+V/wA7h4KjLI+WV8sr3SSPOXPcckleVoo08av8ARVljmwiItAoIiIAIiIAIiIAIiIAIiIALzgOaSQOA0RFD7Az1n2wvVse2GOq66H/LnG+B+fzW3qOZ1TboKl+GvkbkhvBfUXO11cUspGypspzhr2EPY1wPIjKxdTs7ZqgmSa2UrnniTGMoi5SsnF8M0tJrkpN2cs0PaittOwkEEtZjT0V2220MIAjpIQGANb2B2QOACIh3Wf2YRhH0Vm4aS1oAA4AKP7YXqqs0MJohEHS6EvbnHkiJ+kSlP7ci9Q9vRrmruFXc5GyV1Q+ZxzjeOg8hyVseJHIIi76SSSRzm22ERFIBERABERABERAH/9k=",
    date: "December 25, 2024",
    text: "Gardening has always been a passion of mine, and over the years, it has proven to be more than just a hobby—it’s a therapeutic escape. The joy of planting a seed and watching it grow into something beautiful is unparalleled. Whether you’re growing flowers, herbs, or vegetables, gardening connects you with nature in a way that no other activity can!",
    rating: 4,
  },
  {
    name: "Jane Smith",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpS2jXFB6LH0E_CwixZJydltAkEw56cWgUZZXcKuWYsB_62QdktUvv1l4&s",
    date: "December 24, 2024",
    text: "If you’re looking for a way to express your emotions, relax, and tap into your creative side, painting is an incredible hobby to explore. Whether you prefer oil, watercolor, or acrylics, the act of putting brush to canvas allows for endless possibilities. I personally enjoy experimenting with abstract art, where I can freely mix colors and shapes to represent my feelings. Painting also offers therapeutic benefits, acting as a form of stress relief and meditatio.",
    rating: 3,
  },
  {
    name: "Alice Johnson",
    avatar:
      "data:image/jpeg;base64,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",
    date: "December 20, 2024",
    text: "Gaming is not just for kids—it’s a dynamic and exciting hobby that offers a variety of experiences for everyone. Whether you’re into fast-paced action games, deep role-playing games, or competitive esports, there’s a game for every type of player. I’ve personally found gaming to be a great way to relax, socialize, and immerse myself in different worlds. What I love most is the escape it provides, allowing me to experience thrilling adventures and challenge my strategic thinking.",
    rating: 5,
  },
];

function generateStars(rating) {
  let stars = "";
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars += "★";
    } else {
      stars += "☆";
    }
  }
  return stars;
}

function createReviewCard(review) {
  const card = document.createElement("div");
  card.classList.add("review-card");

  card.innerHTML = `
        <img class="review-avatar" src="${review.avatar}" alt="${
    review.name
  } Avatar">
        <div class="review-content">
            <h3 class="review-name">${review.name}</h3>
            <p class="review-date">${review.date}</p>
            <p class="review-text">${review.text}</p>
            <div class="review-rating">
                <span>Rating: </span>
                <span class="rating-stars">${generateStars(
                  review.rating
                )}</span>
            </div>
        </div>
    `;

  return card;
}

const reviewsContainer = document.getElementById("reviews-container");
reviews.forEach((review) => {
  const reviewCard = createReviewCard(review);
  reviewsContainer.appendChild(reviewCard);
});
