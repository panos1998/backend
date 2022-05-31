document.getElementById('docpicker').onclick = (event) => {
  console.log("paok");
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
document.getElementById('iwnko').addEventListener("change", async(e) => {
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
          .getElementById('iwnko')
          .setAttribute("data-image-base64", base64);
        document
          .getElementById('iwnko')
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
