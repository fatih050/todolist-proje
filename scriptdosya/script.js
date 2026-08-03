const ekleButonu = document.querySelector(".btn.btn-primary");
const ustKutu = document.querySelector(".BGiris");
ekleButonu.addEventListener("click", yazdir)
function yazdir (e) {
  e.preventDefault();
  const altKutular = document.querySelectorAll(".Akutu");
  const yeniBilgi = ustKutu.value;
  if(yeniBilgi === "") {
    alert("Bu alanı doldurun")
    return;
  }
  for(let x=0; x<altKutular.length; x++) {
  if(altKutular[x].value === "") {
  altKutular[x].value = yeniBilgi;
  break;
  }
}
ustKutu.value = "";
}
document.addEventListener("click", sil)
function sil (e) {
    if(e.target.classList.contains("btn-primary")) {
        const bosInput = e.target.previousElementSibling;
        bosInput.value = ""
    }
}
