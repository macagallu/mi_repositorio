const MyImages = [
      {
        src:
          "https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        title: "Mountain"
      },
      {
        src:
          "https://images.pexels.com/photos/1575861/pexels-photo-1575861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "Lake"
      },
      {
        src:
          "https://images.pexels.com/photos/1464081/pexels-photo-1464081.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        title: "Forest"
      },
      {
        src:
          "https://images.pexels.com/photos/3348363/pexels-photo-3348363.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        title: "Gate"
      },
      {
        src:
          "https://images.pexels.com/photos/3526084/pexels-photo-3526084.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        title: "Castle"
      }
    ];

    const addImage = function(arrayWithImages) {
      if (Array.isArray(arrayWithImages)) {
        this.images = arrayWithImages;
      } else {
        console.log(new Error("Argument in function is not array."));
        return;
      }

      const root = document.documentElement;
      const wrapper = document.getElementById("wrapper");

      const numberOfImages = this.images.reduce(
        accumulator => accumulator + 1,
        0
      );
      root.style.setProperty("--imgs", numberOfImages);

      let gallery = this.images.forEach(image => {
        let img = new Image(1000,1000);
        let figure = document.createElement("figure");
        let figcaption = document.createElement("figcaption");

        img.src = image.src;
        img.alt = image.title;

        //Manipulate figcaption here.
        figcaption.innerHTML = `There is ${image.title}<br>on the image.`;

        //Finally, add image to gallery and catch errors if they are
        img
          .decode()
          .then(img.classList.add("img"))
          //Get correct container by ID
          .then(wrapper.appendChild(figure))
          .then(figure.appendChild(img))
          .then(figure.appendChild(figcaption))
          .catch(err => {
            console.log("Failed...", err);
          });
      });
    };

    //Initialize
    window.onload = addImage(MyImages);



