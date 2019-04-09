window.onload = function () {

  /* ************************ HEADER TEMPLATE ************************ */
    let headerIndex = 
    `<div class="header">
    <img class="logo" src="./img/LOGO.png">
    <h1>Rotten Potatos</h1>
    <p>Qualidade e Originalidade</p>
    </div>`;

    document.getElementById("headerIndex").innerHTML = headerIndex;
  /* ***************************************************************** */

 
  /* ************************ MENU TEMPLATE ************************ */
    let menuIndex = 
    `<div class="topnav">
    <a href="index.html">Início</a>
    <a href="lancamentos.html">Lançamentos</a>
    <a href="indicacoes.html">Indicações</a>
    <a href="about.html" style="float:right">Quem somos</a>
    </div>`;

    document.getElementById("menuIndex").innerHTML = menuIndex;
  /* ***************************************************************** */
}
