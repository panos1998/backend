document.getElementById('i478p').onclick = (event) => {
    const formData = new FormData();
    const fileField = document.querySelector('input[type="file"]');
    formData.append('file', fileField.files[0]);
    fetch('https://example.com/profile/avatar', {
      method: 'POST',
      body: formData
    }
         )
      .then(response => response.json())
      .then(result => {
      console.log('Success:', result);
    }
           )
      .catch(error => {
      console.error('Error:', error);
    }
            );
  };
  document.getElementById('submit').onclick = (event) => {
    const formData = new FormData();
    const password = document.getElementsByName('password')[0].value ;
    console.log(password)
    const fileField = document.querySelector('input[type="file"]');
    const label = document.getElementById('staticBackdropLabel');
    label.innertHTML="Your algorithm is loading";
    const modalContent = document.getElementById('model-content');
    modalContent.innerHTML="";
    if(password=="" || fileField==""){
      label.innertHTML='Please put a model file and the password';
      modalContent.innerHTML="" ;
    }
    formData.append('file', fileField.files[0]);
    formData.append('password',password);
    fetch('', {
      method: 'POST',
      body: formData
    }
         )
      .then(response => response.json())
      .then(result => {
      if(result==200){
        label.innertHTML="Perfect";
        modalContent.innerHTML= "Your model has been successfully uploaded";
      }
      else{
        label.innertHTML=Error;
        modalContent.innerHTML= "An internal problem has been encountered";
      }
      console.log('Success:', result);
    }
           )
      .catch(error => {
      console.error('Error:', error);
    }
            );
  };
  function calculateSize(img, maxWidth, maxHeight) {
    let width = img.width;
    let height = img.height;
    // calculate the width and height, constraining the proportions
    if (width > height) {
      if (width > maxWidth) {
        height = Math.round((height * maxWidth) / width);
        width = maxWidth;
      }
    }
    else {
      if (height > maxHeight) {
        width = Math.round((width * maxHeight) / height);
        height = maxHeight;
      }
    }
    return [width, height];
  }
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    }
                      );
  };
  document.getElementById('customFile').addEventListener("change", async(e) => {
    const MAX_WIDTH = 300;
    const MAX_HEIGHT = 300;
    const MIME_TYPE = "image/jpeg";
    const QUALITY = 0.9;
    const file = e.target.files[0];
    // get the file
    const blobURL = URL.createObjectURL(file);
    const img = new Image();
    img.src = blobURL;
    img.onerror = function () {
      URL.revokeObjectURL(this.src);
      console.log("Cannot load image");
    };
    img.onload = function () {
      URL.revokeObjectURL(this.src);
      const [newWidth, newHeight] = calculateSize(img, MAX_WIDTH, MAX_HEIGHT);
      const canvas = document.createElement("canvas");
      canvas.width = newWidth;
      canvas.height = newHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, newWidth, newHeight);
      canvas.toBlob(
        async (blob) => {
          const base64 = await convertBase64(blob);
          document
            .getElementById('customFile')
            .setAttribute("data-image-base64", base64);
          document
            .getElementById('customFile')
            .setAttribute("name", e.target.files[0].name);
        }
        ,
        MIME_TYPE,
        QUALITY
      );
    };
  }
                                                        );
  window.onload = () => {
  };
  